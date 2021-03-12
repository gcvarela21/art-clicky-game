import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage'

//everything routing related goes in the app
function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      < MainPage />
    </>
  );
}

export default App;

