const Body = () => {
    
    return(
        <div className="product-show-and-filter-sec-wrap pt-16">
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
                            <ul id="hisLinks" style={{display: 'block'}}>
                                <div className="second-social">
                                <form className="search-container-sec">
                                    <span><i className="fas fa-search" /></span>
                                    <input type="search" placeholder="Search" aria-label="Search" />
                                </form>
                                <div className="crypto-list-wrapper">
                                    <ul>
                                    <li>
                                        <div className="crypto-list-left-img">
                                        <img src="assets/images/clipart2572603 (1).png" alt="" />
                                        </div>
                                        <div className="crypto-list-middle-text">
                                        <p>CryptoPunks</p>
                                        </div>
                                        <div className="crypto-list-right-img">
                                        <img src="assets/images/verified_black_24dp.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="crypto-list-left-img">
                                        <img src="assets/images/clipart2572603 (1).png" alt="" />
                                        </div>
                                        <div className="crypto-list-middle-text">
                                        <p>CryptoPunks</p>
                                        </div>
                                        <div className="crypto-list-right-img">
                                        <img src="assets/images/verified_black_24dp.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="crypto-list-left-img">
                                        <img src="assets/images/clipart2572603 (1).png" alt="" />
                                        </div>
                                        <div className="crypto-list-middle-text">
                                        <p>CryptoPunks</p>
                                        </div>
                                        <div className="crypto-list-right-img">
                                        <img src="assets/images/verified_black_24dp.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="crypto-list-left-img">
                                        <img src="assets/images/clipart2572603 (1).png" alt="" />
                                        </div>
                                        <div className="crypto-list-middle-text">
                                        <p>CryptoPunks</p>
                                        </div>
                                        <div className="crypto-list-right-img">
                                        <img src="assets/images/verified_black_24dp.png" alt="" />
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </ul>
                            </li>
                        </ul>
                        <ul className="price-tag-html-input-wrap">
                            <li id="dash_sp_btwn">
                            <a onclick="mygoodFunction()">
                                <div className="row">
                                <div className="col-9">
                                    <p>Chains</p>
                                </div>
                                <div className="col-3">
                                    <div id="testsecmil" className="offsechigh">
                                    </div>
                                </div>
                                </div>
                            </a>
                            <ul id="hissecLinks" style={{display: 'none'}}>
                                <div className="second-social">
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
                        </nav>
                    </div>
                    </div>
                    <div className="pro-show-right-side-bar">
                    {/* <div class="pro-show-right-tab-title-wrapper">
                            <div class="row search-drop-list-wrap">
                                <div class="col-5 ">
                                <form class="search-container-sec">
                                    <span><i class="fas fa-search"></i></span>
                                    <input type="search" placeholder="Search" aria-label="Search">
                                </form>
                                </div>
                                <div class="col-7">
                                <div class="row">
                                    <div class="col-5">
                                    <div class="short_pricing_dropdown">
                                        <div class="dropdown">
                                            <a class="btn btn-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                                <p> Single Items <span><i class="fas fa-chevron-down"></i></span></p>
                                                
                                            </a>
                                        
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-5">
                                    <div class="short_pricing_dropdown">
                                        <div class="dropdown">
                                            <a class="btn btn-transparent" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                                <p> Price: Low to High <span><i class="fas fa-chevron-down"></i></span></p>
                                                
                                            </a>
                                        
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-2 px-0">
                                    <div class="list-gird-tab-button-wrap">
                                        <button class="tablink active" onclick="openPage('News', this, '')"   id="defaultOpen" >
                                            <img src="assets/images/SVG Icons/menu (1).svg" alt="">
                                        </button>
                                        <button class="tablink inactive" onclick="openPage('Contact', this, '')"  >
                                            <img src="assets/images/SVG Icons/menu.svg" alt="">
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div> */}
                    <div className="tabcontent pro-show-right-product-card-wrap">
                        <div className="pro-show-right-product-card-wrap-main-title">
                        <div className="pro-shoe-button-all-wraper">
                            <a href className="pro-close-all-button">
                            Sales <span><i className="fas fa-times" /></span>
                            </a>
                            <a href className="pro-clear-all-button">
                            Close ALL
                            </a>
                        </div>
                        <button onclick="myFunction()" className="mobile-nav-toggle d-xl-none "><i className="fas fa-bars" /></button>
                        </div>
                        <div className="trading-history-line-wrap">
                        <img src="assets/images/sync_alt_black_24dp.png" alt="" /> <p>Trading History</p>
                        </div>
                        <div className="activity-table-list-wrapper">
                        <div className="container table-responsive py-5"> 
                            <table className="table table-borderless table-hover">
                            <thead className="table-ranking-heading">
                                <tr className="tb-bottom">
                                <th scope="col">Event</th>
                                <th scope="col">Item</th>
                                <th scope="col">Unit prize</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="shoping-cart-title-wrap">
                                    <span><img src="assets/images/shopping_cart_black_24dp.png" alt="" /></span>
                                    <p>sale</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="item-image-title-wrap">
                                    <span><img src="assets/images/Images/1.jpg" alt="" /></span>
                                    <p>Vice Squad</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="unit-prize-image-title-wrap">
                                    <span><img src="assets/images/SVG Icons/6f8e2979d428180222796ff4a33ab929.svg" alt="" /></span>
                                    <p>0.003</p>
                                    </div>
                                </td>
                                <td className="quantity-number">
                                    <p>1</p>
                                </td>
                                <td className="form-number">
                                    <p>Crptopunks</p>
                                </td>
                                <td className="form-number">
                                    <p>EAB793</p>
                                </td>
                                <td className="form-number">
                                    <p>4 Minute ago</p>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Body; 