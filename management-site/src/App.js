import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import NavBar from './components/layout/navBar';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';
import MainPage from './components/pages/mainPage/mainPage';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/dashboard" exact component={MainPage}/>
      </div>
    );
  }
}

export default App;
