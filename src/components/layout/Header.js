import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <header style={headerStyle}>
      <LinkStyle to="/">Home</LinkStyle> |{" "}
      <LinkStyle to="/About">About</LinkStyle>
      <h1 style={titleStyle}>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px"
};

const titleStyle = {
  textAlign: "center",
  paddingBottom: "20px"
};

const LinkStyle = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: light;

  &:hover {
    text-decoration: underline;
    color: #e0e0e0;
  }
}`;

export default Header;
