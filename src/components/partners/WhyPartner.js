import Card from "./advantages/Card";

const WhyPartner = () =>{
    return(
        <section id="sec_2">
        <h2>Why partner with Zikopika </h2>
        <p>It is a long established fact that a reader will be distracted by the readable content<br /> 
          of a page when looking at its layout. The point of using Lorem </p>
        <div className="wrap_grid_1">
          <Card 
            image="assets/images/Anim Icons/1.png"
            title="Generate Revenue"
            body="It is a long established fact that a reader will be dist 
            by the readable content of a page when looking at 
            its layout. The point of using Lorem"
          />
          
          {/* 2 */}
          <div className="grid_1">
            <img src="assets/images/Anim Icons/2.png" alt="" />
            <h5>Generate Revenue</h5>
            <p>It is a long established fact that a reader will be dist 
              by the readable content of a page when looking at 
              its layout. The point of using Lorem </p>
          </div>
          {/* 3 */}
          <div className="grid_1">
            <img src="assets/images/Anim Icons/3.png" alt="" />
            <h5>Generate Revenue</h5>
            <p>It is a long established fact that a reader will be dist 
              by the readable content of a page when looking at 
              its layout. The point of using Lorem </p>
          </div>
          {/* 4 */}
          <div className="grid_1">
            <img src="assets/images/Anim Icons/4.png" alt="" />
            <h5>Generate Revenue</h5>
            <p>It is a long established fact that a reader will be dist 
              by the readable content of a page when looking at 
              its layout. The point of using Lorem </p>
          </div>
          {/* 5 */}
          <div className="grid_1">
            <img src="assets/images/Anim Icons/5.png" alt="" />
            <h5>Generate Revenue</h5>
            <p>It is a long established fact that a reader will be dist 
              by the readable content of a page when looking at 
              its layout. The point of using Lorem </p>
          </div>
          {/* 6 */}
          <div className="grid_1">
            <img src="assets/images/Anim Icons/9.png" alt="" />
            <h5>Generate Revenue</h5>
            <p>It is a long established fact that a reader will be dist 
              by the readable content of a page when looking at 
              its layout. The point of using Lorem </p>
          </div>
        </div>
      </section> 
    )
}
export default WhyPartner;