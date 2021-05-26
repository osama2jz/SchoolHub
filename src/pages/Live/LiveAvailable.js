import React, { useState } from "react";
import { InputAdornment, TextareaAutosize, Grid, Typography, Button, Tabs, Tab, TextField, Checkbox, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import Live from './live'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AccountCircle, Delete, Cancel, CheckCircle, PlayArrow } from '@material-ui/icons'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// context
import Widget from "../../components/Widget/Widget";
const useStyles = makeStyles((theme) => ({
    main: {
        
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px'
    },
    indicator: {
        backgroundColor: '#43425d',
        height: '3px'
    },
    tick: {

        fill: 'green',
        "&:hover": {
            fill: '#9F9F9F',
            cursor: 'pointer'
        }
    },
    cross: {
        fill: 'red',
        "&:hover": {
            fill: '#9F9F9F',
            cursor: 'pointer'
        }
    },
}))
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        backgroundColor: '#C5C5C5'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
function CreateData(id, school, event, date, start, end, status) {
    return { id, school, event, date, start, end, status };
}

const rows = [
    CreateData(1, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Pending'),
    CreateData(2, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Completed'),
    CreateData(3, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Rejected'),
    CreateData(4, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Completed'),
    CreateData(5, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Completed'),
    CreateData(6, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Completed'),
    CreateData(7, 'PakTurk International School', 'Seminar', '10-3-2020', '14:00', '15:00', 'Completed'),
];


function LiveAvailable(props) {

    var classes = useStyles();
    var [activeTabId, setActiveTabId] = useState(0);
    return (
        <div className={classes.main}>

            <div >
                <TableContainer style={{ marginBottom: '20vh' }} component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead >
                            <TableRow>
                                <StyledTableCell style={{ width: '15px', backgroundColor: '#C5C5C5' }}>ID</StyledTableCell>
                                <StyledTableCell align="center">School Name</StyledTableCell>
                                <StyledTableCell align="center">Event Name</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Starting Time</StyledTableCell>
                                <StyledTableCell align="center">Ending time</StyledTableCell>
                                <StyledTableCell align="center">View</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.description}>
                                    <StyledTableCell style={{ width: '15px', backgroundColor: '#C5C5C5' }}>{row.id} </StyledTableCell>
                                    <StyledTableCell align="center">{row.school}</StyledTableCell>
                                    <StyledTableCell align="center">{row.event}</StyledTableCell>
                                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                                    <StyledTableCell align="center">{row.start}</StyledTableCell>
                                    <StyledTableCell align="center">{row.end}</StyledTableCell>
                                    <StyledTableCell align="center"><PlayArrow fontSize="large" onClick={()=> props.history.push("/app/liveStream")}/> </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default withRouter(LiveAvailable);
