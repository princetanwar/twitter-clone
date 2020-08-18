import React from "react";
import "./tweetBox.css";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1295326802504605696/nZPETuvA_400x400.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetBox__icons">
          <WallpaperIcon className="tweetbox__image" />
          <Button className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
