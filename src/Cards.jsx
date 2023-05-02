import React from "react";
import "./Props.css";
import Images from "./Images";

    function Card(prop){
        return (
         <div className="cards">
          <div className="card">
            <Images  imgsrc={prop.imgsrc}/>
              <div className="card_info">
                <span className="card_category">{prop.title}</span>
                <h3 className="card_title">{prop.sname}</h3>
                <a href={prop.link} target="_blank" className="target_link">
                  <button className="btn" type="button">
                  {prop.btn}
                  </button>
                </a>
              </div>
            </div>
    
          </div>
        );
    }

    export default Card;