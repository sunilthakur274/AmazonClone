import SecBoxchild from "./secBoxchild";
//import Login from "../LoginPage/loginPage";
import { a } from "../Shared/Common";
import "./secondBox.css";

function SecondBox() {
  return (
    <>
      <div className="imgg1">
        {a.map(function (value) {
          return (
            <div className="imgg2">
              <SecBoxchild
                Heading={value.Heading}
                img1={value.img1}
                About1={value.About1}
                img2={value.img2}
                About2={value.About2}
                img3={value.img3}
                About3={value.About3}
                img4={value.img4}
                About4={value.About4}
                Link={value.Link}
              />
            </div>
          );
        })}
      </div>
      {/* <Login /> */}
    </>
  );
}

export default SecondBox;
