import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/layout/Home";
import SignedInPage from "./components/layout/SignedInPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/signin' component={SignedInPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
