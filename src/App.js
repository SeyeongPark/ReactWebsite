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

  const emp = {
    title : 'Employee Time Tracker',
    coop : 'Solo',
    skill : 'Java, MySQL, Spring Framework, HTML, CSS',
    date : 'May 2022',
    url : 'https://timestamp-app-1.herokuapp.com',
    github : 'https://github.com/SeyeongPark/PartTime-TimeStamp', 
    description : "A web application that records employees' working time stamps from start to finish, and allows the manager to access all information. </br></br>In this application, there are 2 main roles, employee and manager. All workers can record their working hours by clicking the 'record' button and will be calculated their working hours based on starting to finishing work on the main page. On the 'My Employee' page, a manager can check not only all employees' information for working hours, but also update their salary and specific position.<div className='img-container'><img id='detail-img' src='../images/projects/timetracker/tt-detail.png'/></div>",
    learned: '- Structuring SQL module and entity for a database using MySQL</br>- Implementing Controller for all features using  HttpMethod</br>- Setting the authentication to log in and permission for a manager page'
  }

  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/project' exact component={ProjectDetail}/>
      <Route path='/project/todo' render={(todos) => <ProjectDetail {...todo} />}/>
      <Route path='/project/timetracker' render={(emps) => <ProjectDetail {...emp} />}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
