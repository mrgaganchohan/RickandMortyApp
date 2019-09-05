import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CharItem from './CharItem';
import { setCurrentPage } from '../actions/GetCharacters';
class AllChars extends Component {
  constructor(props) {
    super(props);
    //Initialising the Ac
    this.state = {
      characters: {
        // Making sure during first render, it is not
        results: [], 
        info: {}
      }
    };
  }

  componentDidUpdate(prevProps){
    if (this.props.currentPage !== prevProps.currentPage){
    axios
    .get(
      `https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`
    )
    .then(res => this.setState({ characters: res.data }));
    }
  }
  componentDidMount() {
    // this.props.setCurrentPage()
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`
      )
      .then(res => this.setState({ characters: res.data }));
  }

  render() {
    return (
      <div>
          <h1>Page {this.props.currentPage}</h1>
        <div style={characterStyle}>
          {this.state.characters.results.map(characterItem => (
            <CharItem key={characterItem.id} characters={characterItem} />
          ))}
        </div>
        <br />
        <br />

        <a
          style={{ color: 'blue' , margin:'15px'}}
            href="#"
          onClick={() =>{this.props.setCurrentPage(
             1
          )}}
        >
          Home
        </a 
        >
        {/* Conditional rendering being done here. */}
        {(this.props.currentPage!==1) && <a 
        style = {{ color: 'blue', margin:"15px"}}
        href= "#"
        onClick={() =>{this.props.setCurrentPage(
            (parseInt(this.props.currentPage) - 1)
          )}}
        >Previous</a>}
        {/* Making sure if there is no next page, it doesn't show the next button */}
        {
            (this.state.characters.info.next!=="") &&
        <a 
          style={{ color: 'blue', margin:"15px" }}
          href="#top"
          onClick={() =>{this.props.setCurrentPage(
            (parseInt(this.props.currentPage) + 1)
          )}}
        >
          Next
        </a>
        }
        <br />
        <br />
        <hr />
      </div>
    );
  }
}
const characterStyle = {
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',

  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gridGap: '1rem'
};
const mapStateToProps = state => ({
  currentPage: state.getCharacter.currentPage
});

export default connect(
  mapStateToProps,
  { setCurrentPage }
)(AllChars);
