import React from "react";
import Img1 from "./Img1";
import Heading from "./Heading";


function Card(props){
    return(
      <>
      <div className='cards'>
        <div className='card'>
        <Img1 imgsrc={props.imgsrc}/>
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <Heading sname ={props.sname}/>
            <a href={props.link} target='_blank'>
            <center> <button>Watch Now</button></center>
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }
  export default Card;