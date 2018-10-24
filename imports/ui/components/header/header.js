import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const StyledSiteHeader = styled.div`
  background: #F2F2F2;
`;

class SiteHeader extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <StyledSiteHeader>
        <div className="site-header">
          <Grid container spacing={0}>
            <Grid item xs={5}>
              5
            </Grid>
            <Grid item xs={7}>
              7
            </Grid>
          </Grid>
        </div>
      </StyledSiteHeader>
    );
  }
}

export default SiteHeader;
