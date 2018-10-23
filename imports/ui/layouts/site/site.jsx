import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledDemo = styled.div`
  font-weight: bold;
`;

const SiteLayout = () => (
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
);

export default SiteLayout;
