import { accessories } from "../Components/Shared/Common";
import "./ComputerAccessories.css";
function Accessories() {
  return (
    <>
      <div className="mainacc">
        <div className="acc">
          <h2 style={{ margin: "0px 0px 0px 15px", paddingTop: "10px" }}>
            Best Sellers in Computers & Accessories
          </h2>
          <div className="subacc">
            <br />
            {accessories.map(function (value) {
              return (
                <>
                  <img src={value.img} style={{ margin: "5px" }} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Accessories;
