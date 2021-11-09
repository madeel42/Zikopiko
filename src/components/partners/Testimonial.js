const Testimonial = () =>{
    return(
        <section className="testimonial">
        <div className="container-fluid">
          <div className="testimonial_img_content">
            <div className="column_medium testimonial_content">
              <div className="test_text_content">
                <h2 className="before_text">❝</h2>
                <p className="content_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norm distribution of letter as opposed to using lorem 'Content here, content here', making</p>
                <h2 className="before_text"><p>❞</p></h2>
              </div>
              <div className="test_text_writer">
                <p className="writer_name">Lorem Ipsum</p>
                <p className="writer_name_text">It is a long established fact that</p>
              </div>
            </div>
            <div className="column_medium testimonial_content">
              <div className="test_img_content">
                <img src="assets/images/testimonial_img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Testimonial;