import { createMuiTheme } from '@material-ui/core/styles';
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

export default theme;
