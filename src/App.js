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
    skill : 'MongoDB, Express, React, Node.js, HTML, CSS',
    date : 'June 2022',
    url : 'https://sptech-todo.netlify.app',
    github : 'https://github.com/SeyeongPark/todo-mern-backend', 
    description : "A simple web application helps users stay organized and managed by adding their tasks to lists.</br>In this application, the user can check all of the items on the list and create, delete, and make each to-do item to the 'completed' state.</br></br> Also, user can access this application not only on their local computer but also everywhere that have an internet connection by using user authentication.<div className='img-container'><img id='detail-img' src='../images/projects/todo/td-detail.png'/></div>",
    learned: '- Developing CRUD operation with the API server with MongoDB</br>- Hosting the back-end (server) side and connecting it with the front-end(client) side</br>- Styling advanced UI/UX with JSX(using a conditional operator) and CSS (using root, hover..)</br>- Setting authentication with a json web token'
    
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
      <Footer/>
    </Router>
    </>
  );
}

export default App;
