import React, { useState } from "react";
import classes from "./input.module.css";

const Input = ({ avatar, placeholder, searchDiscussions }) => {

  const [inputValue, setInputValue] = useState();


  return (
    <div className={classes.container}>
      <img src={avatar} className={classes.avatar} />
      <input
        value={inputValue}
        onChange={e => searchDiscussions && searchDiscussions(e.target.value)}
        className={classes.input}
        type="text"
        placeholder={placeholder} />
    </div>
  );
};

export default React.memo(Input);
