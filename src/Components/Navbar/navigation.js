import { nav } from "../Shared/Common";
import "./navigation.css";

function Navgation() {
  return (
    <div>
      <div className="item5">
        {nav.map(function (value) {
          return (
            <a href="#">
              <li>{value}</li>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navgation;
