import { Link } from 'react-router-dom';

const Header3 = () => {

    return(
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mr-auto">
                    <Link className="navbar-brand" to="/"><img src="assets/images/Logo/Screenshot_45-removebg-preview.png" alt="" /> </Link>
                    <div className="page-name-wrap">
                    <h1>
                        Help Center
                    </h1>
                    </div>
                    <div className="creat-connect-btn-wrap ml-auto">
                    <button className="creat-submit-btn">
                        Submit a request
                    </button>
                    <button className="creat-sign-in-btn">
                        Sign In
                    </button>
                    </div>
                </nav>
            </div>
      </header>
    )
}

export default Header3;