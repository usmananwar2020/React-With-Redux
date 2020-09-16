import React from 'react';
import user from './User.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import FbAuth from './FbAuth';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 50,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  const { name, image, like, comment, favorite, download, share } = props;

  return (
    <div className="main-div">
      <Card className={classes.root} style={{ display: "center", 'margin-top': '1%' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
          />
          <img className='image' src={image}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <span className='spanName'> {name}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="discription">
          {/* <Button size="small" color="primary"> */}
          <ThumbUpOutlinedIcon />{like}<span> </span>
          {/* </Button> */}
          <ChatBubbleOutlineOutlinedIcon />{comment}<span> </span>
          <FavoriteBorderOutlinedIcon />{favorite}<span> </span>
          <GetAppOutlinedIcon />{download}<span> </span>
          <span className="share" >Share<div className="shareIcon"><FbAuth share={share} /></div></span><span> </span>
        </CardActions>
      </Card>
    </div>
  );
}
export default MediaCard;