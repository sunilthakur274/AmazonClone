import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './carticon.css'
function Icon(props)

{
 return(
 <div className='text'>
     
    <Link to='/ShoppingCart'>
     <div className='count'>
       {props.count}
       </div>
       <FaCartPlus /> 
    </Link> 
 </div>)
}
export default Icon ;