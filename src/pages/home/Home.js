import React, {useRef} from "react";
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

const comment=[
  {id:'1', name: 'Ali Khan', content:'Nice pic dear.' },
  {id:'2',name: 'John Snow', content:'Congratulation on your shadi.' },
  {id:'3',name: 'Another Name', content:'Brother asked a very good questions.' }
]
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
  
  const searchInput = useRef(null)
  function handleFocus(){
    searchInput.current.focus()
  }

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
              <div onClick={handleFocus} class={classes.comm}><CommentIcon fontSize='medium' /><text style={{fontSize:'16px'}}>Comment</text></div>
            </div>
            <div class={classes.commentbox}>
            <InputBase className={classes.comment} inputRef={searchInput} placeholder='Leave a comment'></InputBase>
            <SendIcon class={classes.commButton} />
            </div>
            <div>
              {comment.map(function(item){return(
                <div className={classes.profile1}>
                <AccountCircleIcon style={{fontSize:'40'}}/>
                <div className={classes.nameanddate}>
                <text className={classes.name}>{item.name}</text>
                <text className={classes.time}>{item.content}</text>
                </div>
                </div>
              )})}
            </div>
          </div>
          
          </Widget>
        </Grid>
  )
}