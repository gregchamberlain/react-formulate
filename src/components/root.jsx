import React from 'react';
import Sidebar from './ui/sidebar';
import GettingStarted from './pages/getting_started';
import InputTypes from './pages/input_types';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Sidebar}>
      <IndexRoute component={GettingStarted}/>
      <Route path="input-types" component={InputTypes} />
      <Route path="sandbox" component={() => <div>Sandbox</div>} />
    </Route>
  </Router>
);

export default Root;
