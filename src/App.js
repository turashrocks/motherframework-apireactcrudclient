import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import Header from './components/Layout/Header'
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddProduct from './components/Product/AddProduct';
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/addProduct" component={AddProduct}/>
          </div>
        </Router>
      </Provider>
    </>
    );
  }
}

export default App;
