import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 컴포넌트명 from './Page/컴포넌트명';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <컴포넌트명 />} />
      </Switch>
    </Router>
  );
}

export default Routes;