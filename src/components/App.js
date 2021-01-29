import React from "react";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";
import Signin from '../pages/profiling/signin/signinNew'
import Landing from './../pages/landing/Landing'

// context
import { useUserState } from "../context/UserContext";
import Home from "../pages/home/Home";


export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (  
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <Route exact path="/" render={() => <Redirect to="/app/home" />} /> */}
        {/* <Route exact path="/app" render={() => <Redirect to="/app/home" />}/> */}
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
  
  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
