import React from 'react'
import SearchBox from '../containers/SearchBox';
import Navbar_ from '../components/Navbar_';
import { Container } from 'react-bootstrap';

const SearchPage = () => (
  
    <Container>
      <Navbar_ />
      <SearchBox />
    </Container>
    

);

export default SearchPage;

/*
class SearchPage extends React.Component {
  render() {
    return (
      <Container>
        <Navbar_ />
        <SearchBox />
      </Container>
      
    );
  }
}

export default SearchPage;
*/