import React, { useState } from "react";
import Widget from "../../components/Widget/Widget";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from "./Header/Header"
import {
    Button,
    TextField,
    Typography,
} from "@material-ui/core";
import { toLogin } from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    },
    cot:{
        display:'flex',
        textAlign:'center',
        width:'400px',
        marginBottom:'10px'   
    },
    email:{
        width:'270px',
        marginRight:'10px'
    },
    
    typography:{
        marginBottom:'10px'
    },
    cancel:{
        marginLeft:'5px'
    },
    confirm:{
        marginLeft:'5px',
        backgroundColor:'#43425d',
        color:'white'
    }
}))


export default function Forget1(props) {
    var [email, setemail] = React.useState("");
    var [code, setcode] = React.useState("");
    var classes = useStyles();
    return (
        <div className={classes.main}>
            <Header history={props.history}/>
            <div>
            <Widget title="Forget Password" disableWidgetMenu>
                <hr/>
                <Typography className={classes.typography}>Please enter your email address to recover password.</Typography>
                <div className={classes.cot}>
                <TextField
                    id="email"
                    className={classes.email}
                    onChange={e => setemail(e.target.value)}
                    value={email}
                    placeholder="Email Adress"
                    type="email"
                />
                <Button
                    className={classes.confirm}
                    disabled={
                        email.length === 0
                    }
                    variant="contained"
                >
                    Get Code
                </Button>
                </div>
                <TextField
                    id="code"
                    InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                    }}  
                    onChange={e => setcode(e.target.value)}
                    value={code}
                    placeholder="Enter code"
                />
               
                <Button
                    className={classes.confirm}
                    disabled={
                        code.length === 0
                    }
                    onClick={() =>props.history.push("/app/forget2")}
                    variant="contained"
                >
                    Confirm
                </Button>
                <Button
                    className={classes.cancel}
                     onClick={() =>toLogin(props.history)}
                    variant="contained"
                >
                    Cancel
                </Button>
                
            </Widget>
            </div>
        </div>
    )
}