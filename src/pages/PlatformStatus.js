import React from "react";
import Header from '../components/common/Header2';
import Body from '../components/platform-status/Body';
import Metrics from '../components/platform-status/Metrics';
import Incidents from '../components/platform-status/Incidents';
import Footer from "../components/common/Footer";


const PlatformStatus = () => {

    return(
    <>
       <Header /> 
       <div className="bg_1">
        <Body /> 
        <Metrics /> 
        <Incidents /> 
       </div>
       <Footer/>
    </>
    )
}

export default PlatformStatus;