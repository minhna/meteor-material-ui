import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { onPageLoad } from 'meteor/server-render';

// handle material-ui
import { createGenerateClassName } from '@material-ui/core/styles';
import { JssProvider } from 'react-jss';

const history = createHistory();

onPageLoad(async () => {
  const routes = (await import('/imports/startup/both/routes.js')).default;
  const generateClassName = createGenerateClassName();
  const App = () => (
    <Router history={history}>
      <JssProvider generateClassName={generateClassName}>
        {routes}
      </JssProvider>
    </Router>
  );
  ReactDOM.hydrate(<App />, document.getElementById('react-target'));
});
