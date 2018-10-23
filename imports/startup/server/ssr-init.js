import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import { ServerStyleSheet } from 'styled-components';

// handle material-ui
import { createGenerateClassName } from '@material-ui/core/styles';
import { JssProvider, SheetsRegistry } from 'react-jss';

onPageLoad(async (sink) => {
  // try to disable server render from some pages
  const { url } = sink.request;
  const adminRegex = new RegExp('^/admin');
  if (adminRegex.test(url.path)) {
    return;
  }

  // material-ui
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  const context = {};
  const routes = (await import('../both/routes.js')).default;

  const App = props => (
    <StaticRouter location={props.location} context={context}>
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        {routes}
      </JssProvider>
    </StaticRouter>
  );

  const modules = [];
  const sheet = new ServerStyleSheet();
  // const html = renderToNodeStream((
  const html = renderToString(sheet.collectStyles((
    <Loadable.Capture report={(moduleName) => { modules.push(moduleName); }}>
      <App location={sink.request.url} />
    </Loadable.Capture>
  )));
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

  // we have a list of modules here, hopefully Meteor will allow to add them to bundle
  // console.log(modules);

  // material-ui
  const css = sheetsRegistry.toString();
  // console.log('css', css);

  sink.renderIntoElementById('react-target', html);

  const helmet = Helmet.renderStatic();
  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());
  sink.appendToHead(helmet.link.toString());
  sink.appendToHead(`<style id="jss-server-side">${css}</style>`); // material-ui css attached
  sink.appendToHead(styleTags);
});
