function checkURL() {
      const url = document.getElementById("urlInput").value.trim();
      const resultBox = document.getElementById("phishResult");
      const suspiciousPatterns = [
        /@/, /%/, /login/, /verify/, /secure/, /update/, /account/, /free/, /gift/, /win/,
        /\.tk$/, /\.ml$/, /\.ga$/, /\.cf$/, /\.gq$/
      ];

      let isSuspicious = false;
      suspiciousPatterns.forEach((pattern) => {
        if (pattern.test(url.toLowerCase())) {
          isSuspicious = true;
        }
      });

      if (!url.startsWith("http")) {
        resultBox.innerHTML = "🚨 Please enter a valid URL starting with http or https.";
        return;
      }

      resultBox.innerHTML = isSuspicious ? "🚨 This URL seems <b>suspicious</b>. Proceed with caution!" : "✅ This URL looks <b>safe</b>.";
    }

    function generateQR() {
      const url = document.getElementById("urlInput").value.trim();
      const qrContainer = document.getElementById("qr-code");
      qrContainer.innerHTML = "";

      if (!url.startsWith("http")) {
        qrContainer.innerHTML = "❌ Please enter a valid URL starting with http or https.";
        return;
      }

      new QRCode(qrContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark : "#ffffff",
        colorLight : "#0f172a",
        correctLevel : QRCode.CorrectLevel.H
      });
    }function checkURL() {
      const url = document.getElementById("urlInput").value.trim();
      const resultBox = document.getElementById("phishResult");
      const suspiciousPatterns = [
        /@/, /%/, /login/, /verify/, /secure/, /update/, /account/, /free/, /gift/, /win/,
        /\.tk$/, /\.ml$/, /\.ga$/, /\.cf$/, /\.gq$/
      ];

      let isSuspicious = false;
      suspiciousPatterns.forEach((pattern) => {
        if (pattern.test(url.toLowerCase())) {
          isSuspicious = true;
        }
      });

      if (!url.startsWith("http")) {
        resultBox.innerHTML = "🚨 Please enter a valid URL starting with http or https.";
        return;
      }

      resultBox.innerHTML = isSuspicious ? "🚨 This URL seems <b>suspicious</b>. Proceed with caution!" : "✅ This URL looks <b>safe</b>.";
    }

    function generateQR() {
      const url = document.getElementById("urlInput").value.trim();
      const qrContainer = document.getElementById("qr-code");
      qrContainer.innerHTML = "";

      if (!url.startsWith("http")) {
        qrContainer.innerHTML = "❌ Please enter a valid URL starting with http or https.";
        return;
      }

      new QRCode(qrContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark : "#ffffff",
        colorLight : "#0f172a",
        correctLevel : QRCode.CorrectLevel.H
      });
    }