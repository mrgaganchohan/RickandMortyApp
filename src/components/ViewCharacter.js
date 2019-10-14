import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { setCurrentPage , setLastPage} from '../actions/GetCharacters';
import axios from 'axios';

class ViewCharacter extends Component {
    constructor(props){
        super(props);
        // saving value of the parameter
        this.state = {
            id : this.props.match.params.id,
            character:  {

                // origin:{
                //     name : ""
                // },
                // location:{
                //     name: ""
                // }
            }, 
        }


    }




    url = 'https://rickandmortyapi.com/api/character/avatar/'
    char_url = `https://rickandmortyapi.com/api/character/`;

    componentDidMount(){
        axios.get(`${this.char_url}${this.props.match.params.id}`)
        .then(res => { this.setState({character:res.data})

                })
        

    }
    render() {
        // It is getting id from the previous component
        var full_url = `${this.url}${this.state.id}.jpeg`
        return (
            <div>
                
                <h1>{this.state.id}</h1>
                <img 
                src= {full_url}
                alt= ""

                className ="round-img"
                style={{width:'120px'}}
                />
                <h2>{this.state.character.name}</h2>
                <p><b>Status: </b>{this.state.character.status}</p>

                <p><b>Species: </b>{this.state.character.species}</p>
                {/* CONDITONAL rendering being done here, because there was no object in state */}
                <div>{this.state.character.origin && 
                <p><b>Current Location: </b>{this.state.character.location.name}</p>
                }</div>


                <div>{this.state.character.origin && 
                <p><b>Origin: </b>{this.state.character.origin.name}</p>

                }</div>

                <p><b></b></p>
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