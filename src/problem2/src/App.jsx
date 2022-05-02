import * as React from 'react';
import './App.css';
import FancyForm from './components/FancyForm';
import mainTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {

  return (
  <ThemeProvider theme={mainTheme}>
   <FancyForm />
   </ThemeProvider>
  );
}

export default App;
