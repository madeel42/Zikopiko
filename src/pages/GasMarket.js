import React from "react";
import Header2 from '../components/common/Header2';
import Banner from "../components/gas-market/Banner";
import GasFree from "../components/gas-market/GasFree";
import CrossBlockChain from "../components/gas-market/CrossBlockChain";
import HelpCenter from "../components/gas-market/HelpCenter";
import Footer from "../components/common/Footer";

const GasMarket = () => {
    return(
    <>
       <Header2 /> 
       <Banner /> 
       <GasFree /> 
       <CrossBlockChain /> 
       <HelpCenter /> 
       <Footer /> 
    </>
    )
}

export default GasMarket;