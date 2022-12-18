import { cartData } from "../Shared/Common";
import Navbar from "./Navbar";
import "./ShoppingCart.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ShoppingCart(props) {

  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    return setCartDetails(props.AddCartData);
  }, []);



  console.log(cartDetails);

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#EAEDED" }}>
        <div className="main3">
          <div className="main1">
            <div className="main2">
              <h1 style={{ padding: "10px 0px 20px 50px" }}>ShoppingCart</h1>
              <hr style={{ margin: "0px 20px 0px 20px" }} />

              {cartDetails.map((value, index) => {
                return (
                  <>
                    {" "}
                    <p key={index}>
                      <div className="add-cart">
                        <div className="cart-details">
                          <img src={value.img} width="180px" height="180px" />
                        </div>

                        <div className="cart-1">
                          <p className="heading-style">{value.item}</p>
                          <p className="stock-style">{value.stock}</p>

                          <p className="textStyle">{value.freeDelvivery}</p>
                          <p className="textStyle">{value.Amazone}</p>
                          <p className="textStyle">
                            {value.Color}{props.AddCartData.color}
                          </p>

                          <span className="textStyle">{value.Size}</span>
                          <span className="textStyle">{value.Size1}</span>
                          <br/>
                          
                        <button
                            type="submit"
                            onClick={() => 
                            {
                              return props.DeleteData(index);
                            }}
                          >
                            Remove
                          </button>
                        
                        </div>

                        <div className="cart-mrp">
                          <span>₹{value.Price}</span><br/>
                        </div>

                      </div>{" "} 
                    </p>
                  </>
                );
              })}
            </div>  
          </div>

          <div
            style={{
              marginTop: "88px",
              backgroundColor: "white",
              width: "20%",
              height: "200px",
            }}
          >
            <h2
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              Total Price
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                {/* ₹{props.totalPrice} */}
                
                {cartDetails.reduce((total,value)=>total +=(value.Price),0)}

              </div>
            </h2>
          </div>
        </div>
      </div>

    


    </>
  );
}
