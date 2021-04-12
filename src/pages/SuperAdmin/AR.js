import React, {useRef} from "react";
import { Grid, Typography } from "@material-ui/core";
import { TextField, InputBase, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Widget from "../../components/Widget/Widget";
const useStyles = makeStyles((theme) => ({
    
}));
export default function AR() {
  var classes = useStyles()

  return(
    <Typography variant="h5" weight="bold">SCHOOLHUB AR</Typography>
  )
}