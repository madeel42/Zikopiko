import { NavLink, Link } from 'react-router-dom';

const Header2 = () =>{
    return(
        <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light mr-auto">

            <Link className="navbar-brand" to="/"><img src="assets/images/Logo/Screenshot_45-removebg-preview.png" alt="" /> </Link>
            <div className="page-name-wrap">
              <h1>
                Gas Marketplace
              </h1>
            </div>
            <form className="search-container">
              <span><i className="fas fa-search" /></span>
              <input type="search" placeholder="Search" aria-label="Search" />
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/market-place">Marketplace</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Stats
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/status-ranking">Ranking</NavLink>
                    <NavLink className="dropdown-item" to="/status-activities">Activity</NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/help-center">Help center</NavLink>
                    <NavLink className="dropdown-item" to="/platform-status">Platform Status</NavLink>
                    <NavLink className="dropdown-item" to="/partners">Partners</NavLink>
                    <NavLink className="dropdown-item" to="/gas-market">Gas-Marketplace</NavLink>
                    <NavLink className="dropdown-item" to="/suggetions">Suggestions</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Create</a>
                </li>
              </ul>
              <div className="creat-connect-btn-wrap ml-auto">
                <div className="btn-primary-creat">
                  <a href="creatitems.html"><img src="assets/images/SVG Icons/person_black_24dp (1).svg" alt="" /></a>
                </div>
                <div className="btn-Connet">
                  <a href="creatitems.html"><img src="assets/images/SVG Icons/account_balance_wallet_black_24dp.svg" alt="" /></a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}
export default Header2;