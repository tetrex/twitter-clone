import React from "react";
import "./widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__serchIcon" />
        <input type="text" placeholder=" Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Hapening</h2>
        <TwitterTweetEmbed tweetId={"1367272378766614529"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BarackObama"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://twitter.com/BarackObama"
          options={{ text: "#react is awesome", via: "BarackObama" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
