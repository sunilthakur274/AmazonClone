import { ProductData } from "../Components/Shared/Common";
import ShowMoreText from "react-show-more-text";
import "./ProductItems.css";

import { Link } from "react-router-dom";

function CartItem() {
  const executeOnClick = () => {
    return <></>;
  };
  return (
    <>
      <div>
        <br />
        <h2 style={{ margin: "10px 0px 30px 30px" }}>
          Products related to this item
        </h2>
        <div className="main-container121">
          {ProductData.map(function (value) {
            return (
              <>
                <div className="cart-containter121">
                  <img src={value.img} style={{ width: "100%" }} />

                  <br />
                  <br />

                  <p className="content121">
                    <div>
                      {" "}
                      <ShowMoreText
                        lines={2}
                        more="More"
                        less="...Show less"
                        anchorClass="oooeeer"
                        onClick={executeOnClick}
                        expanded={false}
                        width={0}
                      >
                        <p>{value.item}</p>

                        <span className="cart-item121">{value.Deal}</span>
                        <br />
                        <span className="cart-item122">₹{value.Price}</span>
                        <br />
                        <span className="cart-item123">{value.MRP}</span>
                        <br />
                        <span className="cart-item124">{value.Delivery}</span>
                        <br />
                      </ShowMoreText>
                    </div>
                  </p><br/>

                  <span className="cart-item125">{value.freeDelvivery}</span>
                  <br />
                  <span className="cart-item126">{value.Amazone}</span>
                  <br />
                  <span className="cart-item127">{value.EndingDate}</span>
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

export default CartItem;
