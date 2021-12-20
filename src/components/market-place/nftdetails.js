import React, { useContext, useEffect, useState } from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { globalContext } from '../../context/GlobalState'
import { buytNFT } from '../../store/writeHelpers';
const Nftdetails = (props) => {
  const [{ web3, accounts,marketContract, nftContract, nftList },dispatch] = useContext(globalContext)
  const [NFTITEM, setNFTITEM] = useState([])
  const { id } = useParams();
  console.log(id, 'id')
  useEffect(() => {
    hitNftApiToken()
    setNFTITEM([])
  }, [web3, accounts, nftList])
  const hitNftApiToken = () => {
    nftList && nftList.forEach(NFTToken => {
      
      let id = NFTToken._tokenId
      fetch("https://zikopika.herokuapp.com/getSearchData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ id }),
      })
        .then((res) => {
          return res.json();
        }).then(res => {
          console.log(res.status, 'res')
          if (!res.status) {
            res.itemId = NFTToken.itemId
            setNFTITEM(pre => [...pre, res])
          }
        })
      console.log(NFTToken._tokenId, 'nftList')
    })
  }

  console.log(NFTITEM, 'deta')
  const filteritem = NFTITEM && NFTITEM.length > 0 && NFTITEM.find(item => {
    console.log(typeof item.itemId, typeof parseInt(id))
    return item.itemId == parseInt(id)

  })
  const handleclick = async(e) => {
    console.log("in buytNFT",e);
  try{
  const etherprice=e.price.toString();
  const weiPrice= web3.utils.toWei(etherprice,'ether');
    let response= await buytNFT(web3,marketContract,e.itemId,weiPrice,accounts,dispatch);
  }catch(error){
    console.log("zerror in Buy",error);
  }
  }
  console.log(filteritem, 'filteritem');
  return (
    <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4" style={{ boxShadow: "0px 0px 5px 2px #80808061" }}>
        <img className="image-fluid w-100" src={filteritem ? filteritem.imgUrl : '...'} alt="" />

      </div>
      <div className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '105px' }}>
        <div className="ml-4">
        <span className={classes.cprice}>Name:</span>
          <h3 className="mb-0 font-weight-bold">{filteritem ? filteritem.name : '...'}</h3>
          <span className={classes.cprice}>Current price:</span>
          <p>  {filteritem ? filteritem.price : '...'}$</p>
        </div>
        <div className={`${classes.para} ml-4`} >
        <span className={classes.cprice}>Description:</span>
          <p className="text-justify">
            {filteritem ? filteritem.description : '...'}
          </p>
        </div>
        {/* <button>add to cart</button> */}

        <div className={`${classes.cardsEndDiv} ml-4`}>
          {/* <p>{filterProducts.price}/Rs</p> */}
          <button
            onClick={() => handleclick(filteritem ? filteritem : '...')}
          >
            {" "}
            {/* <Cart /> */}
            <span>Buy</span>{" "}
          </button>
          <Link style={{ textDecoration: 'none' }} to='/market-place'>  <button className={'ml-2'}>Back</button></Link>

        </div>
      </div>
    </div>
  )
}
export default Nftdetails