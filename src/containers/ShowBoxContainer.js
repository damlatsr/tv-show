import React from 'react'
import ShowBox from '../components/ShowBox'
import * as actionCreators from "../actions/index"
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar'
import {withRouter} from 'react-router-dom'

class ShowBoxContainer extends React.Component {

  componentDidMount() {
    this.props.receiveNewSearch(this.props.searchText)
  }

  render() {
    return (
<div>
    <Navbar />
      <div className="row m-3">
         
        <div className="col-10 offset-1">
          <div className="card-columns">
          {
            this.props.requests.results.length > 0 ?
            this.props.requests.results.map((show, index) => {
              return <ShowBox {...show} key={index} />;
            }) :
            <Loading />
          }
          </div>
        </div>
      </div>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return state
};

export default connect(mapStateToProps, actionCreators)(ShowBoxContainer)