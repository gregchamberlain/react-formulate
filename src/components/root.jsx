import React from 'react';
import Sidebar from './ui/sidebar';
import GettingStarted from './getting_started';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Sidebar}>
      <IndexRoute component={GettingStarted}/>
    </Route>
  </Router>
);

export default Root;
