import React from 'react'
import ShowBox from '../components/ShowBox';
import Navbar_ from '../components/Navbar_';
import Loading from '../components/Loading';
//import {resultReady} from '../actions/index'
import { connect } from 'react-redux';
import { Container, Row, CardColumns,Col } from 'react-bootstrap';



class SearchResultPage extends React.Component {
  
  state = {
    results: null,
    readyResult: false
  }
  componentDidUpdate(){
    const self = this
    fetch(`https://api.tvmaze.com/search/shows?q=${this.props.match.params.search}`)
    .then((resp) => resp.json())
    .then(function(data) {
      self.setState({
        results: data
      })
     // self.props.dispatch(resultReady(data))
      
    })
  }
  componentDidMount() {
    const self = this
    fetch(`https://api.tvmaze.com/search/shows?q=${this.props.match.params.search}`)
    .then((resp) => resp.json())
    .then(function(data) {
      self.setState({
        results: data
      })
     // self.props.dispatch(resultReady(data))
      
    })
  }
  render() {
    return (       
  <Container>
    <Navbar_ />
    <Row>
      <Col>
        <CardColumns>
          {
            this.state.results ?
              this.state.results.length === 0 ?
              <p>icerik yok</p>
              :
              this.state.results.map((show, index) => {
                return <ShowBox {...show} key={index} />;
              })
            :
            <Loading />
          }
        </CardColumns>
      </Col>
    </Row>
  </Container>  
    );
  }
}

export default connect()(SearchResultPage);



