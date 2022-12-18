import Box from "../Products/Box";
import "./bodypart.css";
import Deal from "../../shoppingCart/Deal";
function Carousal() {
  return (
    <div>
      <div className="container12">
        <div id="image12">
          <div class="box1">
            <h2>Under 1,999</h2>
            <h4>
              Top rated Electroincs &<br />
              accessories
            </h4>
            <p>Extra upto 10% off via coupons</p>

            <div>
              <span>Pay on delivery</span>
            </div>

            <div>
              <span>Return Type</span>
            </div>
          </div>

          <div>
            <img src="/images/p1.png" alt=" " id="a10" />
          </div>
        </div>

        <Box />
        <Deal/>
      </div>
    </div>
  );
}

export default Carousal;
