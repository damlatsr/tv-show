import React from "react";
import ShowBoxContainer from "../containers/ShowBoxContainer";

class SearchResultPage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ShowBoxContainer, {
        searchText: this.props.match.params.search
      })
    );
  }
}

export default SearchResultPage;
