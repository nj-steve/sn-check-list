# SN Check App (uni-app cross-platform)

> 📍 Path: `/Users/zhouying/wwwroot/Xuefeng/sn-check-app/`

Scan and verify miner SNs, checking whether they are in the "OK to remove" whitelist.
**One codebase → compiled into iOS App / Android App / H5 / WeChat mini-program**.

## Features

| Feature | Description |
|---|---|
| 📷 Scanning | Native camera via `uni.scanCode`; supports CODE128 / QR / EAN etc. |
| 🔍 Verification | After scanning an SN, local O(1) lookup; a match shows "OK to remove" |
| ⚠️ **Image OCR fallback** | When scanned content is < 17 chars, OCR photo recognition starts automatically |
| 🔄 Whitelist sync | Pulls the SN list from the repair system `/api/faults?status=7` to local storage |
| 📋 History | Stores the last 200 scan records locally |
| 🌐 Offline | Matches against the locally cached whitelist when offline |
| 🔐 Auto login | MD5 login for token, auto re-login on expiry |
| 📱 Cross-platform | iOS / Android / WeChat mini-program / H5 |

## Page Structure

```
sn-check-app/
├── pages/
│   ├── index/index.vue      # Home: scan + sync + history entry
│   ├── result/result.vue    # Result: ✅ OK to remove / ⛔ Do not remove
│   ├── ocr/ocr.vue          # OCR image recognition page (auto-routing by environment)
│   │                        # - H5: runs front-end Tesseract.js
│   │                        # - App: loads the H5 sub-page in a <web-view>
│   │                        # - Mini-program: uses backend OCR
│   └── history/history.vue  # History
├── hybrid/html/ocr/         # App webview sub-page (pure front-end OCR)
│   ├── index.html           # Photo + OCR + postMessage back to the app
│   └── local-ocr.umd.js     # UMD version of the Tesseract wrapper
├── api/
│   └── sn.js                # Backend API (incl. OCR)
├── utils/
│   └── auth.js              # token + SN whitelist management
├── App.vue                  # Global styles
├── main.js
├── pages.json               # Page routes
├── manifest.json            # App config (permissions / icons / packaging)
└── README.md
```

## Key Code

### 1. Scanning (`pages/index/index.vue`)
```js
uni.scanCode({
    success: (res) => {
        const sn = (res.result || '').trim()
        // ★ < 17 chars → go to OCR
        if (sn.length < 17) {
            uni.navigateTo({ url: `/pages/ocr/ocr?shortText=${sn}` })
            return
        }
        uni.navigateTo({ url: `/pages/result/result?sn=${encodeURIComponent(sn)}` })
    }
})
```

### 2. OCR auto-routing (`pages/ocr/ocr.vue`)
```vue
<!-- #ifdef APP-PLUS -->
<web-view
    :src="`/hybrid/html/ocr/index.html?shortText=${shortText}`"
    @message="onWebviewMessage"
/>
<!-- #endif -->

<!-- #ifndef APP-PLUS -->
<!-- H5: use local-ocr.js directly; mini-program: use the backend -->
<!-- #endif -->
```

### 3. App webview communication
```js
// H5 sub-page (hybrid/html/ocr/index.html) sends after recognition:
window.uni.postMessage({
    data: { action: 'ocrResult', sn: 'JYZZF9...', source: 'ocr' }
})

// ocr.vue receives:
onWebviewMessage(e) {
    e.detail.data.forEach(msg => {
        if (msg.action === 'ocrResult') {
            uni.redirectTo({ url: `/pages/result/result?sn=${msg.sn}` })
        }
    })
}
```

### 4. Whitelist sync (`utils/auth.js`)
```js
export function fetchSnList() {
    return authRequest({ url: '/api/faults?...&page_size=500', method: 'GET' })
        .then(res => res.data.data.list.map(x => x.sn))
        .then(setSnList)
}
```

### 5. Verification (`pages/result/result.vue`)
```js
buildSnIndex()  // Set<sn>
this.matched = checkSnInList(sn)  // O(1) lookup
```

## Build & Package

### Recommended tool: **HBuilderX** (DCloud's official IDE, free)
1. Download: https://www.dcloud.io/hbuilderx.html
2. File → Open Directory → select `sn-check-app/`
3. Menu: **Release** → choose the target platform
   - **iOS**: generate an Xcode project / cloud packaging (Apple certificate required)
   - **Android-App cloud packaging**: upload to the DCloud cloud, .apk ready in 3-5 minutes
   - **WeChat mini-program**: generates the mini-program bundle directly; open it in WeChat DevTools
   - **H5**: generates a static website

### Command line (CLI)
```bash
npm install -g @vue/cli @vue/cli-init
# in the sn-check-app directory
npm init
# then initialize a uni-app project with a vue-cli template
# or use the DCloud CLI directly:
npm install -g @dcloudio/uvm
```

## Configuration

Open `utils/auth.js` and change these:

```js
export const CONFIG = {
    // loginUrl: 'https://repair.datastring.cc/api/login',
	loginUrl:'/api/login',
    // apiBase: 'https://repair.datastring.cc',
	apiBase:'',
    passwordMd5: 'a4aab74c3c6f76a9fbee49a1c41f984e',  // MD5(openclaw123)
    username: 'openclaw-asset',
    // change to your actual "OK to remove" SN list API
    snListApi: '/api/faults?group_id=1&status=7'
}
```

## Backend Integration Suggestions

If you want the App to really connect to your backend:

1. **Whitelist API** (required): returns all "OK to remove" SNs
   ```
   GET /api/faults?group_id=1&status=7&page_size=500
   ```
   Or create a dedicated API:
   ```
   GET /api/sn/whitelist  → ["JYZZF9...", "ABC123...", ...]
   ```

2. **Single-SN lookup** (optional, for detail display):
   ```
   GET /api/faults?sn=JYZZF9...&group_id=1
   ```

3. **Scan log reporting** (optional, for auditing):
   ```
   POST /api/scan/log
   { "sn": "JYZZF9...", "matched": true, "time": 1234567890 }
   ```

4. **OCR image recognition API** (needed for the OCR fallback):
   ```
   POST /api/ocr/upload   (multipart/form-data, field: image)
     → { "code":0, "data": { "url": "https://..." } }

   POST /api/ocr/sn
     Body: { "image_url": "https://...", "hint": "JY" }
     → { "code":0, "data": {
         "words": [
           { "text": "JYZZF9CBDJBBI06EM", "confidence": 0.96 }
         ],
         "text": "ANTMINER T21_180T\nM SN:JYZZF9CBDJBBI06EM"
       } }
   ```

   Backend implementation options (pick one):
   - **Baidu OCR**: `https://aip.baidubce.com/rest/2.0/ocr/v1/general` (high accuracy, pay-per-call, free quota for new users)
   - **Tencent Cloud OCR**: general text recognition, similar pricing
   - **PaddleOCR / Tesseract**: self-hosted, free but needs GPU/tuning

   Minimal Go example (Baidu OCR):
   ```go
   func OcrSn(c *gin.Context) {
       var req struct{ ImageURL, Hint string }
       c.BindJSON(&req)
       // 1. Download the image into bytes
       // 2. Call the Baidu OCR API: POST https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=xxx
       // 3. Return the words list
       c.JSON(200, gin.H{"code": 0, "data": gin.H{
           "words": parsedWords,  // [{text, confidence}]
           "text":  fullText,
       }})
   }
   ```

## Security Notes

- Hardcoding an MD5 password in code is only acceptable for an "internal read-only" account
- Production should use OAuth / JWT + short-lived tokens
- The removal action should have a second confirmation / photo evidence
