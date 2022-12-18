import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/loginPage";
import Register from "./Components/RegisterPage/Register";
import ProductDetails from "./shoppingCart/ProductDetails";
import Parent from "./shoppingCart/parent";
import AboutProduct from "./shoppingCart/parent";
import ShoppingCart from "./Components/Navbar/ShoppingCart";
import Routing from './Routing'

ReactDom.render(
  <BrowserRouter>
    <Routing></Routing>
  </BrowserRouter>,

  document.getElementById("root")
);
