import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import MainLayout from './containers/MainLayout';

const routes = (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

export default routes;
