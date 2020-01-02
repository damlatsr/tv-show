import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

//Anasayfa

class ShowBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    this.props.history.push(`/show/${this.props.show.id}`);
  }

  render() {
    return React.createElement(
      Card,
      {
        border: "light"
      },
      React.createElement(
        Card.Body,
        null,
        this.props.show.image
          ? React.createElement(Card.Img, {
              onClick: this.onClickHandler,
              src: this.props.show.image.original,
              alt: this.props.show.name
            })
          : null,
        React.createElement(Card.Title, null, this.props.show.name),
        React.createElement(
          Card.Link,
          {
            onClick: this.onClickHandler
          },
          "Please, ",
          React.createElement("b", null, "Click"),
          " to see The Details.."
        )
      )
    );
  }
}

export default withRouter(ShowBox);
