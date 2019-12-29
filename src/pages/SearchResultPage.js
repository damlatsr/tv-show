import React from 'react'
import ShowBoxContainer from '../containers/ShowBoxContainer';


class SearchResultPage extends React.Component {
  render() {
    return (
      <div>
      <ShowBoxContainer searchText={this.props.match.params.search}></ShowBoxContainer>
    
      </div>
    );
  }
}

export default SearchResultPage;