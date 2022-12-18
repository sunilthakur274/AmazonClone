import { FaSearch } from "react-icons/fa";
import "./Navtextfeild.css";
import {useState} from 'react' ;
import {cartData} from '../Shared/Common'

function SearchFeild() {

  const [searchField, setSearchField] = useState("");


  const handleChange = e => {
    setSearchField(e.target.value);
  }
  console.log(searchField)

  return (<>
    <div className="p1">
      <select id="a1">
        <option>All</option>
        <option>All Department</option>
        <option>Arts And Crafts</option>
      </select>

      <input type="text" alt="" id="input12" onChange = {handleChange}/>
      <button type="submit" id="a12">
        <FaSearch />
      </button>
     
    </div>
    </>
  );
}
export default SearchFeild;
