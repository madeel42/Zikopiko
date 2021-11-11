 import { setupWeb3,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";





export const getnFtList = async (web3, nftContract,dispatch) => {
    const nftevents=  await nftContract.getPastEvents('createNFT',{fromBlock:0,toBlock:'latest'});
    console.log("get All NFTs", nftevents); 
    return nftevents;
    
}