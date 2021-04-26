import React, { useState } from "react";
import { Typography, Button, Grid, InputBase } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { BarChart, Bar, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis, } from "recharts";

// components
import Widget from "../../components/Widget/Widget";
import ApexLineChart from "./components/ApexLineChart";
import ApexHeatmap from "./components/ApexHeatmap";
import PageTitle from "../../components/PageTitle/PageTitle";

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: '15%',
  },
  Button: {
    color: "white",
    fontSize: '15px',
    marginLeft: '5px',
    backgroundColor: "#43425d",
    padding: '2px 10px 2px 10px',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  addschool: {
    width: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "8px",
    marginLeft: '6px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  input: {
    border: '1px solid rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '500px',
  },
  dp: {
    width: '190px',
    height: '190px'
  },
  remove: {
    textDecoration: 'underline',
    paddingLeft: '10px',
    backgroundColor: 'white',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedschools: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  }
}))
const ratingsdata = [
  { name: "Pak turk international school", Ratings: 5 },
  { name: "Roots school and college", Ratings: 4 },
  { name: "Allied schools system", Ratings: 2},
  { name: "Army public school", Ratings: 5},
];

const datafee = [
  { name: "Pak turk international school", primary: 5000, middle: 10000, higher: 12000 },
  { name: "Roots school and college", primary: 3000, middle: 7000, higher: 10000 },
  { name: "Allied schools system", primary: 8000, middle: 10000, higher: 11000 },
];
export default function Charts(props) {
  var theme = useTheme();
  var classes = useStyles();
  const [getschools, setschool] = React.useState(['Pak turk international school',
    'Roots international school',
    'Some international school'])
  // local
  var [activeIndex, setActiveIndexId] = useState(0);
  const remove = (index) => {
    console.log(index)
    const newe = getschools.filter((item) => item !== index);
    setschool(newe)
  }

  return (
    <>
      <Grid>
        <Widget disableWidgetMenu>
          <Typography >Comparing Schools makes it easier to choose a school. Add schools below to
         compare them using multiple factors.</Typography>
          <div className={classes.search}>
            <InputBase className={classes.input} placeholder='Search school'></InputBase>
            <Button className={classes.Button}>Compare</Button>
          </div>
          <div className={classes.selectedschools}>
            {getschools.map(function (index) {
              return (
                <div className={classes.addschool}>
                  <Typography>{getschools.indexOf(index) + 1}. {index}</Typography>
                  <Typography className={classes.remove} onClick={() => remove(index)}>remove</Typography>
                </div>
              )
            })}
          </div>

        </Widget>
      </Grid>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Ratings Comparision" noBodyPadding upperTitle disableWidgetMenu>
            <ResponsiveContainer width="100%" height={350} >
              <BarChart width={730} height={250} data={ratingsdata}>

                <XAxis dataKey="name" />
                <YAxis domain={[0,5]} label={{ value: 'Average Ratings', angle: -90 }}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Ratings" fill="#43425d" />
              </BarChart>

            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Fee Comparision" noBodyPadding upperTitle disableWidgetMenu>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={400}
                data={datafee}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  />
                
                <YAxis label={{ value: 'FEE(PKR)', angle: -90, position: 'insideLeft' }} />/>
                <Tooltip />
                <Legend />
                <Bar dataKey="primary" fill="#8884d8" />
                <Bar dataKey="middle" fill="#6884d8" />
                <Bar dataKey="higher" fill="#43445d" />
              </BarChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// ################################################################
