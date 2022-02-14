 import { setupWeb3,setNFTList,setNetwork,setUpMarketplace, setupNFTContract, addEthereumAccounts, web3LoadingError } from "./actions";
 import Web3 from "web3";







export const getnFt = async (web3, mktContract,dispatch) => {
    const nftCount=(await mktContract.getPastEvents('NFT_Listed',{ fromBlock: 0,toBlock: 'latest'})).length;
//  const nftCount=await mktContract.methods.itemCounter().call();
 var nftList=[];
    console.log("nft count", nftCount); 

    for (var i=0; i<nftCount;i++){
        try{
        let nft = await mktContract.methods.viewNFT(i).call();
        console.log("URI",nft)
        nft.itemId=i;
        nftList.push(nft);
    }catch(error){
        console.log("error in nft call",error);}

    }

       
    console.log("NFT URIs",nftList);
    dispatch(setNFTList(nftList));
    

return nftList;
    
}