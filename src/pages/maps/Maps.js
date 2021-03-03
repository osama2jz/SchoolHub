import React, { Fragment } from "react";
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
import { TextField,Select, InputBase, MenuItem, DialogContent, Button, Dialog,DialogTitle,DialogActions } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Widget from "../../components/Widget/Widget";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
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
const Schools = [
  { id: '1', name: 'Army Public School, Islamabad', location: 'I-8 markaz, Islamabad' },
  { id: '2', name: 'Pak Turk International School, Islamabad', location: 'Taramri chowk, Islamabad' },
  { id: '3', name: 'Grafton School, Islamabad', location: 'Taramri chowk, Islamabad' }
]


export default function Maps() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [dist, setDist] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeD = (event) => {
    setDist(event.target.value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };
  var classes = useStyles();
  const position = [30.3753, 69.3451]
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item md={3}>
          <Widget title="Search School Here" disableWidgetMenu>
            <div className={classes.searchfield}>

              <InputBase placeholder='Search here...'></InputBase>
              <FilterListIcon class={classes.icon} onClick={handleClickOpen}/>
              <SearchIcon fontSize='large' class={classes.icon} />
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Filters</DialogTitle>
                <DialogContent>
                <div class={classes.eachF}>
                        <text style={{ fontWeight: 'bold' }}>Disatnce: </text>
                        <FormControl className={classes.formControl}>
                          <Select
                            value={dist}
                            onChange={handleChangeD}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={0.5}>500m</MenuItem>
                            <MenuItem value={1}>1km</MenuItem>
                            <MenuItem value={5}>5km</MenuItem>
                            <MenuItem value={10}>10km</MenuItem>
                            <MenuItem value={50}>50km</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div class={classes.eachF}>
                        <text style={{ fontWeight: 'bold' }}>Fee: </text>
                        <TextField placeholder="Min (PKR)" className={classes.feefield}/>
                        <TextField placeholder="Max (PKR)" className={classes.feefield}/>
                      </div>

                      <div class={classes.eachF}>
                        <text style={{ fontWeight: 'bold' }}>School type: </text>
                        <RadioGroup style={{ dispaly: 'flex', flexDirection: 'row' }} aria-label="type" name="type" value={value} onChange={handleChange}>
                          <FormControlLabel value="Co-Education" control={<Radio color='inherit'/>} label="Co-Education" />
                          <FormControlLabel value="Boys" control={<Radio color='inherit'/>} label="Boys" />
                          <FormControlLabel value="Girls" control={<Radio color='inherit'/>} label="Girls " />
                        </RadioGroup>
                      </div >
                      <div class={classes.eachF}>
                        <text style={{ fontWeight: 'bold' }}>Education level: </text>
                        <RadioGroup style={{ dispaly: 'flex', flexDirection: 'row' }} aria-label="educationlevel" name="educationlevel" value={value2} onChange={handleChange2}>
                          <FormControlLabel value="Primary" control={<Radio color='inherit'/>} label="Primary" />
                          <FormControlLabel value="Middle" control={<Radio color='inherit'/>} label="Middle" />
                          <FormControlLabel value="Higher" control={<Radio color='inherit'/>} label="Higher " />
                        </RadioGroup>
                      </div>
                      <div class={classes.eachF}>
                        <text style={{ fontWeight: 'bold' }}>Education type: </text>
                        <RadioGroup style={{ dispaly: 'flex', flexDirection: 'row' }} aria-label="educationtype" name="educationtype  " value={value3} onChange={handleChange3}>
                          <FormControlLabel value="Matric/Fsc" control={<Radio />} label="Matric/Fsc" />
                          <FormControlLabel value="IGCSE" control={<Radio />} label="IGCSE" />
                        </RadioGroup>
                      </div>
                      

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Reset
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
              
            </div>

            <div>
              {Schools.map(function (item) {
                return (
                  <div class={classes.result}>
                    <text>{item.name}</text>
                    <br />
                    <text style={{ fontSize: '10px' }}>{item.location}</text>
                  </div>
                )
              })}
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
