import React from 'react'
import SearchBox from '../containers/SearchBox';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';

const SearchPage = () => (
  
    <Container>
      <Navbar />
      <SearchBox />
    </Container>
    

);

export default SearchPage;