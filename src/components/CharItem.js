import React, { Component } from 'react'

export default class CharItem extends Component {
    // this.url = 'https://rickandmortyapi.com/api/character/avatar/'
    render() {
        // var full_url = {this.url}+ {this.props.characters.id} + '.jpeg'

        return (
            <div className ='card text-center'>
                <img 
                src= ''
                className ='round-img'
                style={{width:'60px'}}
                />
               <p> {this.props.characters.name} </p>
            </div>
        )
    }
}
