import RouteConfig from './router.config';
import React from 'react';
import  Home  from '../pages/home/app'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


export default function(){
  return (
    <Router>
      <Switch>
        {
          RouteConfig.map( (val, key) =>(
            <Route path={val.path} key={key} component={val.component} exact></Route>
          ))
        }
        <Route component={Home}></Route>
      </Switch>
    </Router>
  )
}