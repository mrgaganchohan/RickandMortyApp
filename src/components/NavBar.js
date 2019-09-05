import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-primary">
                    <h1 style = {{textAlign: 'center'}}>Rick and Morty App</h1>
                </nav>
            </div>
        )
    }
}
