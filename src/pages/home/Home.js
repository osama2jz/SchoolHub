import React from "react";
import { Grid } from "@material-ui/core";
import { TextField, InputBase } from "@material-ui/core";
import pic1 from './school1.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SendIcon from '@material-ui/icons/Send';

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import PhotoIcon from '@material-ui/icons/Photo';
import Widget from "../../components/Widget/Widget";

export default function Home() {
  var classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Widget title="What's on your mind?" disableWidgetMenu>
            <TextField className={classes.textfield} placeholder='Post here...'></TextField>
            <div className={classes.postbottom}>
                <div className={classes.postbottomL}>
                <PhotoIcon fontSize='large' className='icon'/>
                <text>Upload photo</text>
                </div>
                <text className={classes.postButton}>Post</text>
            </div>
          </Widget>
        </Grid>
        <Post/>
        <Post/>
        <Post/>
      </Grid>
    </>
  );
}
function Post(){
  var classes = useStyles();
  return(
    <Grid item md={8}>
          <Widget disableWidgetMenu>

          <div className={classes.postmain} >
          <div className={classes.post}>
            <div className={classes.profile}>
                <AccountCircleIcon style={{fontSize:'50'}}/>
                <div className={classes.nameanddate}>
                <text className={classes.name}>Muhammad Usama</text>
                <text className={classes.time}>2 hours ago</text>
                </div>
            </div>
            <div className={classes.posttext}>
            <text >Hello this is some text, Hello this is some text.</text>
            </div>
              <img className={classes.pic} src={pic1} />
            </div>
            <div class={classes.likeComm}>
              <div class={classes.like} ><ThumbUpAltIcon fontSize='medium'/><text style={{fontSize:'16px'}}>Like</text></div>
              <div class={classes.comm}><CommentIcon fontSize='medium' /><text style={{fontSize:'16px'}}>Comment</text></div>
            </div>
            <div class={classes.commentbox}>
            <InputBase className={classes.comment} placeholder='Leave a comment'></InputBase>
            <SendIcon class={classes.commButton} />
            </div>
            
          </div>
          
          </Widget>
        </Grid>
  )
}