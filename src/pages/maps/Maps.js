import React,{ Fragment } from "react";
import { Grid } from "@material-ui/core";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../../logo.png'
import { TextField, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Widget from "../../components/Widget/Widget";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useStyles from "./styles";

const customMarker = new L.icon({
  iconUrl: require("../../marker.png"),
  iconSize: [25, 25],
  iconAnchor: [0, 0],
}); 
const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
      <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position} icon={customMarker} >
    <Popup>{content}</Popup>
  </Marker>
)
const markers = [
  { key: 'marker1', position: [33.647895, 73.028724], content: 'My first popup' },
  { key: 'marker2', position: [33.6879129, 73.0314367], content: 'My second popup' },
  { key: 'marker3', position: [33.652868, 73.157333], content: 'My third popup' },
  { key: 'marker3', position: [29.9248291, 70.945715], content: 'My third popup' },
  { key: 'marker3', position: [30.857321, 69.240635], content: 'My third popup' },
]
const Schools=[
  {id:'1', name: 'Army Public School, Islamabad', location:'I-8 markaz, Islamabad' },
  {id:'2',name: 'Pak Turk International School, Islamabad', location:'Taramri chowk, Islamabad' },
  {id:'3',name: 'Grafton School, Islamabad', location:'Taramri chowk, Islamabad' }
]
 

export default function Maps() {
  var classes = useStyles();
  const position = [30.3753, 69.3451]
  return(
      <div>
          <Grid container spacing={1}>
            <Grid item md={3}>
              <Widget title="Search School Here" disableWidgetMenu>
              <div className={classes.searchfield}>
                <InputBase  placeholder='Search here...'></InputBase>
                <SearchIcon fontSize='large' className='icon'/>
              </div>
              
              <div >
                {Schools.map(function(item){return (
                <div class={classes.result}>
                  <text>{item.name}</text>
                   <br/> 
                  <text style={{fontSize:'10px'}}>{item.location}</text>
                </div>
                   )})}
              </div>
              </Widget>
            </Grid>

            <Grid item md={9}>
            <Widget disableWidgetMenu>
              <MapContainer center={position}
                  zoom={6}
                  className={classes.mapContainer}
                  >
                <TileLayer 
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={markers} />
                {/* <Marker position={position}>
                  <Popup>
                    You are here
                  </Popup>
                </Marker> */}
              </MapContainer>
              </Widget>
            </Grid>
      </Grid>
      </div>
      
  );
}
