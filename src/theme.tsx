import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
   typography:{
    fontFamily:'Mulish',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700, 
  }
});

export default theme;