import React from "react";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Admin from '../pages/Admin/DashboardTabs/Edit info'
import Login from "../pages/login";
import Signin from '../pages/profiling/signin/signinNew'
import SchoolProfile from '../pages/Admin/SchoolView/SchoolProfile'
import SchoolFee from '../pages/Admin/SchoolView/SchoolFee'
import School from '../pages/Admin/SchoolView/School'
import Landing from './../pages/landing/Landing'
import AdminAdding from '../pages/Admin/AdminAdding'
import AdminDashboard from '../pages/Admin/AdminDashboard'
// context
import { useUserState } from "../context/UserContext";
import Live from '../pages/Admin/DashboardTabs/LiveStream' 
import Home from "../pages/home/Home";
import Schoolprofile from "../pages/Admin/SchoolView/SchoolFee";
import EditInfo from '../pages/Admin/DashboardTabs/Edit info'
import EditPhotos from '../pages/Admin/DashboardTabs/EditPhotos'
import EditFee from '../pages/Admin/DashboardTabs/EditFee'
import Faculty from '../pages/Admin/DashboardTabs/Faculty'
import Feedback from '../pages/Admin/DashboardTabs/Feedback'
import Profile from '../pages/UserProfile/UserProfile'
import SuperAdmin from './LayoutSuperAdmin'
import Dashboard from '../pages/SuperAdmin/Dashboard'
export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (  
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <Route exact path="/" render={() => <Redirect to="/app/home" />} /> */}
        {/* <Route exact path="/app" render={() => <Redirect to="/app/home" />}/> */}
        <Route exact path="/" component={Login } />
        <Route exact path="/general" component={EditInfo} />
        <Route exact path="/photos" component={EditPhotos} />
        <Route exact path="/fee" component={EditFee} />
        <Route exact path="/acad" component={EditInfo} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/requests" component={Faculty} />
        <Route exact path="/reviews" component={Feedback} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/admin" component={SuperAdmin} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        
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
