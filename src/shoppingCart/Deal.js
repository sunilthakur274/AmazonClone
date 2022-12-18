import "./Deal.css";
import { Deals } from "../Components/Shared/Common";
import Accessories from "./ComputerAccessories";

function Deal() {
  return (
    <>
      <div className="today-deal">
        <div className="subdiv">
          <br />
          <h2 style={{ margin: "10px " }}>Today's Deal</h2>
          <div className="maindiv">
            {Deals.map(function (value) {
              return (
                <>
                  <div className="products">
                    <div className="product-items">
                      <center>
                        <img
                          src={value.image}
                          style={{ margin: "10px 0px 10px 0px" }}
                        />
                      </center>
                    </div>

                    <div className="products-items">
                      <p className="product-item">{value.off}</p>
                      <p className="product-item1">{value.deal}</p>
                    </div>

                    <p className="product-item2">{value.offers}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Accessories />
    </>
  );
}
export default Deal;
