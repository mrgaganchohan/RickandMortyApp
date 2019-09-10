import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from  'react-router-dom'
import AllChars from './AllChars'
import ViewCharacter from './ViewCharacter'
import ViewCharacterHooks from './ViewCharacterHooks'
export default class routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <switch>
                    <Route exact path = "/" component = {AllChars} />
                    <Route path = "/viewcharacter/:id" component = {ViewCharacter}/>
                    <Route path = "/viewcharacterwithHooks/:id" component = {ViewCharacterHooks} />
                </switch>
            </BrowserRouter>
        )
    }
}
