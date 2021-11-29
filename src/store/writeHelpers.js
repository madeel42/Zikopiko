import { setupWeb3,setNFTList,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
import Web3 from "web3";

import {  NFT_CONTRACT_ABI,NFT_CONTRACT_ADDRESS } from '../contract/NFT_ABI';

 import { getnFt } from './callHelpers';

/* function to mint NFT*/
export const mintNFT = async (web3, contract,accounts,dispatch) => {
   console.log("in before NFT buy", contract);
   try{

      const result=await contract.methods.createNFT(accounts[0]).send({from:accounts[0]})
      
      console.log("result after minting",result);
      return result;
   }catch(error){
      console.log("Error in Minting",error);
      return false;
   }
   
}

/* function to buy NFT*/
export const buytNFT = async (web3, contract,item,price,accounts,dispatch) => {
   console.log("in before NFT buy", contract);
   try{

      const result=await contract.methods.buyNFT(item,accounts[0]).send({from:accounts[0],value:price});
      
      console.log("result after buying",result);
      return result;
   }catch(error){
      console.log("Error in buying",error);
      return false;
   }
   
}