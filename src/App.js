import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import { ProjectDetail } from './components/pages/ProjectDetail'
import { Footer } from './components/Footer';
import projectDetail from './components/pages/projectDetail.json'

function App() {

  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/project/todo' render={() => <ProjectDetail {...projectDetail.todo} />}/>
        <Route path='/project/timetracker' render={() => <ProjectDetail {...projectDetail.emp} />}/>
        <Route path='/project/hotauc' render={() => <ProjectDetail {...projectDetail.hotauc} />}/>
        <Route path='/project/surveymaker' render={() => <ProjectDetail {...projectDetail.serveymaker} />}/>
      </Switch>
    </Router>
      <Footer/>
    </>
  );
}

export default App;
