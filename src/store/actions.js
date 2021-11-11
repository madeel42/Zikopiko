export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}




export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}
export const setupNFTContract = (nftXontract) => {
    return {
        type: 'SETUP_NFT_CONTRACT',
        payload: nftXontract
    };
}
export const setUpMarketplace = (mktContract) => {
    return {
        type: 'SETUP_MARKET_CONTRACT',
        payload: mktContract
    };
}
export const setNFTlist = (nftlist) => {
    return {
        type: 'SET_NFT_LISTS',
        payload: nftlist

    };
}


export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}
export const setNetwork = (provider) => {
    return {
        type: 'SETUP_PROVIDER',
        payload: provider
    };
}
export const setNFTList = (nftList) => {
    return {
        type: 'SETUP_NFT_LIST',
        payload: nftList
    };
}