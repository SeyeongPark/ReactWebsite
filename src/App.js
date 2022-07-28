import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import ProjectDetail from './components/pages/projects/ProjectDetail'
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/project' exact component={ProjectDetail}/>

      </Switch>
    </Router>
      <Footer/>
    </>
  );
}

export default App;
