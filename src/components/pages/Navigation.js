import React from 'react';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import { ProjectDetail } from './ProjectDetail'
import { Footer } from '../Footer';
import projectDetail from './projectDetail.json'

function Navigation() {
  const MAIN_URL = 'https://seyeongpark.github.io';
  
  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path={MAIN_URL + '/project/todo'} render={() => <ProjectDetail {...projectDetail.todo} />}/>
        <Route path={MAIN_URL + '/project/timetracker'} render={() => <ProjectDetail {...projectDetail.emp} />}/>
        <Route path={MAIN_URL + '/project/hotauc'} render={() => <ProjectDetail {...projectDetail.hotauc} />}/>
        <Route path={MAIN_URL + '/project/surveymaker'} render={() => <ProjectDetail {...projectDetail.serveymaker} />}/>
        <Route path={MAIN_URL + '/project/urqr'} render={() => <ProjectDetail {...projectDetail.urqr} />}/>
      </Switch>
    </Router>
      {/* <Footer/> */}
    </>
  );
}

export default Navigation;
