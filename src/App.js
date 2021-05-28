import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-up/sign-in-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
