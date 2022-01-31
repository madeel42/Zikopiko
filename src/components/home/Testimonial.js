import vid from '../../assests/nft.mp4'
import Pdf from '../../assests/pdf.jpg'
const Testimonial = () => {
    return (
        <div className="testimonial-section-wrapper">
            {/* <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 order-md-last">
                    <div className="testimonial-left-section">
                        <img src="assets/images/download (1).png" alt="" />
                        <h1>MOYO OKEDIGI</h1>
                        <p>Art History Professor – University of Texas, USA. Founder – University of African Art ©2018</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 order-md-first">
                    <div className="testimonial-right-section">
                        <h1>Introducing Award Winning Artist Chipika Simanwe.</h1>
                        <p>“Chipika is a visual Fictionist. His work tells stories that only images best describe. Stories that defy words by turning things into fantasy. He is a culture custodian who pokes fun at the very idea of curating culture.
                            He throws jets of liquid at the viewer. As some of the paint land on canvas, he begins to dialogue with you, but does not seem to be talking to you, as he is yelling at you. His work provides food for thought though some of the offering might look toxic, and taste acidic”.</p>
                    </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="testimonial-left-section">
                        <video width='100%' height='300' src={vid} controls />
                    </div>
                </div>
            </div>
            <div className="row" style={{overflow:'auto'}}>
                <div className="col-sm-12 col-md-12 col-lg-12" >
                    {/* <div className="testimonial-left-section"> */}
                        <img src={Pdf} alt="" />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Testimonial;