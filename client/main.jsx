// import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
// import App from '/imports/ui/App'
//
// Meteor.startup(() => {
//   render(<App />, document.getElementById('react-target'));
// });

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { onPageLoad } from 'meteor/server-render';

const history = createHistory();

onPageLoad(async () => {
  const routes = (await import('/imports/startup/both/routes.js')).default;
  const App = () => (
    <Router history={history}>
      {routes}
    </Router>
  );
  ReactDOM.hydrate(<App />, document.getElementById('react-target'));
});
