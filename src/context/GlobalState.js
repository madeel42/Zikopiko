import { createContext, useReducer } from 'react'
import { AppReducer } from './Appreducer'
import *  as AllTypes from './Types'
///Create initial State

const initialState = {
    Nftitem:'1'
}

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return <globalContext.Provider
        value={{
            Nftitem: state.Nftitem,
        }}
    >
        {children}
    </globalContext.Provider>
}