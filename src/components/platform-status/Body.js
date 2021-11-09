
const Body = () =>{
    return(
        <section id="sec_1"> 
        <div className="container">
          <div className="row">
            <div className="col-md-8 box_1">
              <img src="assets/images/Illustrations/3.png" alt="" />
              <a className="btn btn_sec_1">All Systems Operational</a>
            </div>
            <div className="col-md-8 box_2">
              <div className="row">
                <div className="col-12 box_2_child">
                  <h6>API</h6><a href="#">Operational </a>
                </div>
                {/* 1 */}
                <div className="col-12 box_2_child">
                  <h6>Alchemy Blockchain Node</h6><a href="#">Operational </a>
                </div>
                {/* 2 */}
                <div className="col-12 box_2_child">
                  <h6>Website</h6><a href="#">Operational </a>
                </div>
                {/* 3 */}
                <div className="col-12 box_2_child">
                  <h6>Mobile Application</h6><a href="#">Operational </a>
                </div>
                {/* 4 */}
                <div className="col-12 box_2_child">
                  <h6>Support Services</h6><a href="#">Operational </a>
                </div>
                {/* 5 */}
                <div className="col-12 box_2_child">
                  <h6>Emails</h6><a href="#">Operational </a>
                </div>
                {/* 6 */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Body;