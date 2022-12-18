import Cart from "./shoppingCart/cart";
import Carousal from "./Components/ProductAdvertisement/bodypart";
import { cartData } from "./Components/Shared/Common";

export default function Home()
{
    return(<>
      <Carousal />
      <Cart {...props} cartData={cartData} />  
    </>)
}