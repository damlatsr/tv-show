import React from 'react'
import {withRouter} from 'react-router-dom'
import { Card } from 'react-bootstrap';

//Anasayfa

class ShowBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler(event) {
    this.props.history.push(`/show/${this.props.show.id}`)
  }

  render() {
    return (
        
      <Card border="light">
        <Card.Body>
          {
              this.props.show.image ?
            <Card.Img onClick={this.onClickHandler} src={this.props.show.image.original} alt={this.props.show.name} />: null
          }
          <Card.Title>{this.props.show.name}</Card.Title>
          <Card.Link onClick={this.onClickHandler} >Please, <b>Click</b> to see The Details..</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(ShowBox);
