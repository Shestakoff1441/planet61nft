// import { useEffect } from "react";

// const MintContainer = () => {
//   useEffect(() => {
//     let accounts;

//     // METAMASK CONNECTION
//     window.addEventListener("load", async () => {
//       const welcomeH1 = document.getElementById("welcomeH1");
//       const welcomeH2 = document.getElementById("welcomeH2");
//       const welcomeP = document.getElementById("welcomeP");
//       console.log(welcomeH1);
//       welcomeH1.innerText = welcome_h1;
//       welcomeH2.innerText = welcome_h2;
//       welcomeP.innerHTML = welcome_p;
//       async function checkChain() {
//         let chainId = 0;
//         if (chain === "rinkeby") {
//           chainId = 4;
//         } else if (chain === "polygon") {
//           chainId = 137;
//         } else if (chain === "ethereum") {
//           chainId = 1;
//         }
//         if (window.ethereum.networkVersion !== chainId) {
//           try {
//             await window.ethereum.request({
//               method: "wallet_switchEthereumChain",
//               params: [{ chainId: web3.utils.toHex(chainId) }]
//             });
//             updateConnectStatus();
//           } catch (err) {
//             // This error code indicates that the chain has not been added to MetaMask.
//             if (err.code === 4902) {
//               try {
//                 if (chain === "rinkeby") {
//                   await window.ethereum.request({
//                     method: "wallet_addEthereumChain",
//                     params: [
//                       {
//                         chainName: "Rinkeby Test Network",
//                         chainId: web3.utils.toHex(chainId),
//                         nativeCurrency: {
//                           name: "ETH",
//                           decimals: 18,
//                           symbol: "ETH"
//                         },
//                         rpcUrls: [
//                           "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
//                         ]
//                       }
//                     ]
//                   });
//                 } else if (chain === "polygon") {
//                   await window.ethereum.request({
//                     method: "wallet_addEthereumChain",
//                     params: [
//                       {
//                         chainName: "Polygon Mainnet",
//                         chainId: web3.utils.toHex(chainId),
//                         nativeCurrency: {
//                           name: "MATIC",
//                           decimals: 18,
//                           symbol: "MATIC"
//                         },
//                         rpcUrls: ["https://polygon-rpc.com/"]
//                       }
//                     ]
//                   });
//                 }
//                 updateConnectStatus();
//               } catch (err) {
//                 console.log(err);
//               }
//             }
//           }
//         }
//       }

//       const updateConnectStatus = async () => {
//         const onboarding = new MetaMaskOnboarding();
//         const onboardButton = document.getElementById("connectWallet");
//         const notConnected = document.querySelector(".not-connected");
//         const spinner = document.getElementById("spinner");
//         if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
//           onboardButton.innerText = "Install MetaMask!";
//           onboardButton.onclick = () => {
//             onboardButton.innerText = "Connecting...";
//             onboardButton.disabled = true;
//             onboarding.startOnboarding();
//             // HIDE SPINNER
//             spinner.classList.add("hidden");
//             notConnected.classList.remove("hidden");
//             notConnected.classList.add("show-not-connected");
//           };
//         } else if (accounts && accounts.length > 0) {
//           onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
//           window.address = accounts[0];
//           onboardButton.disabled = true;
//           onboarding.stopOnboarding();
//           notConnected.classList.remove("show-not-connected");
//           notConnected.classList.add("hidden");
//           // SHOW SPINNER
//           spinner.classList.remove("hidden");
//           window.contract = new web3.eth.Contract(abi, contractAddress);
//           loadInfo();
//         } else {
//           onboardButton.innerText = "Connect MetaMask!";
//           // HIDE SPINNER
//           spinner.classList.add("hidden");
//           notConnected.classList.remove("hidden");
//           notConnected.classList.add("show-not-connected");
//           onboardButton.onclick = async () => {
//             await window.ethereum
//               .request({
//                 method: "eth_requestAccounts"
//               })
//               .then(function (accts) {
//                 onboardButton.innerText = `✔ ...${accts[0].slice(-4)}`;
//                 notConnected.classList.remove("show-not-connected");
//                 notConnected.classList.add("hidden");
//                 //SHOW SPINNER
//                 spinner.classList.remove("hidden");
//                 onboardButton.disabled = true;
//                 window.address = accts[0];
//                 accounts = accts;
//                 window.contract = new web3.eth.Contract(abi, contractAddress);
//                 loadInfo();
//               });
//           };
//         }
//       };
//       if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         checkChain();
//       } else if (window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider);
//       }

//       if (window.web3) {
//         // Check if User is already connected by retrieving the accounts
//         await window.web3.eth.getAccounts().then(async (addr) => {
//           accounts = addr;
//         });
//       }

//       updateConnectStatus();
//       if (MetaMaskOnboarding.isMetaMaskInstalled()) {
//         window.ethereum.on("accountsChanged", (newAccounts) => {
//           accounts = newAccounts;
//           updateConnectStatus();
//         });
//       }

//       console.log(window.contract);

//       async function loadInfo() {
//         window.info = await window.contract.methods.getInfo().call();
//         const publicMintActive = await contract.methods.mintingActive().call();
//         const presaleMintActive = await contract.methods.presaleActive().call();
//         const mainHeading = document.getElementById("mainHeading");
//         const subHeading = document.getElementById("subHeading");
//         const mainText = document.getElementById("mainText");
//         const actionButton = document.getElementById("actionButton");
//         const mintContainer = document.getElementById("mintContainer");
//         const mintButton = document.getElementById("mintButton");
//         const spinner = document.getElementById("spinner");

//         let startTime = "";
//         if (publicMintActive) {
//           mainHeading.innerText = h1_public_mint;
//           mainText.innerText = p_public_mint;
//           actionButton.classList.add("hidden");
//           mintButton.innerText = button_public_mint;
//           mintContainer.classList.remove("hidden");
//           setTotalPrice();
//         } else if (presaleMintActive) {
//           startTime = window.info.runtimeConfig.publicMintStart;
//           mainHeading.innerText = h1_presale_mint;
//           subHeading.innerText = h2_presale_mint;

//           try {
//             // CHECK IF WHITELISTED
//             const merkleData = await fetch(
//               `/.netlify/functions/merkleProof/?wallet=${window.address}&chain=${chain}&contract=${contractAddress}`
//             );
//             const merkleJson = await merkleData.json();
//             const whitelisted = await contract.methods
//               .isWhitelisted(window.address, merkleJson)
//               .call();
//             if (!whitelisted) {
//               mainText.innerText = p_presale_mint_not_whitelisted;
//               actionButton.innerText = button_presale_mint_not_whitelisted;
//             } else {
//               mainText.innerText = p_presale_mint_whitelisted;
//               actionButton.classList.add("hidden");
//               mintButton.innerText = button_presale_mint_whitelisted;
//               mintContainer.classList.remove("hidden");
//             }
//           } catch (e) {
//             // console.log(e);
//             mainText.innerText = p_presale_mint_already_minted;
//             actionButton.innerText = button_presale_already_minted;
//           }
//           setTotalPrice();
//         } else {
//           startTime = window.info.runtimeConfig.presaleMintStart;
//           mainHeading.innerText = h1_presale_coming_soon;
//           subHeading.innerText = h2_presale_coming_soon;
//           mainText.innerText = p_presale_coming_soon;
//           actionButton.innerText = button_presale_coming_soon;
//         }
//         const clockdiv = document.getElementById("countdown");
//         clockdiv.setAttribute("data-date", startTime);
//         countdown();

//         // HIDE SPINNER
//         spinner.classList.add("hidden");

//         // SHOW CARD
//         setTimeout(() => {
//           const countdownCard = document.querySelector(".countdown");
//           countdownCard.classList.add("show-card");
//         }, 1000);

//         let priceType = "";
//         if (chain === "rinkeby" || chain === "ethereum") {
//           priceType = "ETH";
//         } else if (chain === "polygon") {
//           priceType = "MATIC";
//         }
//         const price = web3.utils.fromWei(
//           info.deploymentConfig.mintPrice,
//           "ether"
//         );
//         const pricePerMint = document.getElementById("pricePerMint");
//         const maxPerMint = document.getElementById("maxPerMint");
//         const totalSupply = document.getElementById("totalSupply");
//         const mintInput = document.getElementById("mintInput");

//         pricePerMint.innerText = `${price} ${priceType}`;
//         maxPerMint.innerText = `${info.deploymentConfig.tokensPerMint}`;
//         totalSupply.innerText = `${info.deploymentConfig.maxSupply}`;
//         mintInput.setAttribute("max", info.deploymentConfig.tokensPerMint);

//         // MINT INPUT
//         const mintIncrement = document.getElementById("mintIncrement");
//         const mintDecrement = document.getElementById("mintDecrement");
//         const setQtyMax = document.getElementById("setQtyMax");
//         const min = mintInput.attributes.min.value || false;
//         const max = mintInput.attributes.max.value || false;
//         mintDecrement.onclick = () => {
//           let value = parseInt(mintInput.value) - 1 || 1;
//           if (!min || value >= min) {
//             mintInput.value = value;
//             setTotalPrice();
//           }
//         };
//         mintIncrement.onclick = () => {
//           let value = parseInt(mintInput.value) + 1 || 1;
//           if (!max || value <= max) {
//             mintInput.value = value;
//             setTotalPrice();
//           }
//         };
//         setQtyMax.onclick = () => {
//           mintInput.value = max;
//           setTotalPrice();
//         };
//         mintInput.onchange = () => {
//           setTotalPrice();
//         };
//         mintInput.onkeyup = async (e) => {
//           if (e.keyCode === 13) {
//             mint();
//           }
//         };
//         mintButton.onclick = mint;
//       }

//       function setTotalPrice() {
//         const mintInput = document.getElementById("mintInput");
//         const mintInputValue = parseInt(mintInput.value);
//         const totalPrice = document.getElementById("totalPrice");
//         const mintButton = document.getElementById("mintButton");
//         if (
//           mintInputValue < 1 ||
//           mintInputValue > info.deploymentConfig.tokensPerMint
//         ) {
//           totalPrice.innerText = "INVALID QUANTITY";
//           mintButton.disabled = true;
//           mintInput.disabled = true;
//           return;
//         }
//         const totalPriceWei =
//           BigInt(info.deploymentConfig.mintPrice) * BigInt(mintInputValue);

//         let priceType = "";
//         if (chain === "rinkeby" || chain === "ethereum") {
//           priceType = "ETH";
//         } else if (chain === "polygon") {
//           priceType = "MATIC";
//         }
//         const price = web3.utils.fromWei(totalPriceWei.toString(), "ether");
//         totalPrice.innerText = `${price} ${priceType}`;
//         mintButton.disabled = false;
//         mintInput.disabled = false;
//       }

//       async function mint() {
//         const mintButton = document.getElementById("mintButton");
//         mintButton.disabled = true;
//         const spinner =
//           "<div class='dot-elastic'></div><span>Waiting for transaction...</span>";
//         mintButton.innerHTML = spinner;

//         const amount = parseInt(document.getElementById("mintInput").value);
//         const value = BigInt(info.deploymentConfig.mintPrice) * BigInt(amount);
//         const publicMintActive = await contract.methods.mintingActive().call();
//         const presaleMintActive = await contract.methods.presaleActive().call();

//         if (publicMintActive) {
//           // PUBLIC MINT
//           try {
//             const mintTransaction = await contract.methods
//               .mint(amount)
//               .send({ from: window.address, value: value.toString() });
//             if (mintTransaction) {
//               if (chain === "rinkeby") {
//                 const url = `https://rinkeby.etherscan.io/tx/${mintTransaction.transactionHash}`;
//                 const mintedContainer = document.querySelector(
//                   ".minted-container"
//                 );
//                 const countdownContainer = document.querySelector(".countdown");
//                 const mintedTxnBtn = document.getElementById("mintedTxnBtn");
//                 mintedTxnBtn.href = url;
//                 countdownContainer.classList.add("hidden");
//                 mintedContainer.classList.remove("hidden");
//               }
//               console.log(
//                 "Minted successfully!",
//                 `Transaction Hash: ${mintTransaction.transactionHash}`
//               );
//             } else {
//               const mainText = document.getElementById("mainText");
//               mainText.innerText = mint_failed;
//               mintButton.innerText = button_public_mint;
//               mintButton.disabled = false;

//               console.log("Failed to mint!");
//             }
//           } catch (e) {
//             const mainText = document.getElementById("mainText");
//             mainText.innerText = mint_failed;
//             mintButton.innerText = button_public_mint;
//             mintButton.disabled = false;

//             console.log(e);
//           }
//         } else if (presaleMintActive) {
//           // PRE-SALE MINTING
//           try {
//             const merkleData = await fetch(
//               `/.netlify/functions/merkleProof/?wallet=${window.address}&chain=${chain}&contract=${contractAddress}`
//             );
//             const merkleJson = await merkleData.json();
//             const presaleMintTransaction = await contract.methods
//               .presaleMint(amount, merkleJson)
//               .send({ from: window.address, value: value.toString() });
//             if (presaleMintTransaction) {
//               if (chain === "rinkeby") {
//                 const url = `https://rinkeby.etherscan.io/tx/${presaleMintTransaction.transactionHash}`;
//                 const mintedContainer = document.querySelector(
//                   ".minted-container"
//                 );
//                 const countdownContainer = document.querySelector(".countdown");
//                 const mintedTxnBtn = document.getElementById("mintedTxnBtn");
//                 mintedTxnBtn.href = url;
//                 countdownContainer.classList.add("hidden");
//                 mintedContainer.classList.remove("hidden");
//               }
//               console.log(
//                 "Minted successfully!",
//                 `Transaction Hash: ${presaleMintTransaction.transactionHash}`
//               );
//             } else {
//               const mainText = document.getElementById("mainText");
//               mainText.innerText = mint_failed;
//               mintButton.innerText = button_presale_mint_whitelisted;
//               mintButton.disabled = false;

//               console.log("Failed to mint!");
//             }
//           } catch (e) {
//             const mainText = document.getElementById("mainText");
//             mainText.innerText = mint_failed;
//             mintButton.innerText = button_presale_mint_whitelisted;
//             mintButton.disabled = false;

//             // console.log(e);
//           }
//         }
//       }
//     });
//   }, []);
//   return (
//     <div className={styles.mintContainer}>
//       <section className="container not-connected">
//         <div>
//           <h2 id="welcomeH2">Connect to MetaMask to Get Started</h2>
//           <h1 id="welcomeH1">Welcome to the CodeCats NFT Project!</h1>
//           <p id="welcomeP">
//             The CodeCats NFT Project is a decentralized, open-source project
//             that aims to demonstrate how to develope and launch your own NFT
//             Collection. Follow step by step on the{" "}
//             <a
//               href="https://youtube.com/codestackr"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               codeSTACKr
//             </a>{" "}
//             YouTube channel.
//           </p>
//         </div>
//       </section>

//       <section className="container">
//         <div className="countdown card">
//           <div id="countdown">
//             <ul className="count-down" data-date="">
//               <li className="clock-item">
//                 <span className="count-number days">20</span>
//                 <p className="count-text">Days</p>
//               </li>

//               <li className="clock-item">
//                 <span className="count-number hours">20</span>
//                 <p className="count-text">Hour</p>
//               </li>

//               <li className="clock-item">
//                 <span className="count-number minutes">20</span>
//                 <p className="count-text">Min</p>
//               </li>

//               <li className="clock-item">
//                 <span className="count-number seconds">20</span>
//                 <p className="count-text">Sec</p>
//               </li>
//             </ul>
//             <h2 id="subHeading">Pre-Sale Countdown</h2>
//           </div>
//           <h1 id="mainHeading">NFT Drop Coming Soon!!</h1>
//           <p id="mainText">
//             A new batch of cute cats will be available very soon!
//           </p>
//           <a
//             id="actionButton"
//             href="https://discord.gg/A9CnsVzzkZ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hero-btn btn"
//           >
//             <span>Join the Catmmunity</span>
//           </a>
//           <div id="mintContainer" className="mint-container hidden">
//             <div className="info-container">
//               <div>
//                 <h3>Supply</h3>
//                 <p id="totalSupply">100</p>
//               </div>
//               <div>
//                 <h3>Price Per Mint</h3>
//                 <p id="pricePerMint">1 ETH</p>
//               </div>
//               <div>
//                 <h3>Max</h3>
//                 <p id="maxPerMint">5 per wallet</p>
//               </div>
//             </div>
//             <div className="mint-qty">
//               <span>
//                 <button
//                   className="input-number-decrement btn"
//                   id="mintDecrement"
//                 >
//                   –
//                 </button>
//                 <input
//                   id="mintInput"
//                   className="input-number btn"
//                   type="number"
//                   //   value={1}
//                   defaultValue={1}
//                   min={1}
//                   max={5}
//                 />
//                 <button
//                   className="input-number-increment btn"
//                   id="mintIncrement"
//                 >
//                   +
//                 </button>
//               </span>
//               <button id="setQtyMax" className="btn">
//                 SET MAX
//               </button>
//             </div>
//             <div className="total-price-container">
//               <h3>Total</h3>
//               <p id="totalPrice">.001 ETH</p>
//             </div>
//             <button id="mintButton" className="hero-btn btn mint-btn">
//               Mint
//             </button>
//           </div>
//         </div>
//         <div className="minted-container card show-card hidden">
//           <h1>🎉</h1>
//           <h2>Minted!</h2>
//           <p>Here is your trasaction link:</p>
//           <a
//             id="mintedTxnBtn"
//             href=""
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="hero-btn btn">View Transaction</button>
//           </a>
//           <p>View it in the collection:</p>
//           <a
//             id="mintedLinkBtn"
//             href="https://testnets.opensea.io/collection/teststackr-collection"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="hero-btn btn">View Collection</button>
//           </a>
//         </div>
//       </section>

//       <div id="spinner" className="dot-spin"></div>
//     </div>
//   );
// };

// export default MintContainer;

//
//
//
//
//
//
//
//
//
//
//
//
//

import { useEffect, useState } from "react";
import { abi } from "./abi";
// import { merkleProof } from "./merkleProof";
import Timer from "./Timer";

const contractAddress = "0x22e7c4E56b410a6fC7707FDC7e4E4f982415841a";
const mint_public_start_date =
  new Date(process.env.NEXT_PUBLIC_MINT_START_DATE).getTime() / 1000;

function App(props) {
  const [currentAccount] = useState("");
  // const [timer, setTimer] = useState(false);

  // const checkWalletIsConnected = async () => {
  //   const { ethereum } = window;
  //   if (!ethereum) {
  //     return;
  //   }
  //   const accounts = await ethereum.request({ method: "eth_accounts" });

  //   if (accounts.length !== 0) {
  //     const account = accounts[0];
  //     setCurrentAccount(account);
  //   } else {
  //     console.log("No authorized account found");
  //   }
  // };

  // const connectWalletHandler = async () => {
  //   const { ethereum } = window;
  //   if (!ethereum) {
  //     window.open("https://metamask.io/");
  //   }

  //   try {
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts"
  //     });
  //     setCurrentAccount(accounts[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getRequiredData = async () => {
    // let whiteListed = null;
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.contract = new web3.eth.Contract(abi, contractAddress);
      // const info = await window.contract.methods.getInfo().call();
      // setTimer(Number(info.runtimeConfig.publicMintStart));
      // try {
      //   const merkleData = await merkleProof(
      //     currentAccount,
      //     "rinkeby",
      //     contractAddress
      //   );
      //   if (currentAccount && merkleData.body.length) {
      //     whiteListed = await contract.methods
      //       .isWhitelisted(currentAccount, JSON.parse(merkleData.body))
      //       .call();
      //   }
      // }
      // catch (err) {
      //   console.log(err);
      // }
    }
  };
  useEffect(() => {
    // checkWalletIsConnected();
    getRequiredData();
    // addWalletListener();
  }, [currentAccount]);

  // const mintNftHandler = async () => {
  //   let url = "";
  //   try {
  //     const amount = 4;
  //     const value = BigInt(info.deploymentConfig.mintPrice) * BigInt(amount);
  //     const publicMintActive = await window.contract.methods
  //       .mintingActive()
  //       .call();
  //     const presaleMintActive = await window.contract.methods
  //       .presaleActive()
  //       .call();
  //     // console.log("publ ", publicMintActive);
  //     if (publicMintActive) {
  //       // const mintTransaction = await window.contract.methods.mint(5).send({
  //       //   from: contractAddress.toLowerCase(),
  //       //   value: value.toString()
  //       // });
  //       // console.log("minttrans ", mintTransaction);
  //     } else if (presaleMintActive) {
  //       const merkleData = await merkleProof(
  //         currentAccount,
  //         "rinkeby",
  //         contractAddress
  //       );
  //       const presaleMintTransaction = await window.contract.methods
  //         .presaleMint(amount, JSON.parse(merkleData.body))
  //         .send({ from: currentAccount, value: value.toString() });
  //       console.log("presaleMintTransaction", presaleMintTransaction);
  //       if (presaleMintTransaction) {
  //         url = `https://rinkeby.etherscan.io/tx/${presaleMintTransaction.transactionHash}`;
  //         console.log("url", url);

  //         console.log(
  //           "Minted successfully!",
  //           `Transaction Hash: ${presaleMintTransaction.transactionHash}`
  //         );
  //       } else {
  //         console.log("min_failed");
  //       }
  //       console.log("presaleMintTransaction ", presaleMintTransaction);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const mintNftButton = () => {
  //   return (
  //     <button onClick={mintNftHandler} className="cta-button mint-nft-button">
  //       Mint NFT
  //     </button>
  //   );
  // };
  // const addWalletListener = () => {
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       if (accounts.length > 0) {
  //         setCurrentAccount(accounts[0]);
  //       } else {
  //         setCurrentAccount("");
  //       }
  //     });
  //   } else {
  //     setStatus(
  //       <p>
  //         {" "}
  //         🦊{" "}
  //         <a
  //           target="_blank"
  //           href={"https://metamask.io/download.html"}
  //           rel="noreferrer"
  //         >
  //           You must install Metamask, a virtual Ethereum wallet, in your
  //           browser.
  //         </a>
  //       </p>
  //     );
  //   }
  // };
  return <Timer time={mint_public_start_date} {...props}/>;
}

export default App;
