import React, {useRef} from "react";
import { Grid, Typography } from "@material-ui/core";
import { TextField, InputBase, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Error from '@material-ui/icons/Error';
import Header from '../../components/Header/Header'
import SendIcon from '@material-ui/icons/Send';
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'
import ReactHlsPlayer from 'react-hls-player'
// styles


// components
import PageTitle from "../../components/PageTitle/PageTitle";
import PhotoIcon from '@material-ui/icons/Photo';
import Widget from "../../components/Widget/Widget";
import { PhotoSizeSelectActual } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    nameanddate:{
        display:'flex',
        flexDirection:'column'
    },
    profile1:{
        margin:'auto',
        width:'99   %',
        backgroundColor:'#F7F7F7',
        borderRadius:'6px',
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        marginTop:"5px",
      },
      time:{
        fontSize:'12px',
    },
    video:{
      position: "absolute",
      width: "730px",
      height: "400px",
      border: "none"
    },
    
    comment:{
        padding:'5px',
        width:"98%"
    },
    name:{
      
      '&:hover':{
          cursor:'pointer',
          color:'#767575'
      }
    },
    commButton:{
        width:'25px',
        height:'25px',
        marginTop:'7px'
      },
    commentbox:{
        display:"flex",
        flexDirection:'row',
        borderBottom:'1px solid rgba(0,0,0, 0.2)',
        borderTop:'1px solid rgba(0,0,0, 0.2)',
      },
      profile:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        borderBottom:'1px solid rgba(0,0,0, 0.3)',
        paddingBottom:"5px",
        marginBottom:'5px',
    
      },
      comments:{
        height:'500px',
        display:"flex",
        flexDirection:'column',
        justifyContent:'flex-End'
      },
      no:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        margin:'auto',
        height:'75vh',
        textAlign:'center',
        width:'70%',
        color:'rgba(0,0,0, 0.5)'
      },
      error:{
          margin:'auto',
        width:'200px',
        height:'200px'
      },
  }))
  
const comment=[
  {id:'1', name: 'Ali Khan', content:'Nice pic dear.' },
  {id:'2',name: 'John Snow', content:'Congratulation on your shadi.' },
  {id:'3',name: 'Another Name', content:'Brother asked a very good questions.' }
]
const detail={name:'School-Hub', time:'20 mins ago'}
var stream=1
export default function Live(props) {
  var classes = useStyles();

  return (
    <>
    <Header history={props.history}/>
    <br/><br/>
    <script src="https://dist.bambuser.net/player/lib/bambuser-video-iframeapi/latest/bambuser-video-iframeapi.min.js"></script>
    {stream==0?<div className={classes.no}><Typography  variant='h2'>There is no stream available at the moment.</Typography> <Error className={classes.error}/></div>:
      <Grid container spacing={2}>
        <Grid item md={8}>
            <Widget disableWidgetMenu>
            <div className={classes.profile}>
                <AccountCircleIcon style={{fontSize:'50'}}/>
                <div className={classes.nameanddate}>
                <text className={classes.name}><b>{detail.name}</b> is live now.</text>
                <text className={classes.time}>{detail.time}</text>
                </div>
            </div>
            {/* <ReactPlayer
                url="https://dist.bambuser.net/player/?resourceUri=https://cdn.bambuser.net/broadcasts/369859f4-ab16-4bcd-baaa-e8aa0085b3b3?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1621681131&da_static=1&da_ttl=0&da_signature=b5580d87e188506c23f406d6323b7a794b4a1f75ae01176a8ab4d71ec76b206f"
                autoplay={true}
                controls={true}
                width={730}
                height={400}
            /> */}
            <iframe
               className={classes.video}
               src="https://dist.bambuser.net/player/?resourceUri=https://cdn.bambuser.net/broadcasts/369859f4-ab16-4bcd-baaa-e8aa0085b3b3?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1621683969&da_static=1&da_ttl=0&da_signature=8faf4be2307cca108ae40a24f0bf5d23f4647c6db6866035bc392ab75f37d8eehttps://cdn.bambuser.net/broadcasts/0b9860dd-359a-67c4-51d9-d87402770319?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1482921565&da_static=1&da_ttl=0&da_signature=cacf92c6737bb60beb1ee1320ad85c0ae48b91f9c1fbcb3032f54d5cfedc7afe"
               allowfullscreen></iframe>
             </Widget>
        </Grid>
        <Grid item md={4}>
            <Widget title='Comments' disableWidgetMenu>
            <div className={classes.comments}>
                              <div>
                                  {comment.map(function (item) {
                                      return (
                                          <div className={classes.profile1}>
                                              <AccountCircleIcon style={{ fontSize: '40' }} />
                                              <div className={classes.nameanddate}>
                                                  <text className={classes.name}><b>{item.name}</b></text>
                                                  <text className={classes.time}>{item.content}</text>
                                              </div>
                                          </div>
                                      )
                                  })}
                              </div>
            <div class={classes.commentbox}>
            <InputBase className={classes.comment} placeholder='Leave a comment'></InputBase>
            <SendIcon class={classes.commButton} />
            </div>
            </div>
            </Widget>
        </Grid>
      </Grid>}
    </>
  );
}
