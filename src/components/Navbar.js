import React from 'react'
import NavbarSearch from './NavbarSearch'
import {withRouter} from 'react-router-dom'
import * as same from 'react-bootstrap'

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.onGoBackButtonHandler = this.onGoBackButtonHandler.bind(this)
  }

  onGoBackButtonHandler(event){
    this.props.history.goBack()
  }
  render() {
    return (
 
      React.createElement(same.Navbar, {
        bg: "light",
        expand: "lg"
      }, 
      React.createElement(same.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), 
      React.createElement(same.Navbar.Collapse, {
        id: "basic-navbar-nav"
      }, 
      React.createElement(same.Nav, {
        className: "mr-auto"
      },
       React.createElement(same.Button, {
        variant: "light",
        onClick: this.onGoBackButtonHandler
      }, 
      React.createElement("span", null, "\u2190")), 
      React.createElement(same.Navbar.Brand, null, this.props.title)),
       React.createElement(NavbarSearch, null))
       )
    )
  }
}

export default withRouter(Navbar)