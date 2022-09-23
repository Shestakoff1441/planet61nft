import { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./ConnectWalletButton.module.scss";
import { CFormSelect } from "@coreui/react";

const MintComponent = () => {
  const [quantityOfNft, setQuantity] = useState(1);
  const price = process.env.NEXT_PUBLIC_NFT_PRE_MINT_PRICE;
  return (
    <div className={styles.mintComponent}>
      <div className={styles.quantityAndPriceBlock}>
        <div className={styles.amountBlock}>
          <span>Amount:</span>
          <CFormSelect
            onChange={(e) => setQuantity(e.target.value)}
            style={{
              width: "30px",
              fontSize: "22px",
              height: "38px",
              border: "1px solid #f5deb3",
              fontFamily: "Stick No Bills",
              padding: "4px 0",
              backgroundImage: "none",
              textAlign: "center",
              color: "#f6ae18",
              background: "#000",
              marginLeft: "10px"
            }}
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" }
            ]}
          />
        </div>
        <div className={styles.totalPriceBlock}>
          <span className={styles.priceTitle}>Price:</span>
          <span className={styles.totalPrice}>
            {price * Number(quantityOfNft)} ETH
          </span>
        </div>
      </div>

      <button className={styles.mintButton}>Mint</button>
    </div>
  );
};
const ConnectWalletButton = ({ replaceTo, walletStyles }) => {
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

  const components = {
    mint: MintComponent
  };
  const Component = components["mint"];
  return (
    <>
      {replaceTo && currentAccount ? (
        <Component />
      ) : (
        <button
          className={classnames(styles.connectWalletButton, walletStyles)}
          onClick={connectWalletHandler}
        >
          {currentAccount ? (
            String(currentAccount).substring(0, 6) +
            "..." +
            String(currentAccount).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      )}
    </>
  );
};
export default ConnectWalletButton;
