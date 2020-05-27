import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Home} from '@/routes/assembly'

export default function RouterConfig({ history}) {
  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  
  );
}

 
