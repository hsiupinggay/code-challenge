import { createTheme } from '@mui/material/styles';


const mainTheme = createTheme(
 {
  palette:{
   primary: {
     main: '#193B4D',
  },
  background: {
    paper: '#E2FCA4',
    },
  text: {
    primary: '#193B4D',
    },
  error: {
    main: '#800000',
    },
          },
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: '2rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      h2: {
        fontSize: '1.5rem',
        letterSpacing: '0.00857em',
        fontWeight: 600,
      },}
    }
);


export default mainTheme;
