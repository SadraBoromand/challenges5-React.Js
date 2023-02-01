import React from "react";
import classes from './header.module.css';

const Header = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default React.memo(Header);
