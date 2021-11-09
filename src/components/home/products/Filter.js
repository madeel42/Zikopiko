import React, { useState } from "react"

const Filter = ({title, icon}) =>{

    const [ collapse, setCollapse ] = useState(true);

    let collapseStyle={ 
        display: ''
    };

    collapse? collapseStyle.display = 'none': collapseStyle.display = 'block'

    return(
        <ul className="price-tag-html-input-wrap">
            <li id="dash_sp_btwn">
                <a onClick={()=>{ collapse?  setCollapse(false): setCollapse(true)}}>
                    <div className="row">
                    <div className="col-9">
                        <p> 
                            {icon && <><img src={icon} alt="" /> &nbsp;</>}
                            {title}
                        </p>
                    </div>
                    <div className="col-3">
                        <div id="testfouthmil" className={collapse ?  "offfourthhigh": "onnsixhigh"}>
                        </div>
                    </div>
                    </div>
                </a>
                <ul id="hisfourthLinks" style={collapseStyle}>
                    <div className="second-social">
                    <div className="min-to-max-wrap">
                        <input type="text" placeholder="Min" />
                        <p>to</p>
                        <input type="text" placeholder="Max" />
                    </div>
                    <div className="price-apply-filter-button">
                        <button>
                        Apply
                        </button>
                    </div>
                    </div>
                </ul>
            </li>
      </ul>
    )
}

export default Filter;