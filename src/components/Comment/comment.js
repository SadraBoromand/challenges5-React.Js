import React, { useState } from "react";
import classes from './comment.module.css';
import colors from "../../utils/colors";

// components
import Like from "../Like/like";
import ReplyButton from "../Reply/replyButton";
import Image from "../Image/image";
import Replies from "../Replies/replies";
import Input from "../Input/input";
// end components

// time library
import TimeAgo from 'javascript-time-ago';
// for English.
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en);
// end time library


const Comment = ({ user, iLikedIt, createDate, text, likes, replies = [], isReply = false }) => {
  const { avatar, name } = user;

  const [isLiked, setIsLiked] = useState(iLikedIt);
  const [countLikes, setCountLikes] = useState(likes);

  // Create formatter (English).
  const timeAgo = new TimeAgo('en-US');
  const dateTime = timeAgo.format(createDate - 2 * 60 * 60 * 1000)
  // "2 hours ago"

  const changeLikeState = () => {
    const count = isLiked ? countLikes - 1 : countLikes + 1;
    setIsLiked(!isLiked);
    setCountLikes(count);
  }

  const ShowName = () => {
    // for when no avatar
    const fullName = name.split(" ");
    const shortName = fullName[0].substring(0, 1) + fullName[1].substring(0, 1);
    return shortName;
  };

  return (
    <div className={classes.container}
      style={!isReply ? { borderBottom: '1.5px solid #e2e9ee', } : null}>
      <div className={classes.content}>

        <Image avatar={avatar} alt={name} />

        <div className={classes.text}>
          <div>
            <span className={classes.name}>{name}</span>
            <small className={classes.date}>{dateTime}</small>
          </div>

          <div>
            <small>{text}</small>

            <div
              style={replies.length > 0 ? {
                borderLeft: `2px solid ${colors.gray2}`,
                paddingLeft: '30px',
                marginLeft: '-30px'
              } : null}>
              <div className={classes.buttons}>
                <Like onClick={changeLikeState} liked={isLiked} count={countLikes} />

                {!isReply ? (<ReplyButton />) : null}
              </div>
              <Replies replies={replies} />
              {!isReply && replies.length > 0 ? (<Input avatar={avatar} placeholder='Reply' />) : null}


            </div>


          </div>
        </div>


      </div>
    </div>
  );
};

export default Comment;
