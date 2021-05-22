import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  Link
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Logo from './logo.jpg'
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
// styles
import useStyles from "./styles";

// logo
import logo from "../../logo.png";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser, admin, forget } from "../../context/UserContext";
import Widget from "../../components/Widget/Widget";
function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("admin@flatlogic.com");
  var [phoneValue, setphoneValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("password");

  return (
    <div style={{backgroundImage:`url(${Logo})`}}>
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        {/* <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography  className={classes.logotypeText}>School-Hub</Typography>
        <Typography variant="h6" >
                Finding the right school just got easier
        </Typography> */}
      </div>

      <div className={classes.formContainer}>
      <Widget disableWidgetMenu>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            classes={{indicator: classes.indicator, root:classes.tabs}}
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h6" className={classes.greeting}>
                Already Registered?
              </Typography>
              <Typography variant="h2" className={classes.greeting}>
                Login Here!
              </Typography>
              
              
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}></Typography>
                <div className={classes.formDivider} />
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <text class={classes.signin}>Sign in as:</text>
                <RadioGroup class={classes.radio}  >
                  <FormControlLabel value="Admin" control={<Radio color='inherit'/>} label="Admin" />
                  <FormControlLabel value="Teacher" control={<Radio color='inherit'/>} label="Teacher" />
                  <FormControlLabel value="Student" control={<Radio color='inherit'/>} label="Student" />
                  <FormControlLabel value="Parent" control={<Radio color='inherit'/>} label="Parent" />
                </RadioGroup>
              
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              
                  <Button
                  onClick={() =>
                    loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError,
                    )
                  }
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Login
                  </Button>
                
                <Button
                onClick={() =>forget(props.history)}
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              
              <Link onClick={()=>admin( props.history)}>hi</Link>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h6" className={classes.greeting}>
                New to SchoolHub?
              </Typography>
              <Typography variant="h2" className={classes.greeting}>
                Register Here!
              </Typography>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}></Typography>
                <div className={classes.formDivider} />
              </div>
              
              <text class={classes.signin}>Sign up as:</text>
                <RadioGroup class={classes.radio}  >
                  <FormControlLabel value="Admin" control={<Radio color='inherit'/>} label="Admin" />
                  <FormControlLabel value="Teacher" control={<Radio color='inherit'/>} label="Teacher" />
                  <FormControlLabel value="Student" control={<Radio color='inherit'/>} label="Student" />
                  <FormControlLabel value="Parent" control={<Radio color='inherit'/>} label="Parent" />
                </RadioGroup>

              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="phone"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={phoneValue}
                onChange={e => setphoneValue(e.target.value)}
                margin="normal"
                placeholder="Phone number"
                type="number"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                   
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              
            </React.Fragment>
          )}
        </div>
        </Widget>
      </div>
      
    </Grid>
    </div>
  );
}

export default withRouter(Login);
