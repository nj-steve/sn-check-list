// utils/sn-validate.js
// SN input validation + unified scan-result dispatch (shared by home-page scan / result-page "continue scanning")
//
// Rules: scanned content < 17 chars (or doesn't look like an SN) → show a modal suggesting other methods (image OCR / last-7 lookup)
//        valid SN → go to the result page and run the three-tier doCheck() matching
//
// ★ The home page and result page must share the same logic, so it is centralized here — do not duplicate it in the pages

/** Minimum SN length (below this the content is considered "not an SN"; guide users to image OCR or other methods) */
export const SN_MIN_LENGTH = 17

/**
 * Determine overall whether the scanned content doesn't look like an SN and other methods should be suggested
 * Trigger conditions (any one):
 *  1. Length < SN_MIN_LENGTH (default 17)
 *  2. Length > 30 (too long to be an SN; probably text)
 *  3. Contains URL markers (http:// https://)
 *  4. Is an order-number format (ORD + digits)
 *  5. Contains spaces/Chinese/special symbols
 *  6. Is not purely uppercase alphanumeric
 *
 * @returns {null|{need:true, reason:string}} null = valid SN
 */
export function shouldUseOcr(sn) {
  const clean = String(sn || '').trim()

  if (clean.length === 0) {
    return { need: true, reason: 'Empty content' }
  }
  if (clean.length < SN_MIN_LENGTH) {
    return { need: true, reason: `Length under ${SN_MIN_LENGTH} chars (got ${clean.length})` }
  }
  if (clean.length > 30) {
    return { need: true, reason: `Too long (${clean.length} chars, over 30)` }
  }
  // URL marker
  if (/^https?:\/\//i.test(clean)) {
    return { need: true, reason: 'Is a URL' }
  }
  // Order number
  if (/^ORD\d+$/i.test(clean)) {
    return { need: true, reason: 'Is an order number' }
  }
  // Contains Chinese/spaces/common special characters
  if (/[\s一-龥\-,;:!?]/.test(clean)) {
    return { need: true, reason: 'Contains non-SN characters (space/Chinese/punctuation)' }
  }
  // Not purely uppercase alphanumeric
  if (!/^[A-Z0-9]+$/i.test(clean)) {
    return { need: true, reason: 'Not an alphanumeric combination' }
  }
  return null  // valid SN
}

// ============== Camera permission guard (iOS) ==============

/**
 * ★ On iOS, when camera permission is DENIED, uni.scanCode still opens the scan UI —
 *   it shows a BLACK screen with only a flashlight icon and never fails via callback.
 *   Check the real authorization status up front and bail out with guidance instead.
 * @param {function} [onDenied] called when access is denied/restricted
 * @returns {boolean} true = safe to launch the scanner
 */
export function ensureCameraPermission(onDenied) {
	// #ifdef APP-PLUS
	try {
		if (typeof plus !== 'undefined' && plus.os && plus.os.name === 'iOS') {
			const AVCaptureDevice = plus.ios.importClass('AVCaptureDevice')
			if (AVCaptureDevice) {
				// 0 = notDetermined, 1 = restricted, 2 = denied, 3 = authorized
				const status = AVCaptureDevice.authorizationStatusForMediaType_('vide')
				if (status === 1 || status === 2) {
					if (onDenied) onDenied()
					return false
				}
			}
		}
	} catch (e) {
		console.warn('[camera] permission check failed:', e && e.message)
	}
	// #endif
	return true
}

/** Guide the user to system Settings after camera permission was denied */
export function showCameraDeniedModal() {
	uni.showModal({
		title: 'Camera Permission Needed',
		content: 'Camera access is denied, so the scanner shows a black screen. Enable it in Settings → Privacy → Camera (or Settings → this App → Camera), then scan again.',
		confirmText: 'Settings',
		cancelText: 'Cancel',
		success: (r) => {
			if (r.confirm && typeof plus !== 'undefined') {
				plus.runtime.openURL('app-settings:')
			}
		}
	})
}

/**
 * Unified scan-result handling (shared by home-page handleSn and result-page onContinue)
 *
 * @param {string} sn scanned content
 * @param {string} scanType barcode type (CODE128/QR/...)
 * @param {boolean} redirect true = use redirectTo to replace the current page (for continuing scans inside the result page);
 *                           false = use navigateTo (for the home page)
 * @param {function} [onRescan] callback when "Rescan" is tapped in the modal (the result page can pass this.onContinue for continuous scanning)
 */
export function dispatchScan(sn, scanType, redirect, onRescan) {
  sn = String(sn || '').trim()
  if (!sn) {
    uni.showToast({ title: 'No content recognized', icon: 'none' })
    return
  }
  uni.vibrateShort && uni.vibrateShort({})
  console.log(`[scan] Got: "${sn}" (${sn.length} chars)`)

  // ★ Doesn't look like an SN (incl. <17 chars) → suggest other methods
  const needOcr = shouldUseOcr(sn)
  if (needOcr) {
    console.log(`[scan] Suggesting another method: ${needOcr.reason}`)
    uni.showModal({
      title: 'Image OCR needed',
      content: `Scanned "${sn}"\nReason: ${needOcr.reason}\n\nTry another method:\n• Image OCR (photo of the SN label)\n• SN last-7 lookup`,
      confirmText: 'Image OCR',
      cancelText: 'Rescan',
      success: (r) => {
        if (r.confirm) {
          const url = `/pages/ocr/ocr?shortText=${encodeURIComponent(sn)}&reason=${encodeURIComponent(needOcr.reason)}`
          if (redirect) {
            uni.redirectTo({ url })
          } else {
            uni.navigateTo({ url })
          }
        } else if (onRescan) {
          onRescan()  // "Rescan" relaunches scanning directly
        }
      }
    })
    return
  }

  // Normal: go to the result page (doCheck three-tier matching)
  console.log(`[scan] Valid SN format, navigating to result page`)
  const url = `/pages/result/result?sn=${encodeURIComponent(sn)}&type=${scanType || ''}`
  if (redirect) {
    uni.redirectTo({ url })
  } else {
    uni.navigateTo({ url })
  }
}
