import { cartData } from "../Components/Shared/Common";
import ProductDetails from "./ProductDetails";
import ProductImages  from "./ProductImages";
import react,{useState} from 'react'

export default function AboutProduct(props)
{

   

   return(
   <>
       
   <ProductDetails addCount={props.addCount}>
   </ProductDetails>
        
    </>)
}