import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ddf8f6',
    },
    secondary: {
      main: '#aaeee8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
   typography:{
    fontFamily:'Titillium Web, sans-serif ',
    fontWeightLight:400,
    fontWeightMedium:600,
    fontWeightBold:700, 
  }
});

export default theme;