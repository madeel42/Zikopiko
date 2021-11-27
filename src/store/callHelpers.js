 import { setupWeb3,setNFTList,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";







export const getnFt = async (web3, mktContract,dispatch) => {
 const nftCount=2; //await nftContract.methods.nftCounter().call();
 var nftList=[];
    console.log("nft count", nftCount); 

    for (var i=0; i<nftCount;i++){
        let nft = await mktContract.methods.viewNFT(i).call();
        console.log("URI",nft)
        nftList.push(nft);

    }
    console.log("NFT URIs",nftList);
    dispatch(setNFTList(nftList));
    
  //  const events= await nftContract.getPastEvents('Transfer');
   // console.log("Events",events);

return nftList;
    
}