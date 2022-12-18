import Cart from "./shoppingCart/cart";
import Carousal from "./Components/ProductAdvertisement/bodypart";
import { cartData } from "./Components/Shared/Common";
import { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <>
      <Carousal />
      <Cart {...props} cartData={cartData}/>
    </>
  );
}

export default App;
