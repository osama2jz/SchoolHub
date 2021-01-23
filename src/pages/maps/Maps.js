import React,{ Fragment } from "react";
import { Grid } from "@material-ui/core";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { TextField, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Widget from "../../components/Widget/Widget";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useStyles from "./styles";

const customMarker = new L.icon({
  iconUrl: '/images/poemEditorTools/location-pointer-new.svg',
  iconSize: [56, 72],
  iconAnchor: [26, 72],
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
  { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
  { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
  { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
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
              </Widget>
            </Grid>

            <Grid item md={9}>
            <Widget disableWidgetMenu>
              <MapContainer center={position}
                  zoom={5}
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
