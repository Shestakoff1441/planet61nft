import { useState, useEffect } from "react";
import styles from "./ConnectWalletButton.module.scss";
const ConnectWalletButton = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      window.open("https://metamask.io/");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        } else {
          setCurrentAccount("");
        }
      });
    } else {
      console.log("https://metamask.io/download.html");
      // setStatus(
      //   <p>
      //     {" "}
      //     🦊{" "}
      //     <a
      //       target="_blank"
      //       href={"https://metamask.io/download.html"}
      //       rel="noreferrer"
      //     >
      //       You must install Metamask, a virtual Ethereum wallet, in your
      //       browser.
      //     </a>
      //   </p>
      // );
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
    addWalletListener();
  }, [currentAccount]);
  return (
    <button
      className={styles.connectWalletButton}
      onClick={connectWalletHandler}
    >
      {currentAccount ? (
        String(currentAccount).substring(0, 6) +
        "..." +
        String(currentAccount).substring(38)
      ) : (
        <span>Connect Wallets</span>
      )}
    </button>
  );
};
export default ConnectWalletButton;
