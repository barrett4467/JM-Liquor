import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
