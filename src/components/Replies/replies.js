import React from "react";
import Comment from "../Comment/comment";
// import classes from './replies.module.css';

const Replies = ({ replies }) => {

  return (
    <div>
      {replies.map(reply => (
        <Comment
          key={reply.id}
          user={reply.user}
          createDate={reply.date}
          iLikedIt={reply.iLikedIt}
          likes={reply.likes}
          text={reply.text}
          isReply={true}
        />
      ))}
    </div>
  );
};

export default React.memo(Replies);
