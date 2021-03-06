import React from "react";
import { connect } from "react-redux";
import { receiveNewSearch } from "../actions";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(
      receiveNewSearch({
        searchMessage: "batman"
      })
    );
  }

  render() {
    return React.createElement(
      Form,
      null,
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          {
            md: 6
          },
          React.createElement("input", {
            type: "search",
            value: this.state.searchMessage,
            onChange: this.onSearchChangeHandler,
            placeholder: "Search",
            ref: "search"
          })
        )
      )
    );
  }
}

export default connect()(withRouter(SearchBox));
