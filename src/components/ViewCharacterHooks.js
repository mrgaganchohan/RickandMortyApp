import React from 'react';
import  { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { setCurrentPage , setLastPage} from '../actions/GetCharacters';

import axios from  'axios';
import {Link} from 'react-router-dom'

// setting the function calling whom will change the value
// and a state variable.





const ViewCharacterHooks = (  props ) => {

    var match = props.match


    var url = 'https://rickandmortyapi.com/api/character/avatar/';
    var char_url = `https://rickandmortyapi.com/api/character/`;
    const [character, setCharacter] = useState({});
    const [id, setId] = useState(match.params.id)
    var full_url = url+id+".jpeg"
    console.log("Doing full url log")
    console.log({id})
    useEffect(() => {

        axios.get(char_url+match.params.id)
            .then(res => { 
                        setCharacter(res.data)
                    })
        return () => {
            
        };
    }, [])
    return (
        <div>
            {console.log("This one is in return func")}
            {console.log({id})}
            <h1>{id}</h1>
            <img 
                src= {full_url}
                alt= ""

                className ="round-img"
                style={{width:'120px'}}
                />
            <h2>{character.name}</h2>
            <p><b>Status: </b>{character.status}</p>
            <p><b>Species: </b>{character.species}</p>
            <div>{character.origin && 
                <p><b>Current Location: </b>{character.location.name}</p>
                }</div>


                <div>{character.origin && 
                <p><b>Origin: </b>{character.origin.name}</p>

                }</div>
            <p><b></b></p>
            {/* It's linked to / because it will always load the page which 
                is current. */}
            <Link to={'/'}>
                <a href="#" style = {{color: 'blue'}}>Go Back to Page {props.currentPage}</a>

                 </Link>
        </div>
    );
};
const mapStateToProps = state => ({
    currentPage: state.getCharacter.currentPage,
    lastPage: state.getCharacter.lastPage
  });
  
export default connect(
    mapStateToProps,
    { setCurrentPage, setLastPage }
)(ViewCharacterHooks);