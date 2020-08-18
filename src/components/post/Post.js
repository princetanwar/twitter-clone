import React from "react";
import "./post.css";
import { Avatar, Button } from "@material-ui/core";
import { ChatBubbleOutline } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post_headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="this tweet image" />
        <div className="post__footer">
          <ChatBubbleOutline />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
