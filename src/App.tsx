import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import { Box } from "@material-ui/core";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const name = "Jarvis";
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
        <Header
          className="App-header"
          darkState={darkState}
          handleThemeChange={handleThemeChange}
        />
        <Box
          component="div"
          m={1}
          className="App-content"
          style={{ margin: "8px auto" }}
        >
          <Box
            fontSize="h6.fontSize"
            m={1}
            className="title"
            style={{ margin: "0px auto" }}
            fontStyle="oblique"
          >
            {name}
          </Box>
          <HomeScreen name={name} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
