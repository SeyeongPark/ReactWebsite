import React from 'react';
import { Navbar } from '../Navbar';
import { Router, Switch, Route, HashRouter } from 'react-router-dom';
import Home from './Home'
import { ProjectDetail } from './ProjectDetail'
import { Footer } from '../Footer';
import projectDetail from './projectDetail.json'
import MyStory from './MyStory';

function Navigation() {
  return (
    <>
    <HashRouter>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/mystory' exact component={MyStory}/>
        <Route path='/project/todo' render={() => <ProjectDetail {...projectDetail.todo} />}/>
        <Route path='/project/timetracker' render={() => <ProjectDetail {...projectDetail.emp} />}/>
        <Route path='/project/hotauc' render={() => <ProjectDetail {...projectDetail.hotauc} />}/>
        <Route path='/project/surveymaker' render={() => <ProjectDetail {...projectDetail.serveymaker} />}/>
        <Route path='/project/urqr' render={() => <ProjectDetail {...projectDetail.urqr} />}/>
      </Switch>
    </HashRouter>
      {/* <Footer/> */}
    </>
  );
}

export default Navigation;
