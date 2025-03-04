import React from "react";
import Main from "./Components/Main";
import { ThemeProvider } from "./Context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
