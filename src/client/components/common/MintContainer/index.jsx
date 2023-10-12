import { useEffect, useState } from "react";
import { abi } from "./abi";
import Timer from "./Timer";

const contractAddress = "0x22e7c4E56b410a6fC7707FDC7e4E4f982415841a";
const mint_public_start_date =
  new Date(process.env.NEXT_PUBLIC_MINT_START_DATE).getTime() / 1000;

function App(props) {
  const [currentAccount] = useState("");
 

  const getRequiredData = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.contract = new web3.eth.Contract(abi, contractAddress);
    }
  };
  useEffect(() => {
    getRequiredData();
  }, [currentAccount]);

  return <Timer time={mint_public_start_date} {...props}/>;
}

export default App;
