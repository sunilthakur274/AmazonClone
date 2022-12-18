import BoxChild from "./BoxChild";
import SecondBox from "./secondBox";
import { box } from "../Shared/Common";
import "./Box.css";

function Box() {
  return (
    <>
      <div className="main">
        {box.map(function (value) {
          return (
            <div className="text12">
              <BoxChild
                Title={value.Title}
                Image={value.Image}
                About={value.About}
              />
            </div>
          );
        })}
      </div>
      
      <SecondBox />
    </>
  );
}

export default Box;
