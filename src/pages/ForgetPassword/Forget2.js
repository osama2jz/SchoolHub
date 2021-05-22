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
        float:'right',
        marginLeft:'5px'
    },
    confirm:{
        float:'right',
        marginLeft:'5px',
        backgroundColor:'#43425d',
        color:'white'
    }
}))


export default function Forget1(props) {
    var [pass, setpass] = React.useState("");
    var [confirmpass, setconfirmpass] = React.useState("");
    var classes = useStyles();
    return (
        <div className={classes.main}>
            <Header history={props.history}/>
            <div>
            <Widget title="Enter New Password" disableWidgetMenu>
                <hr/>
                <Typography className={classes.typography}>Please enter new password below.</Typography>
                
                <TextField
                    id="email"
                    className={classes.email}
                    onChange={e => setpass(e.target.value)}
                    value={pass}
                    placeholder="Enter New Password"
                    type="password"
                />
                <br/>
                <TextField
                    id="email"
                    className={classes.email}
                    onChange={e => setconfirmpass(e.target.value)}
                    value={confirmpass}
                    placeholder="Confirm New Password"
                    type="password"
                />
                <br/>
                <br/>
                <Button
                    className={classes.cancel}
                     onClick={() =>toLogin(props.history)}
                    variant="contained"
                >
                    Cancel
                </Button>
                <Button
                    className={classes.confirm}
                    onClick={() =>toLogin(props.history)}
                    disabled={
                        (pass.length===0) || (pass != confirmpass)
                    }
                    
                    variant="contained"
                >
                    Confirm
                </Button>
                
                
            </Widget>
            </div>
        </div>
    )
}