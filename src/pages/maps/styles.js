import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  mapContainer: {
    height: "75vh",
    width:'113vh',
  },
  searchfield:{
    display:'flex',
    flexDirection:'row',
    borderBottom:'1px solid black'
  },
  result:{
    borderBottom:'1px solid rgba(0,0,0, 0.3)',
    marginTop:'5px',
    '&:hover':{
      backgroundColor:'#F7F7F7',
      cursor:'default',
      borderRadius:'3px'
    }
  },
}));