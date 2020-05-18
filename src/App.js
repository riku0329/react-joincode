import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.actions";
import {
  selectCurrentUser,
  selectIsUserLoding,
} from "./redux/user/user.selectors";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Top from "./pages/Top";
import User from "./pages/User";

import LightTheme from "./components/themes/light";
import DarkTheme from "./components/themes/dark";
import { Spinner } from "./components/common";
import Service from "./pages/Service";
import UserServices from "./pages/UserServices";
import ServiceDetails from "./pages/ServiceDetails";
import SendOffer from "./pages/SentOffers";
import ReceivedOffer from "./pages/ReceivedOffers";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    @media (max-width: 768px){
      font-size: 50%;
    }
  }

  body{
    background: ${(p) => p.theme.BASE2};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: ${(p) => p.theme.PRIMARY_TEXT};
    font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ,
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8;
    text-size-adjust: 100%;
    }
    img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;

function App({ checkUserSession, isLoading, currentUser }) {
  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((theme) => (theme.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Route exact path="/" component={Home} />
              <Route path="/top" component={Top} />
              <Route
                exact
                path="/login"
                render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
              />
              <Route
                exact
                path="/register"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <Register />
                }
              />
              {currentUser ? (
                <Route exact path="/user" component={User} />
              ) : (
                <Redirect to="/login" />
              )}
              <Route path="/user/me" component={UserServices} />
              <Route exact path="/service" component={Service} />
              <Route path="/service/:serviceId" component={ServiceDetails} />
              <Route path="/offer/send" component={SendOffer} />
              <Route path="/offer/received" component={ReceivedOffer} />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserLoding,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
