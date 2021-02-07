import React from "react";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Admin from '../pages/Admin/Admin'
import Login from "../pages/login";
import Signin from '../pages/profiling/signin/signinNew'
import SchoolProfile from '../pages/Admin/SchoolView/SchoolProfile'
import SchoolFee from '../pages/Admin/SchoolView/SchoolFee'
import School from '../pages/Admin/SchoolView/School'
import Landing from './../pages/landing/Landing'
import AdminAdding from '../pages/Admin/AdminAdding'

// context
import { useUserState } from "../context/UserContext";
import Home from "../pages/home/Home";
import Schoolprofile from "../pages/Admin/SchoolView/SchoolFee";


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
        <Route exact path="/admin" component={School} />
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
