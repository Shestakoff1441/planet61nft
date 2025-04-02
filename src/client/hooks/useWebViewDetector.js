import { useState, useEffect } from "react";

// Examples of user-agent:

// Reddit
// Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Reddit/Version 2023.22.0

// Tik Tok
// Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36 TTWebView/4.9

// Twitter
// Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Twitter for iPhone/8.50

// Telegram
// Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36 TelegramBot (like TwitterBot)

// Instagram
// Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 200.0.0.1.60 (iPhone12,1; iOS 16_0; en_US; en; scale=2.00; 828x1792; 309843906)

// Facebook
// Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone;FBMD/iPhone;FBSN/iOS;FBSV/15.0;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]

// List of apps to check
// const apps = [
//   { name: "Facebook", keyword: "fban|fbav" },
//   { name: "Instagram", keyword: "instagram" },
//   { name: "Twitter", keyword: "twitter" },
//   { name: "TikTok", keyword: "tiktok" },
//   { name: "WeChat", keyword: "micromessenger" },
//   { name: "LinkedIn", keyword: "linkedin" },
//   { name: "Snapchat", keyword: "snapchat" },
//   { name: "Pinterest", keyword: "pinterest" },
//   { name: "Reddit", keyword: "reddit" }
// ];

export const useWebViewDetector = () => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    let isTelegram = false;
    const userAgentRaw =
      navigator.userAgent || navigator.vendor || window.opera;
    const userAgent =
      typeof userAgentRaw === "string" ? userAgentRaw.toLowerCase() : "";

    const isAndroidWebView = /Version\/[\d.]+.*Chrome\/[.0-9]* Mobile/.test(
      userAgent
    );
    const isIOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      userAgent
    );

    const isGenericWebView =
      !!window.openDatabase || navigator.userAgent.includes("wv");

    if (
      (userAgent.includes("android") &&
        typeof window.TelegramWebview !== "undefined") ||
      (userAgent.includes("iphone") &&
        typeof window.TelegramWebviewProxy !== "undefined" &&
        typeof window.TelegramWebviewProxyProto !== "undefined")
    ) {
      isTelegram = true;
    }
    const isWebView =
      isAndroidWebView || isIOSWebView || isGenericWebView || isTelegram;

    setResult(isWebView);
  }, []);

  return result;
};
