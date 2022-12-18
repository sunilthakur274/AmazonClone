import { cartData } from "../Components/Shared/Common"
export default function ProductImages(props)
{
    return(<>

         {props.cartData.map((item,index)=>{
      return (<>
                <p onClick={()=>{props.onClick(index)}}>
                <img src ={item.img} width='50px'/>
                </p>
      
      </>)
    })}
             
           
    
    </>)
}