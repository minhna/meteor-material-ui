import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadableWrapper from '/imports/helpers/react-loadable/LoadableWrapper.js';

const LoadableAdminLayout = LoadableWrapper({
  loader: () => import('/imports/ui/layouts/admin/admin.jsx'),
  modules: ['/imports/ui/layouts/admin/admin.jsx'],
});
const LoadableSiteLayout = LoadableWrapper({
  loader: () => import('/imports/ui/layouts/site/site.jsx'),
  modules: ['/imports/ui/layouts/site/site.jsx'],
});

export default (
  <Switch>
    <Route path="/admin" component={LoadableAdminLayout} />
    <Route path="/" component={LoadableSiteLayout} />
  </Switch>
);
