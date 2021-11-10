 import { setupWeb3,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";
// import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contract/ABI';
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { MARKETPLACE_ABI, MARKETPLACE_ADDRESS } from '../contract/marketplace';
// import {  RUBY_STAKING_ABI,RUBY_STAKING_ADDRESS } from '../contract/rubyStakingABI';
// import {  RUBY_TOKEN_ABI,RUBY_TOKEN_ADDRESS } from '../contract/rubyTokenABI';
// import {getPoolbyId,getUserData,getBalance, refresh } from "./callHelpers";
//import { ethers } from 'ethers';

export const loadBlockchain = async (dispatch) => {
    console.log("in Load Blockchain",dispatch);
    try {
        console.log("Web3 = ", Web3);
        console.log("Web3.givenProvider = ", Web3.givenProvider);
   //     dispatch(setNetwork(Web3.givenProvider.chainId));
        // if (Web3.givenProvider) {

            if (Web3.givenProvider 	) {//&& Web3.givenProvider.chainId == 0x38
            window.ethereum.on('accountsChanged', function (accounts) {
                dispatch(addEthereumAccounts(accounts));
            });

            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            // const stakingcontract = new web3.eth.Contract(RUBY_STAKING_ABI, RUBY_STAKING_ADDRESS);
            // const token = new web3.eth.Contract(RUBY_TOKEN_ABI, RUBY_TOKEN_ADDRESS);
            // dispatch(setupStakingContract(stakingcontract));
           // dispatch(setuptoken(token));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
        //     console.log("stakingcontract", stakingcontract);
        //     console.log("staking methods", stakingcontract.methods);
        //    const currentPool = await getPoolbyId(web3,stakingcontract,0);//getUserData
           
         

        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

           // dispatch(web3LoadingError(error.message));
        }
    }
}