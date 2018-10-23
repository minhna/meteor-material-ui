import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '/imports/ui/themes/default.js';

// styled-components
const StyledDemo = styled.div`
  font-weight: bold;
`;

const SiteLayout = () => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    <div className="site-container">
      <Helmet>
        <title>Site layout</title>
      </Helmet>
      <div>
        <StyledDemo>
          Some text
          <Button variant="contained" color="primary">
            Material-ui
          </Button>
        </StyledDemo>
      </div>
    </div>
  </MuiThemeProvider>
);

export default SiteLayout;
