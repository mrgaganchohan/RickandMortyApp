import React, { Component } from 'react'

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
                style={{width:'120px'}}
                />
                <h3>{this.props.characters.name}</h3> 
                <p><b>Status:</b>{this.props.characters.status}</p>
            </div>
        )
    }
}
