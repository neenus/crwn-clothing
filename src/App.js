import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/hompage.component";

const HatsPage = () => <h1>Hats page</h1>;
const JacketsPage = () => <h1>Jackets page</h1>;
const SneakersPage = () => <h1>Sneakers page</h1>;
const MenPage = () => <h1>Men's page</h1>;
const WomenPage = () => <h1>Women's page</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/mens" component={MenPage} />
        <Route exact path="/womens" component={WomenPage} />
      </Switch>
    </div>
  );
}

export default App;
