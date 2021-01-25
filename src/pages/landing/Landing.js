import React,{ Fragment } from "react";
import { Grid } from "@material-ui/core";
import Popup from 'reactjs-popup';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import FilterListIcon from '@material-ui/icons/FilterList';
import marker from '../../logo.png'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Widget from "../../components/Widget/Widget";
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import useStyles from "./styles";
import Header from "../../components/Header"
import Slider from "./Slider"



export default function Landing() {
  
  var classes = useStyles();
  return(
      <div>
        <Header/>
        <Slider/>
        
         <text>hi</text>
      </div>
      
  );
}
