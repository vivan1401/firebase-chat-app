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
            <Route exact path='/' render={(props)=><Home {...props}/>}></Route>
            <Route path='/signin' render={(props)=><SignedInPage {...props}/>}></Route>
            <Route path='/chat/:id' component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
