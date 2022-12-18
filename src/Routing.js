import App from "./App";
import Login from "./Components/LoginPage/loginPage";
import Register from "./Components/RegisterPage/Register";
import AboutProduct from "./shoppingCart/parent";
import ShoppingCart from "./Components/Navbar/ShoppingCart";
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


export default function Routing(props) {

  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState([]);

  const addCount = (number) => {
    setCount(count + 1);
    setCartData((prevstate) => {
      return [...prevstate, number] 
    })
  }
  

  const deleteData = (index) => {
    const del = cartData.filter((elem, id) => {
      return index !== id;
    });
    setCartData(del);
    setCount(count - 1)
  }


  return (
    <>
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/loginPage" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/AboutProduct/:id"
          element={<AboutProduct addCount={addCount} />}
        />
        <Route
          path="/ShoppingCart"
          element={
            <ShoppingCart AddCartData={cartData} DeleteData={deleteData}/>
          }
        />
      </Routes>
    </>
  );
}
