import React from "react";
import Slick from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


const Slider = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: '<button classNane="slide-arrow prev-arrow"></button>',
        // nextArrow: '<button classNane="slide-arrow next-arrow"></button>'
   
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };  
    return(
        <div className="home-page-slider">
        <div className="flash-slider-first-slider-wrap">
          <div className="responsive">

            <Slick {...settings}>
                <div className="">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/6.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>
                <div className="slick-slide">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/7.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>
                <div className="slick-slide">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/8.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>
                <div className="slick-slide">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/6.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>
                <div className="slick-slide">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/7.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>
                <div className="slick-slide">
                <div className="cratboxwrap">
                    <img src="assets/images/Anim Icons/8.png" alt="" />
                    <p>Learn more about the different 
                    blockchains</p>
                </div>
                </div>      
            </Slick>



            







          </div>
        </div>
      </div>
    )
}
export default Slider;