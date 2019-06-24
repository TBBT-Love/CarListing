import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={"footer"}>
      <hr className={"footer-line-color"} />© {date} AUTOMOBILES Group
    </footer>
  );
};

export default Footer;
