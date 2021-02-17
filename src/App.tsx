import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import SimpleListTable from './components/HomeList';
import SimpleListsHeader from './components/Header';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
			<CssBaseline />
      <Box component="div" m={1} className="App">
        <SimpleListsHeader className="App-header" darkState={darkState} handleThemeChange={handleThemeChange} />
        <Box component="div" m={1} className="App-content">
          <SimpleListTable name="Jarvis" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
