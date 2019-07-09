import RouteConfig from './router.config';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';


export default function(){
  return (
    <Router>
      {/* <Route path ={RouteConfig[1].path} component={RouteConfig[1].component}></Route> */}
      {
        RouteConfig.map( (val, key) =>(
          <Route path={val.path} key={key} component={val.component} exact={val.path === '/'? true: false}></Route>
        ))
      }
    </Router>
  )
}