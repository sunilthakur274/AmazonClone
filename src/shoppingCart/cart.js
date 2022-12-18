//import { cartData } from "../Components/Shared/Common";
import ReactStars from "react-rating-stars-component";
import ShowMoreText from "react-show-more-text";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import "./cart.css";
import { Link, useNavigate, useNavigation } from "react-router-dom";
function Cart(props) {

  

  useEffect(()=>{
    console.log('Props:', props)
  },[])

  const navigate = useNavigate()
  const [rating, setRating] = useState("");

  const ratingChanged = (rating) => {
    return setRating(rating);
  };
  
 

  const executeOnClick = () => {
    return <></>;
  };
  return (
    <>
  
  <div>
    
    

      <br />
      <h2 style={{ margin: "10px 0px 30px 30px" }}>
        Customers who viewed items in your browsing history also viewed
      </h2>
      <div className="main-container">
        
        {props.cartData.map(function (value,index) {
          
          return (
            <>
              <div className="cart-containter">
            
           

              {/* <p onClick={()=>{props.onClick(index)}}> */}
              
            <Link to ={`/AboutProduct/${value.id}`} addCount={props.addCount}>

              <img src={value.img} style={{ width: "100%" }} />
            </Link>
             

                
                <br />
                <br />

                <p className="content">
                 
                  <div>
                    {" "}
                    <ShowMoreText
                      
                      lines={3}
                      more="More"
                      less="...Show less"
                      anchorClass="oooeeer"
                      onClick={executeOnClick}
                      expanded={false}
                      width={0}> 

                                    
                      <p>{value.item}</p>

                    </ShowMoreText>
                    
                        


                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <h1>
                      

                      {rating}
                      
                    </h1>
                    <span className="cart-item1">{value.Deal}</span>
                    <br />
                    <span className="cart-item2">₹{value.Price}</span>
                    <br />
                    <span className="cart-item3">{value.MRP}</span>
                    <br />
                    <span className="cart-item4">{value.Delivery}</span>
                    <br />
                  </div>
                 
                

                <span className="cart-item5">{value.freeDelvivery}</span>
                <br />
                <span className="cart-item6">{value.Amazone}</span>
                <br />
                <span className="cart-item7">{value.EndingDate}</span> </p> 
                {/* </p> */}
              </div>
            
            </>
          );
        })}
      </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      {/* <ProductDetails Parent={parent} child={text}/> */}
      
    </>
  );
}

export default Cart;
