import React from 'react'
import { connect } from 'react-redux';
import { receiveNewSearch } from '../actions';
import {withRouter} from 'react-router-dom'

class SearchBox extends React.Component {
  
  constructor(props) {
    super(props);
    props.dispatch(receiveNewSearch({
      searchMessage: 'batman'
    }))
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="row">
          <div className="col-6">
            <input type="search" value={this.state.searchMessage} onChange={this.onSearchChangeHandler} placeholder="Search" ref="search" />
          </div>
        </div>
      </form>
    );
  }
}

export default connect()(withRouter(SearchBox));
