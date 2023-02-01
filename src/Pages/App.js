import React, { useState } from "react";

import classes from "./App.css";
import discussions from '../data/Discussions';
import Header from '../components/Header/header'
import Input from '../components/Input/input'
import Comment from '../components/Comment/comment'


function App() {

  const [data, setData] = useState(discussions);

  const searchDiscussions = (event) => {
    const filterd = discussions.filter(s => s.user.name.toLowerCase().includes(event));
    setData(filterd);
  }

  if (!data) {
    return <div className={classes.loading}>
      <p style={{ alignSelf: 'center' }}>Loading...</p>
    </div>
  }

  return (
    <div className={classes.container}>
      <Header>
        <Input
          avatar={discussions[0].user.avatar}
          placeholder="Start a discussions"
          searchDiscussions={searchDiscussions}
        />
      </Header>

      {data.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          createDate={comment.date}
          iLikedIt={comment.iLikedIt}
          likes={comment.likes}
          text={comment.text}
          replies={comment.replies}
        />
      ))}
    </div>
  );
}

export default App;
