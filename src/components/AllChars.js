import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CharItem from './CharItem';
import  Footer  from './Footer';
import { setCurrentPage , setLastPage, setCharacters, setDisplaySearchFooter} 
               from '../actions/GetCharacters';
class AllChars extends Component {
  constructor(props) {
    super(props);
    //Initialising the Ac
    this.state = {
      // characters: {
      //   // Making sure during first render, it is not
       
      // },
      searchBar:"",
      loaded : false

    };

  }
  onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })

  }
  // Fetches data based on the current page
  async componentDidUpdate(prevProps){
    if (this.props.currentPage !== prevProps.currentPage){
      if (this.props.currentPage === 0)
      {
        console.log("this was hit with a zero")
        console.log(this.props.SearchTerm)
        this.props.setCurrentPage(1)
      }
    await axios
    .get(
      `https://rickandmortyapi.com/api/character/?name=${this.props.SearchTerm}&page=${this.props.currentPage}`
    )
    // .then(res => this.setState({ characters: res.data }));
    .then(res=>{this.props.setCharacters(res.data)
    })}
  }
  // Fetches data based on the current search
  componentDidMount() {
    // this.props.setCurrentPage()
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`
      )
    //   Multiple lines in a promise
      .then(res => {this.props.setCharacters(res.data)
      this.props.setLastPage(res.data.info.pages)
    
    }

      );
      
  }

  render() {

    // If below condition is true render the following, else render the other return 
    // statement.
    if (Object.keys(this.props.characters).length===0)
    {
      return (
        <div>
          <h1> OOh a Universe with empty results</h1>
        </div>
      )
    }
    
    return (
      <div>
      <div>

          <h1 style = {{

        padding: '0 2rem'


          }}>Page {this.props.currentPage}</h1>
        <div style={characterStyle}>
          {/* Applying conditonal rendering below */}
          {this.props.characters.results && this.props.characters.results.map(characterItem => (
            <CharItem key={characterItem.id} loaded = {this.state.loaded} characters={characterItem} />
          ))}
        </div>
        {/* APPLYING CONDITIONAL RENDERING WITH FOOTER */}
        {this.props.characters.info &&
        <Footer />

        }
      </div>
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
//  getCharacter is given name in Reducer/index.js
const mapStateToProps = state => ({
  currentPage: state.getCharacter.currentPage,
  lastPage: state.getCharacter.lastPage,
  characters: state.getCharacter.characters,
  SearchTerm: state.getCharacter.SearchTerm
});

export default connect(
  mapStateToProps,
  { setCurrentPage, setLastPage, setCharacters, setDisplaySearchFooter }
)(AllChars);
