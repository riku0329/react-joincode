import React, {useState} from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { LIGHT_ASH, OFF_WHITE } from "./utils/constans";
import LightTheme from "./components/themes/light"
import DarkTheme from "./components/themes/dark"

const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.BASE1};
    box-sizing: border-box;
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.PRIMARY_TEXT};
    font-family: 'Kaushan Script'
  }
`;


function App() {
  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
      setTheme(theme => theme.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Home />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
