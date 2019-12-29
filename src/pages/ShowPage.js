import React from 'react'
import {Container, Row, Col, Card, ListGroup,Alert} from 'react-bootstrap'
import Navbar_ from '../components/Navbar_'
import Loading from '../components/Loading'


class ShowPage extends React.Component {
   constructor(props) {
     super(props);
     this.state = { 
       show:null,
      };
   }
  
  componentDidMount() {
    const self = this
    fetch(`https://api.tvmaze.com/shows/${this.props.match.params.id}`)
    .then((resp) => resp.json())
    .then(function(data) {
      self.setState({
        show: data
      })
    })
  }

  render() {
    return (
      this.state.show ?
      
        <div className="show-detail">
         <Navbar_ title={this.state.show.name}></Navbar_>
          <Container className="container">
            <h1 className="my-4">{this.state.show.name}
              <sub><span className="text-muted"> {this.state.show.status}</span></sub>
            </h1>

            <Row>

              {
                this.state.show.image ?
                <Col md={8}>
                  <Card.Img className="img-fluid" src={this.state.show.image.original} alt={this.state.show.name} />
                </Col> : null
              }

              <Col md={4}>
                {
                  this.state.show.genres ?
                  this.state.show.genres.map((genre, index) => {
                    return (<span key={index} className="badge badge-primary m-1">{genre}</span>);
                  }):null
                }
                <Card.Title className="my-3">Description</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{__html: this.state.show.summary}}></Card.Text>
                <Card.Title className="my-3">Schedule</Card.Title>
              <ListGroup variant="flush">
                  <ListGroup.Item disabled>{
                  this.state.show.schedule.time ?
                  this.state.show.schedule.time
                  :<span>time information not found...</span>
                }</ListGroup.Item>
                  <ListGroup.Item disabled>{
                  this.state.show.schedule.days != "" ?
                  this.state.show.schedule.days
                  :<span>day information not found...</span>
                }</ListGroup.Item>
                 <ListGroup.Item disabled>{

                  this.state.show.rating.average ?
                  this.state.show.rating.average
                  :<span>average information not found...</span>
                }</ListGroup.Item>
              </ListGroup>
              </Col>

            </Row>

          </Container>
        </div>
      :
          <Loading />
        
    );
  }
}

export default ShowPage;
