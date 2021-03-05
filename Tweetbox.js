import React, { useState } from "react";
import "./tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "harsh Rawat",
      username: "iHarshR",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://picsum.photos/200",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://picsum.photos/536/354"></Avatar>
          <input
            type="text"
            placeholder="What's Hapenning?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Optional : Enter Image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
