import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

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
      </StyledDemo>
    </div>
  </div>
);

export default SiteLayout;
