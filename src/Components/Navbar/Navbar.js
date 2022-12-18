import NavItems from "./NavbarItems";
import { navbar } from "../Shared/Common";
import { useState } from "react";
import "./navbar.css";



function Navbar(props) {



  return (
    <div>
      <p>
        <NavItems item={navbar} handle={props.handleClick} count={props.count} handleChange={props.handleChange}/>
      </p>
    </div>
  );
}

export default Navbar;
