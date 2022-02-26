import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StarFill, Star } from "react-bootstrap-icons";
import React, { useState } from "react";

function Card(props) {

    const [star, changeStars] = useState(0);

    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

    //make stars Array
    let filledStars=Number(star)
    let starsArray=[]
    Array.from(Array(filledStars)).map((_, d)=>{
        starsArray.push(d+1)
   })

   if(starsArray.length<5){
       let nEmptyStars=5-filledStars;
       Array.from(Array(nEmptyStars)).map((_, d)=>{
        starsArray.push(0)
   })
   }

 
//return new star value from change-State
 const changeRating=(e)=>{
     changeStars(()=>{
        
         return e;
     })
    }


  return (

    
    <div className="col mb-5">
      <div className="card h-100">
        {props.sale ? (
          <div className="badge bg-dark text-white position-absolute sale_style">
            Sale
          </div>
        ) : (
          <div></div>
        )}

        <img className="card-img-top" src={props.img} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.name}</h5>

           
              <div className="d-flex justify-content-center small text-warning mb-2">
                  
                {
                    starsArray.map((e, index)=>{
                        if(e>0)
                        return <StarFill onClick={()=>{changeRating(index+1)}} key={index} />;
                        else
                        return <Star onClick={()=>{changeRating(index+1)}} key={index} />;
                    })
               }

               
              </div>
           
            {props.discount ? (
              <div>
                <span className="text-muted text-decoration-line-through">
                  ${props.price1}
                </span>
                &nbsp;${props.price2}
              </div>
            ) : (
              <div>
                ${props.price1} - ${props.price2}
              </div>
            )}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div
            className={isActive ? "text-center hide_div": "text-center"}
            onClick={() => {
              props.addToCart(props.name);
              toggleClass()
            }}
          >
            <span className="btn btn-outline-dark mt-auto">Add to Cart</span>
          </div>

          <div
            className={isActive ? "text-center": "text-center hide_div"}
            onClick={() => {
              props.addToCart(props.name);
              toggleClass()
            }}
          >
            <span className="btn btn-outline-dark mt-auto">Remove</span>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Card;
