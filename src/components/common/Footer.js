
const Footer = () =>{
    return(
      <footer className="footer-section">
      <div className="container">
        <div className="row footer-section-wraper">
          <div className="col-lg-3">
            <div className="footer-logo-title">
              <a href="#"><img src="assets/images/Logo/Screenshot_45-removebg-preview.png" alt="" /></a>
              <h1>Native Mythical
                Arts</h1>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-main-title">
              <h2>Lorem Ipsum</h2>
              <ul>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-main-title">
              <h2>Lorem Ipsum</h2>
              <ul>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-sub-wrap">
              <h1>Stay in the loop</h1>
              <p>Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an 
                unknown printer took a 
              </p>
              <div className="footer-input-container-submit">
                <div className="footer-input-cintainer">
                  <input type="email" placeholder="Your Email Adresss" />
                </div>
                <div className="footer-inut-submit">
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <h1>Join the community</h1>
        <ul>
          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fab fa-instagram" /></a></li>
          <li><a href="#"><i className="fab fa-twitter" /></a></li>
          <li><a href="#"><i className="fab fa-youtube-square" /></a></li>
        </ul>
      </div>
    </footer>
    )
}
export default Footer;