
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Switch>
      <Route path="/home" component={App} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
