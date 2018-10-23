import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

// material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
  },
  palette: {
    primary: pink,
    accent: red,
    type: 'light',
  },
});

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
