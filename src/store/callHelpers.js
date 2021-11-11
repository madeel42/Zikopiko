 import { setupWeb3,setNFTList,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";







export const getnFt = async (web3, nftContract,dispatch) => {
 const nftCount= await nftContract.methods.nftCounter().call();
 var nftList=[];
    console.log("nft count", nftCount); 

    for (var i=0; i<nftCount;i++){
        let Uri = await nftContract.methods.tokenURI(i).call();
        nftList.push(Uri);

    }
    console.log("NFT URIs",nftList);
    dispatch(setNFTList(nftList));
    
    const events= await nftContract.getPastEvents('Transfer');
    console.log("Events",events);

return nftList;
    
}