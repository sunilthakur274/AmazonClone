import "./ProductDetails.css";
import { cartData } from "../Components/Shared/Common";
import { TbTruckDelivery } from "react-icons/tb/";
import { MdReplayCircleFilled } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import AddCart from "./AddCart";
import ProductInformation from "./ProductInformation";
import Navbar from "../Components/Navbar/Navbar";
import Cart from "./ProductItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartItem from "./ProductItems";
import ProductImages from "./ProductImages";

export default function ProductDetails(props) {

 

  
 


  const {id} = useParams();
    const[productItem,setProductItem] = useState([])


    useEffect(()=>{
      window.scrollTo({top:0,left:0});
        let product = cartData.filter((value)=>
        {
            return value.id == id;
        },
            [productItem]
        )
        setProductItem(product[0]);

    },[])
  
   

  return (
    <>   
      
      {/* <Navbar handleClick={addCart}/> */}
    
    <br/><br/><br/>   
          <div className="item-details">
            <div className="img1">
              <div style={{ display: "flex" }}>
                <div className="img2">
                  <center>
                   
                    
                    <img
                      src={productItem.img}
                      style={{ width: "70%", margin: "25px",}}
                    />

                 
                  </center>
                </div>
                 
                
                {/* <ProductImages cartData={cartData}/> */}



                <div className="heading">
                  <h2>{productItem.item}</h2>
                  <span className="brand">{productItem.Brand}</span>
                  <p>₹{productItem.Price}</p>
                  <p>{productItem.MRP}</p>
                  <p>{productItem.Product}</p>
                  <p>{productItem.Colour}</p>
                  <p>{productItem.Shape}</p> <br />
                  <div className="icons">
                    <span style={{ fontSize: "30px" }}>
                      <TbTruckDelivery />
                      <p style={{ fontSize: "16px" }}>{productItem.Del}</p>
                    </span>

                    <span style={{ fontSize: "30px" }}>
                      <MdReplayCircleFilled />
                      <p style={{ fontSize: "16px" }}>{productItem.Replace}</p>
                    </span>

                    <span style={{ fontSize: "30px" }}>
                      <GrDeliver />
                      <p style={{ fontSize: "16px" }}>
                        {productItem.Delivered}
                      </p>
                    </span>
                  </div>
                  <br />
                  <h4>About this Item</h4>
                  {productItem.About}
                  <br />
                  <br />
                  <p style={{ color: "#007185" }}>{productItem.compare}</p>
                </div>
              </div>
            
            </div>
            
          <div >

          
            <AddCart number={productItem}  addCount={props.addCount}/>
          </div>
          
          
          </div>
        
        
        <ProductInformation number={productItem}/>



        <CartItem/>

      
     
    </>
  );
}
