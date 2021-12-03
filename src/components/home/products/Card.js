import React, {useContext, useState } from "react";
import { Link } from "react-router-dom";
import { globalContext } from '../../../context/GlobalState'

const Card = ({title, subtitle, image,price,itemId}) =>{
  const [{ web3, accounts, nftContract, nftList }, dispatch] = useContext(globalContext)
const handleBuy = (e) =>{
  console.log('buy --->', e);
  console.log("Item to buy",itemId,price);
}
console.log(itemId,'itemId')
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 py-4">
       <Link style={{textDecoration:'none'}} to={`nftdetails/${itemId}`}> <div className="pro-show-right-product-card">
          <a href="#">
            <div className="pro-show-right-product-card-image">
              <img src={image} alt={title} />
            </div>
            <div className="pro-show-right-product-card-title-wrap">
              <div className="pro-show-right-product-card-first-title">
                <p>{subtitle}</p>
                <p>Price</p>
              </div>
              <div className="pro-show-right-product-card-sec-title">
                <p>{title}</p>
                <p><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /> <span>{price}</span></p>
              </div>
              <div className="pro-show-right-product-card-third-title">
                <p><span><i className="far fa-heart" /></span> 3</p>
                <p>last <img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /> <span>{price}</span></p> 
              </div>
            </div>
          </a>
        </div></Link>
      </div>
    )
}

export default Card;