import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'




import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          < Navbar />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

