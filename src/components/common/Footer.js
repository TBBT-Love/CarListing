import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <React.Fragment>
      <hr className={"footer"} />© {date} AUTO1 Group
    </React.Fragment>
  );
};

export default Footer;
