import React from "react";
import { CometChat } from "@cometchat-pro/chat";
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
//import Chat from '../pages/Chat/chat.js'
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
import Forget from '../pages/ForgetPassword/Forget1'
import Forget2 from '../pages/ForgetPassword/Forget2'
import LiveStream from '../pages/Live/live'
import Dashboard from '../pages/SuperAdmin/Dashboard'
export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  const appID = "3372201956af684";
  const region = "us";
  const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
  const authKey = "6686381f7d6999ea04c5eb3feea375ae7d205b0f";
const uid = "60aaa9dc83239218338ab022";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);  
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
        <Route exact path="/app/liveStream" component={LiveStream} />
        <Route exact path="/app/forget" component={Forget} />
        <Route exact path="/app/forget2" component={Forget2} />
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
