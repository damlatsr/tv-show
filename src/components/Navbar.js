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
         
          <same.Button variant="light" onClick={this.onGoBackButtonHandler}><span>&larr;</span></same.Button>
          <same.Navbar.Brand>{this.props.title}</same.Navbar.Brand>
            <NavbarSearch />
         
        </same.Navbar>  
      
    )
  }
}

export default withRouter(Navbar)