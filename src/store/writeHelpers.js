import { setupWeb3,setNFTList,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
import Web3 from "web3";

import {  NFT_CONTRACT_ABI,NFT_CONTRACT_ADDRESS } from '../contract/NFT_ABI';

 import { getnFt } from './callHelpers';


export const buyNFT = async (web3, contract,accounts,dispatch) => {
   console.log("in before NFT buy", contract);
   
}