import React from 'react'
import NavbarSearch from './NavbarSearch'
import {withRouter} from 'react-router-dom'
import {Navbar, Button } from 'react-bootstrap'

class Navbar_ extends React.Component {

  constructor(props){
    super(props);
    this.onGoBackButtonHandler = this.onGoBackButtonHandler.bind(this)
  }

  onGoBackButtonHandler(event){
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        
        <Navbar bg="light" expand="lg"> 
          <Button variant="light" onClick={this.onGoBackButtonHandler}><span>&larr;</span></Button>
          <Navbar.Brand>{this.props.title}</Navbar.Brand>
          
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <NavbarSearch />
          </div>
        </Navbar>  
      </div>
    )
  }
}

export default withRouter(Navbar_)