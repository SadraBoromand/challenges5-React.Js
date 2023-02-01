import React from "react";
import classes from './header.module.css';

const Header = ({ children }) => {
  console.log("Well, you check here, it shows that you are a professional like me and looking for bugs");

  return <div className={classes.container}>{children}</div>;
};

export default React.memo(Header);
