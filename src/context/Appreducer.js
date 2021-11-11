import * as AllTypes from './Types'
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SETUP_WEB3':
            return {
              ...state,
              web3: action.payload,
              web3LoadingErrorMessage: "",
              web3Loadded: true
            }
            case 'SETUP_PROVIDER':
                return {
                  ...state,
                  network: action.payload
                }
              case 'WEB3_LOADING_ERROR':
                return {
                  ...state,
                  web3LoadingErrorMessage: action.errorMessage,
                  web3Loadded: false
                }
                case 'ADD_ETHEREUM_ACCOUNTS':
                return {
                  ...state,
                  accounts: action.payload
                }

            case 'SETUP_NFT_CONTRACT':
                return {
                  ...state,
                  nftContract: action.payload
                }
                case 'SETUP_MARKET_CONTRACT':
                    return {
                      ...state,
                      marketContract: action.payload
                    }
                    case 'SETUP_NFT_LIST':
                    return {
                      ...state,
                      nftList: action.payload
                    }
        default:

            return state
    }
}