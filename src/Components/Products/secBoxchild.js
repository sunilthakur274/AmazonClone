import "./secBoxchild.css";

function SecBoxchild(props) {
  return (
    <>
      <div className="image2">
        <h2>{props.Heading}</h2>
        <div className="image1">
          <img src={props.img1} id="image" />
          <p id="ar">{props.About1}</p>
        </div>
        <div className="image1">
          <img src={props.img2} id="image" />
          {props.About2}
        </div>
        <div className="image1">
          <img src={props.img3} id="image" />
          {props.About3}
        </div>
        <div className="image1">
          <img src={props.img4} id="image" />
          {props.About4}
        </div>{" "}
        <br />
        <br />
        <br />
        <a href="#" id="ar1">
          {props.Link}
        </a>
      </div>
    </>
  );
}

export default SecBoxchild;
