import React from "react";
import Dashboard from "./components/Layout/Dashboard";
import Nav from "./components/Layout/Nav";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
