import React from "react";
import ShowBox from "../components/ShowBox";
import * as actionCreators from "../actions/index";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Container, Col, CardColumns, Row } from "react-bootstrap";


function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}



class ShowBoxContainer extends React.Component {
  componentDidMount() {
    this.props.receiveNewSearch(this.props.searchText);
  }

  render() {
    return React.createElement(
      Container,
      {
        fluid: true
      },
      React.createElement(Navbar, null),
      React.createElement(
        Row,
        {
          className: "row m-3"
        },
        React.createElement(
          Col,
          null,
          React.createElement(
            CardColumns,
            null,
            this.props.requests.results.length > 0
              ? this.props.requests.results.map((show, index) => {
                  return React.createElement(
                    ShowBox,
                    _extends({}, show, {
                      key: index
                    })
                  );
                })
              : React.createElement(Loading, null)
          )
        )
      )
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(ShowBoxContainer);
