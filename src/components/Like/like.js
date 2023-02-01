import React from "react";
import colors from "../../utils/colors";
import classes from "./like.module.css";

const Like = ({ liked, count, onClick }) => {

  return (
    <div
      onClick={onClick}
      className={classes.container}
      style={{
        backgroundColor: liked ? colors.blue : colors.gray2,
      }}
    >
      <svg viewBox="0 0 30 30"
        className={classes.like}>
        <path
          d="M11 2L10.498047 5.4902344L8.1328125 9.8945312C7.4358125 11.191531 6.082375 12 4.609375 12L4 12L4 25L6 25C7.281 26.281 9.017125 27 10.828125 27L21 27 A 2 2 0 0 0 23 25L23 23.945312 A 2.5 2.5 0 0 0 25 21.5 A 2.5 2.5 0 0 0 24.367188 19.841797 A 2.5 2.5 0 0 0 26 17.5 A 2.5 2.5 0 0 0 24.996094 15.5 A 2.5 2.5 0 0 0 26 13.5 A 2.5 2.5 0 0 0 23.5 11L14 11C14 11 15 7.734 15 7C15 4.749 15 2 12 2L11 2 z"
          fill={liked ? '#FFF' : 'gray'}
        />
      </svg>
      <small
        className={classes.count}
        style={{ color: liked ? "white" : "Black" }}>
        {count}
      </small>
    </div >
  );
};

export default Like;
