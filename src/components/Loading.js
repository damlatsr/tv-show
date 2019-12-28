import React from 'react'
import { Container,Row } from 'react-bootstrap'


const Loading = () => {
  return (
    <Container className="loading">
    <Row className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </Row>
  </Container>
  );
}

export default Loading;
