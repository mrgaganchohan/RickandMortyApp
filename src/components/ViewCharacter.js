import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { setCurrentPage , setLastPage} from '../actions/GetCharacters';

class ViewCharacter extends Component {
    constructor(props){
        super(props);
        // saving value of the parameter
        this.state = {
            id : this.props.match.params.id
        }
    }
    render() {
        // It is getting id from the previous component
        return (
            <div>

                 <h1>{this.state.id}</h1>
                 <Link to={'/'}>
                 <a href="#" style = {{color: 'blue'}}>Go Back to Page {this.props.currentPage}</a>
                 </Link>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    currentPage: state.getCharacter.currentPage,
    lastPage: state.getCharacter.lastPage
  });
  
  export default connect(
    mapStateToProps,
    { setCurrentPage, setLastPage }
  )(ViewCharacter);