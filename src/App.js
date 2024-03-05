import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./elements/Home";
import Create from "./elements/Create";
import Edit from "./elements/Edit";
import Read from "./elements/Read";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" ><Create/></Route>
        <Route  path="/home" ><Home></Home></Route>
        <Route path="/edit/:id" ><Edit/></Route>
        <Route path="/read/:id" ><Read></Read></Route>
      </Switch>
    </BrowserRouter>
    // <Create/>
  );
}

export default App;
