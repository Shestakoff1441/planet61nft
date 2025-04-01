import React from "react";
import styles from "./RedirectModal.module.scss"; // Importing external CSS file

export const RedirectModal = ({ onClose }) => {
  const openInBrowser = () => {
    const url = window.location.href;
    window.open(url, "_system");
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
