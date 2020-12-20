import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SingleProduct from "./Product/SingleProduct";
import Shop from "./Shop";
import Cart from "./Shop/Cart";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/carts" component={Cart}></Route>
        <Route path="/product/:id" component={SingleProduct}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
