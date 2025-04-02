import React from "react";
import styles from "./RedirectModal.module.scss"; // Importing external CSS file

export const RedirectModal = ({ onClose }) => {
  const openInBrowser = () => {
    const url = window.location.href;
    if (window.navigator.userAgent.includes("Android")) {
      // Open in external browser on Android
      window.location.href = `intent://${url.replace(
        /^https?:\/\//,
        ""
      )}#Intent;scheme=https;package=com.android.chrome;end;`;
    } else if (
      window.navigator.userAgent.includes("iPhone") ||
      window.navigator.userAgent.includes("iPad")
    ) {
      // Open in external browser on iOS
      // window.open(url, "_blank", "noopener,noreferrer");
      window.location.href =
        "googlechrome://" + url.replace(/^https?:\/\//, "");
    } else {
      // Fallback for other platforms
      window.open(url, "_blank");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.closeButton} onClick={onClose}>
          X
        </div>

        <div className={styles.modalTitle}>Hello this is title</div>
        <button
          className={styles.btn + " " + styles.primaryBtn}
          onClick={openInBrowser}
        >
          Redirect to browser
        </button>
        <button
          className={styles.btn + " " + styles.tertiaryBtn}
          onClick={onClose}
        >
          Continue here
        </button>
      </div>
    </div>
  );
};
