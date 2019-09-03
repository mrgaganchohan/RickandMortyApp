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
        results: []
      }
    };
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
        <div style={characterStyle}>
          {this.state.characters.results.map(characterItem => (
            <CharItem key={characterItem.id} characters={characterItem} />
          ))}
        </div>
        <br />
        <br />
        {console.log('Before the stuff' + this.props.currentPage)}

        {console.log("lets see if it happens before")}
        <a
          style={{ color: 'blue' }}
          onClick={() =>{this.props.setCurrentPage(
            parseInt`{this.props.currentPage}` + 1
          )}}
        >
          Next
        </a>
        {console.log('the value is ' + this.props.currentPage)}
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
