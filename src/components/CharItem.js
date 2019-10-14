import React, { Component } from 'react';
import loading from '../static/Loading.jpg';
import { Link } from 'react-router-dom';
export default class CharItem extends Component {


    url = 'https://rickandmortyapi.com/api/character/avatar/'
    render() {
        var full_url = `${this.url}${this.props.characters.id}.jpeg`
       
        return (
            <div className = "card text-center">

                <img 
                src= {full_url}
                alt= ""

                className ="round-img"
                style={{width:'120px' , backgroundImage: `url(require(${loading}))`}}
                />
                <h3>{this.props.characters.name}</h3> 
                <p><b>Status:</b>{this.props.characters.status}</p>
                {/* Following line points to the page that uses Redux and Classes */}
                {/* <Link to = {`/viewcharacter/${this.props.characters.id}`}> */}
               
                {/* Following line points to the page that uses Hooks and Contexts */}
                <Link to = {`/ViewCharacter/${this.props.characters.id}`}>

                <a style = {{color: 'blue'}}>
                    View</a>
                    </Link>
            </div>
        )
    }
}
