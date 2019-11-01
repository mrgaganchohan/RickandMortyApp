import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CharItem from './CharItem';
import { setCurrentPage , setLastPage, setCharacters} from '../actions/GetCharacters';
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
  componentDidUpdate(prevProps){
    if (this.props.currentPage !== prevProps.currentPage){
    axios
    .get(
      `https://rickandmortyapi.com/api/character/?page=${this.props.currentPage}`
    )
    // .then(res => this.setState({ characters: res.data }));
    .then(res=>this.props.setCharacters(res.data))
    }
  }
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
        <div className="footer">
          
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
        {/* Conditional rendering being done here.   */}

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

        {
            (this.props.characters.info.next!=="") &&
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
const mapStateToProps = state => ({
  currentPage: state.getCharacter.currentPage,
  lastPage: state.getCharacter.lastPage,
  characters: state.getCharacter.characters
});

export default connect(
  mapStateToProps,
  { setCurrentPage, setLastPage, setCharacters }
)(AllChars);
