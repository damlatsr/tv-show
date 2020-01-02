import React from "react";
import { Container, Row } from "react-bootstrap";


const Loading = () => {
  return React.createElement(
    Container,
    {
      className: "loading"
    },
    React.createElement(
      Row,
      {
        className: "spinner-grow",
        role: "status"
      },
      React.createElement(
        "span",
        {
          className: "sr-only"
        },
        "Loading..."
      )
    )
  );
};


export default Loading;
