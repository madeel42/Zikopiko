 import { setupWeb3,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";

 import {  NFT_CONTRACT_ABI,NFT_CONTRACT_ADDRESS } from '../contract/NFT_ABI';
 
  import { getnFt } from './callHelpers';


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
            const nftContract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);
          
            dispatch(setupNFTContract(nftContract));
         
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
             console.log("nft contract", nftContract);
             console.log("nftcontract methods", nftContract.methods);
        
           let resp= await getnFt(web3, nftContract,dispatch); 
         

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