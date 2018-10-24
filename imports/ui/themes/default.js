import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    useNextVariants: true,
    fontFamily: [
      'Roboto Condensed',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#431B03',
      type: 'dark',
    },
    secondary: orange,
    type: 'light',
  },
  overrides: {
    MuiGrid: {
      container: {
        'max-width': '1170px',
        margin: '0 auto',
      },
    },
  },
});

export default theme;
