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
 
        
        <same.Navbar bg="light" expand="lg"> 
          <same.NavbarBrand onClick={this.onGoBackButtonHandler}>Home</same.NavbarBrand>
          <same.Button variant="light" onClick={this.onGoBackButtonHandler}><span>&larr;</span></same.Button>
          <same.Navbar.Brand>{this.props.title}</same.Navbar.Brand>
          
          <same.Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </same.Button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <NavbarSearch />
          </div>
        </same.Navbar>  
      
    )
  }
}

export default withRouter(Navbar)