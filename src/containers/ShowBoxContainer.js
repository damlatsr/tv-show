import React from 'react'
import ShowBox from '../components/ShowBox'
import * as actionCreators from "../actions/index"
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'
import { Container, Col, CardColumns, Row } from 'react-bootstrap';

class ShowBoxContainer extends React.Component {

  componentDidMount() {
    this.props.receiveNewSearch(this.props.searchText)
  }

  render() {
    return (
<Container fluid>
    <Navbar />
      <Row className="row m-3">
         
        <Col>
          <CardColumns>
          {
            this.props.requests.results.length > 0 ?
            this.props.requests.results.map((show, index) => {
              return <ShowBox {...show} key={index} />;
            }) :
            <Loading />
          }
          </CardColumns>
        </Col>
      </Row>
      </Container>
    )
  }
}


const mapStateToProps=(state)=>{
  return state
};

export default connect(mapStateToProps, actionCreators)(ShowBoxContainer)