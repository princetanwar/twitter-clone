import React, { useState, useEffect } from "react";
import "./feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../config/firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection();
  }, []);
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetBox for add new tweets */}
      <TweetBox />

      {/* post */}
      <Post
        displayName="prince"
        username="imprince"
        verified={true}
        text="yooo its working"
        image="https://pbs.twimg.com/profile_images/1295326802504605696/nZPETuvA_400x400.jpg"
        avatar="https://pbs.twimg.com/profile_images/1295326802504605696/nZPETuvA_400x400.jpg"
      />
    </div>
  );
};

export default Feed;
