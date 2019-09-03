import React, { Component } from 'react'
import axios from 'axios'
import CharItem from './CharItem';
export default class AllChars extends Component {

    constructor(props){
        super(props);
        this.state = {
        characters: {
            // Making sure during first render, it is not 
            results:[],
        }
    };
}
    
    componentDidMount()
        {
            axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(res=>this.setState({characters: res.data}))
        }

    render() {
        return (
            <div style = {characterStyle}>
            
                
               { this.state.characters.results.map(characterItem => (
                <CharItem key = {characterItem.id} characters = {characterItem}   />) 
               )}
               
            
            </div>
        )
    }
}
const characterStyle = {
    display: 'grid',
    // gridTemplateColumns: 'repeat(3, 1fr)',

    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '1rem'
    
}
