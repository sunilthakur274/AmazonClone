import { cartData } from "../Components/Shared/Common";
import "./AddCart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AddCart(props) {
  return (
    <>
      {/* {cartData.map(function (value) {
        return (
          <> */}

      <div className="add-items">
        <div className="add-item1">
          <h2>₹{props.number.Price}</h2>
          <br />
          <p className="add-item2">
            {props.number.freeDelvivery}
            {props.number.Delivery}
          </p>

          <p style={{ color: "green", fontSize: "20px", marginTop: "5px" }}>
            {props.number.stock}
          </p>

          <p style={{ marginTop: "6px" }}>{props.number.Sold}</p>
          <input
            type="number"
            id="btn4"
            placeholder="Qty"
            min="0"
            onChange={props.addCount}
          ></input>
          <br />

          {/* <Link to = {`/ShoppingCart/${props.number.id}`}> */}
          <button
            type="submit"
            id="btn1"
            onClick={() => {
              props.addCount(props.number);
            }}
          >
            
            {props.number.button}
          </button>
          {/* </Link> */}

          <br />
          <button type="submit" id="btn2">
            {props.number.buy}
          </button>
          <br />

          <button type="submit" id="btn3">
            {props.number.wishlist}
          </button>
        </div>
      </div>
    </>
  );
  //     })}
  //   </>
  // );
}
