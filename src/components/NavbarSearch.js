import React from "react";
import { connect } from "react-redux";
import { receiveNewSearch } from "../actions";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMessage: ""
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this, props.dispatch);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.setState({
      searchMessage: event.target.value
    });
  } //search tetikleyici.

  onSubmitHandler(dispatch, event) {
    dispatch(receiveNewSearch(this.state.searchMessage));
    this.props.history.push(`/${this.state.searchMessage}`);
    event.preventDefault();
  }

  render() {
    return React.createElement(
      Form,
      {
        inline: true,
        className: "mr-sm-2",
        onSubmit: this.onSubmitHandler
      },
      React.createElement(Form.Control, {
        type: "search",
        value: this.state.searchMessage,
        onChange: this.onSearchChangeHandler,
        placeholder: "Search",
        "aria-label": "Search"
      }),
      React.createElement(
        Button,
        {
          variant: "outline-success",
          type: "submit"
        },
        "Search"
      )
    );
  }
}

export default connect()(withRouter(NavbarSearch));
