import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { checkUserSession } from "./redux/user/user.actions";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Top from "./pages/Top";

import LightTheme from "./components/themes/light";
import DarkTheme from "./components/themes/dark";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.BASE1};
    box-sizing: border-box;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: ${p => p.theme.PRIMARY_TEXT};
    font-family: 'Kaushan Script'
  }
`;

function App({ checkUserSession }) {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    checkUserSession();
  });

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(theme => (theme.id === "light" ? DarkTheme : LightTheme));
        }
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/top" component={Top} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(null, mapDispatchToProps)(App);
