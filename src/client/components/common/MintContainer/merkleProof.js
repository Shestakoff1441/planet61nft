const fetch = require("node-fetch");

const AUTH = process.env.NEXT_PUBLIC_NFTPORT_API_KEY;
const include = "merkle_proofs";

export const merkleProof = async (wallet, chain, contract_address) => {
  const url = "https://api.nftport.xyz/v0/me/contracts/collections?";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH
    }
  };
  const query = new URLSearchParams({
    chain: chain,
    include
  });

  const data = await fetch(url + query, options);
  const json = await data.json();
  const contractInfo = json.contracts.filter(
    (contract) =>
      contract.address.toLowerCase() === contract_address.toLowerCase()
  );
  const merkleProofs = contractInfo[0].merkle_proofs || {};
  const merkleProof = merkleProofs[wallet.toLowerCase()] || [];
  return {
    statusCode: 200,
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(merkleProof)
  };
};
