import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CharItem from './CharItem';
import { setCurrentPage , setLastPage} from '../actions/GetCharacters';
class AllChars extends Component {
  constructor(props) {
    super(props);
    //Initialising the Ac
    this.state = {
      characters: {
        // Making sure during first render, it is not
        results: [], 
        info: {},
      },
      loaded : false

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
    //   Multiple lines in a promise
      .then(res => {this.setState({ characters: res.data  })
      this.props.setLastPage(res.data.info.pages)
    
    }

      );
      
  }

  render() {
    return (
      <div>
          <h1 style = {{

        padding: '0 2rem'


          }}>Page {this.props.currentPage}</h1>
        <div style={characterStyle}>
          {this.state.characters.results.map(characterItem => (
            <CharItem key={characterItem.id} loaded = {this.state.loaded} characters={characterItem} />
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

        <a 
        style = {{ color: 'blue', margin:"15px"}}
        href= "#"
        onClick={() =>{this.props.setCurrentPage(
            10
          )}}
        >Page 10</a>

<a 
        style = {{ color: 'blue', margin:"15px"}}
        href= "#"
        onClick={() =>{this.props.setCurrentPage(
            20
          )}}
        >Page 20</a>
        {/* Making sure if there is no next page, it doesn't show the next button */}
        {console.log("value inside render is "+this.state.characters.info.pages)}
        {console.log("next inside render is "+this.props.lastPage)}

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

        <a 
          style={{ color: 'blue', margin:"15px" }}
          href="#top"
          onClick={() =>{this.props.setCurrentPage(
             this.props.lastPage
          )}}
        >
          Last Page
        </a>
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
  gridGap: '1rem',
  padding: '0 2rem'

};
const mapStateToProps = state => ({
  currentPage: state.getCharacter.currentPage,
  lastPage: state.getCharacter.lastPage
});

export default connect(
  mapStateToProps,
  { setCurrentPage, setLastPage }
)(AllChars);
