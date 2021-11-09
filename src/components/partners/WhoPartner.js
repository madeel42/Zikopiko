import Card from './partners/Card';

const WhoPartner = () =>{
    return(
        <section id="sec_2">
        <h2>Who has partnered with us</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content<br />
          of a page when looking at its layout. The point of using Lorem </p>
        <div className="wrap_grid_2">
          <Card 
            image="assets/images/Images/1.jpg"
            avatar="assets/images/avatar_1.svg"
            title="888 by Lorem Ipsum"
            body="It is a long established fact that a reader will be dist 
            by the readable content of a page when looking at 
            its layout. The point of using Lorem"
          />
          <div className="grid_2">
            <div className="img_2_top">
              <img src="assets/images/Images/2.jpg" alt="" />
              <div className="avatar">
                <img src="assets/images/avatar_2.svg" alt="" />
              </div>
            </div>
            <div className="grid_2_footer">
              <h5>888 by Lorem Ipsum</h5>
              <p>It is a long established fact that a reader will be dist 
                by the readable content of a page when looking at 
                its layout. The point of using Lorem </p>
            </div>
          </div>
          {/* 3 */}
          <div className="grid_2">
            <div className="img_2_top">
              <img src="assets/images/Images/3.jpg" alt="" />
              <div className="avatar">
                <img src="assets/images/avatar_3.svg" alt="" />
              </div>
            </div>
            <div className="grid_2_footer">
              <h5>888 by Lorem Ipsum</h5>
              <p>It is a long established fact that a reader will be dist 
                by the readable content of a page when looking at 
                its layout. The point of using Lorem </p>
            </div>
          </div>
          {/* 4 */}
          <div className="grid_2">
            <div className="img_2_top">
              <img src="assets/images/Images/4.jpg" alt="" />
              <div className="avatar">
                <img src="assets/images/avatar_4.svg" alt="" />
              </div>
            </div>
            <div className="grid_2_footer">
              <h5>888 by Lorem Ipsum</h5>
              <p>It is a long established fact that a reader will be dist 
                by the readable content of a page when looking at 
                its layout. The point of using Lorem </p>
            </div>
          </div>
          {/* 5 */}
          <div className="grid_2">
            <div className="img_2_top">
              <img src="assets/images/Images/5.jpg" alt="" />
              <div className="avatar">
                <img src="assets/images/avatar_1.svg" alt="" />
              </div>
            </div>
            <div className="grid_2_footer">
              <h5>888 by Lorem Ipsum</h5>
              <p>It is a long established fact that a reader will be dist 
                by the readable content of a page when looking at 
                its layout. The point of using Lorem </p>
            </div>
          </div>
          {/* 6 */}
          <div className="grid_2">
            <div className="img_2_top">
              <img src="assets/images/Images/6.jpg" alt="" />
              <div className="avatar">
                <img src="assets/images/avatar_2.svg" alt="" />
              </div>
            </div>
            <div className="grid_2_footer">
              <h5>888 by Lorem Ipsum</h5>
              <p>It is a long established fact that a reader will be dist 
                by the readable content of a page when looking at 
                its layout. The point of using Lorem </p>
            </div>
          </div>
        </div>
      </section>
    )
}
export default WhoPartner;