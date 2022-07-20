import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import ProjectDetail from './components/pages/projects/ProjectDetail'
import Footer from './components/Footer';

function App() {
  // project detail
  const todo = {
    title : 'Todo',
    coop : 'Solo',
    skill : 'MongoDB, Express, React, Node.js',
    date : 'June 2022',
    url : 'https://sptech-todo.netlify.app',
    github : 'https://github.com/SeyeongPark/todo-mern-backend', 

    description : 'detail',
    
  }


  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/project' exact component={ProjectDetail}/>
      <Route path='/project/todo' render={(todos) => <ProjectDetail {...todo} />}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
