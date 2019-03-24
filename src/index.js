import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

import "./styles.css";

var Something = () => {
  return (
    <Nav>
      <NavItem url="/Home">Home</NavItem>
      <NavItem url="/About">About</NavItem>
      <NavItem url="/Contact">Contact</NavItem>
    </Nav>
  );
};
var NavItem = ({ url }) => {
  return <div>{url}</div>;
};

var Nav = ({ children }) => {
  let items = React.Children.toArray(children);
  let array = new Array();

  for (let a = 0; a < items.length; a++) {
    array.push(items[a]);
    array.push(<div>|</div>);
  }
  return <div> {array}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Something />, rootElement);
