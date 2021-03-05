import React, { useState, useEffect } from "react";
import "./feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setpost] = useState([]);

  useEffect(() => {
    //runs code when feed is loaded
    db.collection("posts").onSnapshot((snapshot) =>
      setpost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/**Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/**TweetBox */}
      <Tweetbox />
      {/**Post */}

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      {/**Post */}
      {/**Post */}
      {/**Post */}
      {/**Post */}
      {/**Post */}
    </div>
  );
}

export default Feed;
