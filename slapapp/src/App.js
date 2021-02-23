import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage'

//everything routing related goes in the app
function App() {
  return (
    <>
    < MainPage />
    </>
  );
}

export default App;

      /* <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router> */