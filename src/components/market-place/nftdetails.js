import React,{ useContext, useEffect,useState }  from 'react'
import classes from './style.module.css'
import { useParams } from "react-router-dom";
import { globalContext } from '../../context/GlobalState'
const Nftdetails = (props) => {
    const [{ web3, accounts, nftContract, nftList }] = useContext(globalContext)
    const [NFTITEM, setNFTITEM] = useState([])
    const { id } = useParams();
    console.log(id,'id')
    useEffect(() => {
      hitNftApiToken()
      setNFTITEM([])
    }, [web3, accounts, nftList])
    const hitNftApiToken = () => {
      nftList && nftList.forEach(NFTToken => {
        let id = NFTToken._tokenId
        fetch("/getSearchData", {
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
              res.itemId  = NFTToken.itemId
              setNFTITEM(pre => [...pre, res])
            }
          })
        console.log(NFTToken._tokenId, 'nftList')
      })
    }
  
    console.log(NFTITEM, 'deta')
    const filteritem = NFTITEM && NFTITEM.length > 0 && NFTITEM.find(item=>{
      console.log(typeof item.itemId, typeof parseInt(id))
        return item.itemId == parseInt(id)
        
    })
    const handleclick = (e) => {
      console.log(e,'ee');
    }
    console.log(filteritem,'filteritem');
    return (
        <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" style={{ boxShadow: "0px 0px 5px 2px #80808061" }}>
                    <img className="image-fluid w-100" src={filteritem ?  filteritem.imgUrl : '...'} alt="" />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: '105px' }}>
                <div className="ml-4">
                    <h3 className="mb-0 font-weight-bold">{filteritem ?  filteritem.name : '...'}</h3>
                    <p> <span className={classes.cprice}>Current price:</span> {filteritem ? filteritem.price : '...'}$</p>
                </div>
                <div className={`${classes.para} ml-4`} >
                    <p className="text-justify">
                        {filteritem ? filteritem.description : '...'}
                    </p>
                </div>
                {/* <button>add to cart</button> */}

                <div className={`${classes.cardsEndDiv} ml-4`}>
                    {/* <p>{filterProducts.price}/Rs</p> */}
                    <button
                    onClick={()=>handleclick(filteritem ? filteritem.itemId : '...')}
                    >
                        {" "}
                        {/* <Cart /> */}
                        <span>Buy</span>{" "}
                    </button>

                 
                </div>
            </div>
        </div>
    )
}
export default Nftdetails