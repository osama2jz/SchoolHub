import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles(theme => ({
  logotype: {
    color: "#F5F5F5",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      display: "none",
      
    },
    '&:hover':{
      cursor:'pointer'
    }
  },
  signin:{
    float:'right'
  },
  appBar: {
    backgroundColor:'#43425d',
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logoo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent:'space-between'
  },
  
}));
