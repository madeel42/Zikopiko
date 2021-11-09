import React, { useState } from 'react';

const Row = ({title, body}) =>{

    const [ collapse, setCollapse ] = useState(true);

    let collapseStyle={ 
        display: ''
    };

    collapse? collapseStyle.display = 'none': collapseStyle.display = 'block';

    return(
        <div className="card faqs_accordion_qa">
            <div className="card-header p-0 card_header" id="headingOne">
                <button className="btn btn-link btn-block text-left faqs_accordion_qa_btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {title} 
                    <span style={{float:'right'}}>
                        <i onClick={()=>{ collapse?  setCollapse(false): setCollapse(true)}} class={collapse ? "fas fa-sort-down" : "fas fa-sort-up"}></i>
                    </span>
                </button>
            </div>
            <div style={collapseStyle} className="collapse show collapse_box" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    {body}
                </div>
            </div>
        </div>
    )
}
export default Row;