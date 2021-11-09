import React from "react";
import Header from '../components/common/Header';
import Banner from "../components/home/Banner";
import Testimonial from "../components/home/Testimonial";
import Counter from "../components/home/Counter";
import Products from "../components/home/Products";
import Pdf from "../components/home/Pdf";
const Home = () => {
    return(
    <>
       <Header /> 
       <Banner /> 
       <Counter /> 
       <Testimonial /> 
       <Products /> 
       <Pdf /> 
    </>
    )
}

export default Home;