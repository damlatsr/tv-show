import React from "react";
import SearchBox from "../containers/SearchBox";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

const SearchPage = () =>
  React.createElement(
    Container,
    null,
    React.createElement(Navbar, null),
    React.createElement(SearchBox, null)
  );

export default SearchPage;
