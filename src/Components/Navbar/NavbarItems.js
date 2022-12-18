import Navgation from "./navigation";
import SearchFeild from "./Navtextfeild";
import Icon from "./carticon";
 import { useState } from "react";
import {Link} from 'react-router-dom'
import { GoLocation } from 'react-icons/go';
// import Hover from "./Hover";
import "./NavbarItems.css";

function NavItems(props) {

  const[change,setChange] = useState(false)

  const handleMouseIn =() =>{
    setChange(true )
  }
  
  const handleMouseOut = () => {
    setChange( false )
  }

  return (

  

    <div>
      <div className="item1">
        <div className="itema1">
        <Link to ='/'>
          <img src="/images/amazone3.jpg" alt=" " id="img1" />
        </Link>
        </div>

        <div className="item2">
          <p><GoLocation style={{position:'absolute',marginTop:'17px',marginLeft:'-19px'}}/>{props.item[0]}</p>
        </div>

        <SearchFeild handleChange={props.handleChange}/>

      
        <div className="item3" onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut}>
        
        {/* <Link to="/loginPage" >
          {change?<div>
           
            <p>{props.item[1]}</p>
             {/* <Hover /> */}
            {/* </div></div> */}
              {/* :<div><p > {props.item[1]} </p></div>} */}
       {/* </Link> */} 

         <Link to="/loginPage" >
         
           
            <p>{props.item[1]}</p>
             
            
             
        </Link>
        
        
        </div>  

        <div className="item4">
          <p> {props.item[2]} </p>
        </div>
              
        <div>
          <Icon  handleChange={props.handle} count={props.count}/>
        </div> 
      </div>

      <div>
        <Navgation/>
      </div>
    </div>
  );
}
export default NavItems;
