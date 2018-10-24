import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '/imports/ui/themes/default.js';

import SiteHeader from '/imports/ui/components/header/header.js';
import SiteFooter from '/imports/ui/components/footer/footer.js';
import PageHome from '/imports/ui/pages/home/home.js';

// styled-components
const StyledDefault = styled.div`
  font-family: Roboto Condensed;
`;

const SiteLayout = props => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    <CssBaseline>
      <StyledDefault>
        <div className="site-container">
          <Helmet>
            <title>Site layout</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&subset=vietnamese" rel="stylesheet" />
          </Helmet>
          <div>
            <SiteHeader {...props} />
          </div>
          <Switch>
            <Route path="/" component={PageHome} />
          </Switch>
          <div>
            <SiteFooter {...props} />
          </div>
        </div>
      </StyledDefault>
    </CssBaseline>
  </MuiThemeProvider>
);
export default SiteLayout;
