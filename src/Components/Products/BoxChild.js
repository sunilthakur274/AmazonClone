import "./Boxchild.css";

function BoxChild(props) {
  return (
    <div>
      {" "}
      <h2>{props.Title}</h2>
      <img src={props.Image} width="100%" id="ig2" />
      <a href="#" id="ig1">
        {props.About}
      </a>
    </div>
  );
}

export default BoxChild;
