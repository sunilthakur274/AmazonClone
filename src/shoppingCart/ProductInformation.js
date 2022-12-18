import { cartData } from "../Components/Shared/Common"
import './ProductInformation.css'

export default function ProductInformation(props)
{
    return (<>

<div className='cls2'>
                    <h2 style={{color:'#CC6600'}}>Product Information</h2><br/>
                <table className='cls1'>
                    <tr >
                        <td className="tr1">{props.number.ProductDimension}</td>    
                        <td>{props.number.ProductDimensions}</td>    
                    </tr>

                    <tr>
                        <td  className="tr1"> {props.number.Color}</td>    
                        <td> {props.number.color}</td>    
                    </tr>   

                    <tr>
                        <td className="tr1"> {props.number.ItemWeight}</td>    
                        <td> {props.number.ItemWeight1}</td>    
                    </tr>   

                    <tr>
                        <td className="tr1"> {props.number.Size}</td>    
                        <td> {props.number.Size1}</td>    
                    </tr>  

                      <tr>
                        <td className="tr1"> {props.number.Brand}</td>    
                        <td> {props.number.Brand1}</td>    
                    </tr>   
 
                    <tr>
                        <td className="tr1"> {props.number.Color}</td>    
                        <td> {props.number.color}</td>    
                    </tr>   

                    <tr>
                        <td className="tr1"> {props.number.Packer}</td>    
                        <td> {props.number.Packer1}</td>    
                    </tr> 

                    <tr>
                        <td className="tr1"> {props.number.Manufacturer}</td>    
                        <td> {props.number.Manufacturer1}</td>    
                    </tr> 

                    <tr>
                        <td className="tr1"> {props.number.TopMaterialType}</td>    
                        <td> {props.number.TopMaterialType1}</td>    
                    </tr> 
                    
                    <tr>
                        <td className="tr1"> {props.number.ASIN}</td>    
                        <td> {props.number.ASIN1}</td>    
                    </tr>

                </table>    
                   
                </div>
                
    
    
    </>)
}