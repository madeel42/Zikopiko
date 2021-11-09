import Row from "./faqs/Row";

const Faqs = () =>{
    return(
       

      <section className="faqs">
      <div className="container-fluid">
        <div className="faq_according_wrapper">
          <div className="faqs_title_text">
            <h2>FAQs</h2>
            <p className="faqs_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          </div>
          <div className="faqs_qa">
            <div className="accordion" id="accordionExample">
              <Row 
                title="In publishing and graphic design, Lorem ipsum is a ?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rerum? Neque, distinctio amet. Necessitatibus, distinctio. Soluta possimus minus ex dolores eos officiis iure in ab dolorem, voluptatum, nemo illo sapiente"
              />
              <Row 
                title="In publishing and graphic design, Lorem ipsum is a ?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rerum? Neque, distinctio amet. Necessitatibus, distinctio. Soluta possimus minus ex dolores eos officiis iure in ab dolorem, voluptatum, nemo illo sapiente"
              />
              <Row 
                title="In publishing and graphic design, Lorem ipsum is a ?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rerum? Neque, distinctio amet. Necessitatibus, distinctio. Soluta possimus minus ex dolores eos officiis iure in ab dolorem, voluptatum, nemo illo sapiente"
              />
              <Row 
                title="In publishing and graphic design, Lorem ipsum is a ?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rerum? Neque, distinctio amet. Necessitatibus, distinctio. Soluta possimus minus ex dolores eos officiis iure in ab dolorem, voluptatum, nemo illo sapiente"
              />
              <Row 
                title="In publishing and graphic design, Lorem ipsum is a ?"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rerum? Neque, distinctio amet. Necessitatibus, distinctio. Soluta possimus minus ex dolores eos officiis iure in ab dolorem, voluptatum, nemo illo sapiente"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Faqs;