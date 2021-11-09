import React from "react";
import Header from '../components/common/Header2';
import WelCome from "../components/partners/WelCome";
import WhyPartner from "../components/partners/WhyPartner";
import WhoPartner from "../components/partners/WhoPartner";
import Faqs from "../components/partners/Faqs";
import Interested from "../components/partners/Interested";
import Testimonial from "../components/partners/Testimonial";
import Footer from "../components/common/Footer";

const Partners = () => {

    return(
    <>
       <Header /> 
       <div className="bg_1">
            <WelCome /> 
            <WhyPartner /> 
            <WhoPartner /> 
            <Faqs /> 
            <Interested /> 
            <Testimonial /> 
            <Footer />
       </div>
    </>
    )
}

export default Partners;