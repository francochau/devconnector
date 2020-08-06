import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Login from './component/layout/Login';
import Register from './component/layout/Register';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar />
          <Route path='/' component={Landing} />
          <section className='container'>
            <switch></switch>
          </section>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
