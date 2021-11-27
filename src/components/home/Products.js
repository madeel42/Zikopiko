import Card from './products/Card';
import Filter from './products/Filter';
import React, { useContext, useEffect } from "react";
import { globalContext } from './../../context/GlobalState'
import { useState } from 'react';
const Products = () => {
  const [{ web3, accounts, nftContract, nftList }] = useContext(globalContext)
  const [NFTITEM, setNFTITEM] = useState([])
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
            setNFTITEM(pre => [...pre, res])
          }
        })
      console.log(NFTToken._tokenId, 'nftList')
    })
  }

  console.log(NFTITEM, 'nftitem')
  return (
    <div className="product-show-and-filter-sec-wrap">
      <div className="container">
        <div className="row">
          <div className="pro-show-left-side-bar" id="myaccount_dash_content_left">
            <div className="pro-show-left-title">
              <h2> <img src="assets/images/SVG Icons/filter_list_black_24dp.svg" alt="" /> Filter</h2>
              <span><i className="fas fa-chevron-left" /></span>
            </div>
            <div className="pro-show-left-content-wrap">
              <nav>
                <ul id="menu">
                  <li>
                    <label htmlFor="btn" className="first"> Supplier
                      <span className="fas fa-chevron-right" />
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul id="social" className="social-exchage">
                      <div className="row">
                        <div className="col-6 my-2">
                          <a href="#">Buy Now</a>
                        </div>
                        <div className="col-6 my-2">
                          <a href="#">Buy Now</a>
                        </div>
                        <div className="col-6 my-2">
                          <a href="#">Buy Now</a>
                        </div>
                        <div className="col-6 my-2">
                          <a href="#">Buy Now</a>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>





                <ul className="price-tag-html-input-wrap">
                  <li id="dash_sp_btwn">
                    <a onclick="mybestFunction()">
                      <div className="row">
                        <div className="col-9">
                          <p>Price</p>
                        </div>
                        <div className="col-3">
                          <div id="testmil" className="offhigh">
                          </div>
                        </div>
                      </div>
                    </a>
                    <ul id="hisLinks" style={{ display: 'block' }}>
                      <div className="second-social">
                        <div className="dropdown">
                          <div className="caption"> <img src="assets/images/$.png" alt="" /> United States Dollar (USD)</div>
                          <div className="list">
                            <div className="item">Option 1</div>
                            <div className="item">Option 2</div>
                            <div className="item">Option 3</div>
                            <div className="item">Option 4</div>
                            <div className="item">Option 5</div>
                          </div>
                          <span><i className="fas fa-chevron-down" /></span>
                        </div>
                        <div className="min-to-max-wrap">
                          <input type="text" placeholder="Min" />
                          <p>to</p>
                          <input type="text" placeholder="Max" />
                        </div>
                        <div className="price-apply-filter-button">
                          <button>
                            Apply
                          </button>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>

                <Filter
                  title="Chains"
                  icon=""
                />
                <Filter
                  title="On Sale In"
                  icon=""
                />
                <Filter
                  title="Accessories"
                  icon="assets/images/SVG Icons/list.svg"
                />
                <Filter
                  title="Background"
                  icon="assets/images/SVG Icons/list.svg"
                />
                <Filter
                  title="Body Color"
                  icon="assets/images/SVG Icons/list.svg"
                />
                <Filter
                  title="Eyes"
                  icon="assets/images/SVG Icons/list.svg"
                />
              </nav>
            </div>
          </div>
          <div className="pro-show-right-side-bar">
            <div className="pro-show-right-tab-title-wrapper">
              <div className="row search-drop-list-wrap">
                <div className="col-5 ">
                  <form className="search-container-sec">
                    <span><i className="fas fa-search" /></span>
                    <input type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
                <div className="col-7">
                  <div className="row">
                    <div className="col-5">
                      <div className="short_pricing_dropdown">
                        <div className="dropdown">
                          <a className="btn btn-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <p> Single Items <span><i className="fas fa-chevron-down" /></span></p>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{}}>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="short_pricing_dropdown">
                        <div className="dropdown">
                          <a className="btn btn-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <p> Price: Low to High <span><i className="fas fa-chevron-down" /></span></p>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{}}>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 px-0">
                      <div className="list-gird-tab-button-wrap">
                        <button className="tablink active" onclick="openPage('News', this, '')" id="defaultOpen">
                          <img src="assets/images/SVG Icons/menu (1).svg" alt="" />
                        </button>
                        <button className="tablink inactive" onclick="openPage('Contact', this, '')">
                          <img src="assets/images/SVG Icons/menu.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="News" className="tabcontent pro-show-right-product-card-wrap">
              <div className="pro-show-right-product-card-wrap-main-title">
                <h1>{NFTITEM && NFTITEM.length} Results</h1>
                <button onclick="myFunction()" className="mobile-nav-toggle d-xl-none "><i className="fas fa-bars" /></button>
              </div>
              <div className="row">
                {NFTITEM && NFTITEM.map((nftitm, i) => {
                  return <Card
                    title={nftitm.name}
                    subtitle={nftitm.description}
                    image={nftitm.imgUrl}
                    price={nftitm.price}
                  />
                  
                })}

                {/* <Card
                    title="I miss your body"
                    subtitle="Lorem Ipsum"
                    image="assets/images/Images/5.jpg"
                />
                <Card
                    title="I miss your body"
                    subtitle="Lorem Ipsum"
                    image="assets/images/Images/4.jpg"
                /> */}
                {/* <Card
                    title="I miss your body"
                    subtitle="Lorem Ipsum"
                    image="assets/images/Images/3.jpg"
                />
                <Card
                    title="I miss your body"
                    subtitle="Lorem Ipsum"
                    image="assets/images/Images/2.jpg"
                />
                <Card
                    title="I miss your body"
                    subtitle="Lorem Ipsum"
                    image="assets/images/Images/1.jpg"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;