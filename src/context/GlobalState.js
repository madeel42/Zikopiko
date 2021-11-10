import { createContext, useReducer,useEffect } from 'react'
import { AppReducer } from './Appreducer'
import *  as AllTypes from './Types';
import {loadBlockchain} from '../store/asyncActions'
///Create initial State

const initialState = {
    Nftitem:'8',
    web3:'7',
    web3LoadingErrorMessage: "",
    web3Loadded: false,
    accounts: [],
    nftContract:null,
    marketContract:null
}

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        loadBlockchain(dispatch);
    }, [])

    return (<globalContext.Provider value={[state, dispatch]}>
        {children}
    </globalContext.Provider>);

    // return <globalContext.Provider
    //     value={{
    //         Nftitem: state.Nftitem,
    //     }}
    // >
    //     {children}
    // </globalContext.Provider>
}