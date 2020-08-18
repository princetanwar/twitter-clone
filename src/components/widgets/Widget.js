import React from "react";
import "./widget.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Tweet" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"933354946111705097"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imprincetanwar"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://reactjs.org"}
          options={{ text: "#reactjs is awesome", via: "imprincetanwar" }}
        />
      </div>
    </div>
  );
};

export default Widget;
