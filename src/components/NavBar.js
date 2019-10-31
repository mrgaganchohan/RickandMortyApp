import React, { Component } from 'react'
import axios from 'axios';

import { connect } from 'react-redux';

import { setCharacters, setSearchTerm} from '../actions/GetCharacters';


class NavBar extends Component {

    state = {
    }

    onChange = (e) =>{
        this.props.setSearchTerm(
             e.target.value

        )
    }
    componentDidUpdate(prevProps){
        if (this.props.SearchTerm !== prevProps.SearchTerm)
        {

            axios
            .get(
            `https://rickandmortyapi.com/api/character/?name=${this.props.SearchTerm}`
            )
            .then(res=>this.props.setCharacters(res.data))
        }
    }
    render() {
        return (

            <div style={this.navStyle}>

            <nav className="navbar navbar-expand-sm navbar-light ml-lg-5 mr-lg-5">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto" style={{ width: "100%" }}>
                        <div className="input-group mb-3" style={{ paddingTop: "13px" }}>
                            <input type="text" className="form-control rounded-left" 
                             name = "SearchTerm"
                             placeholder="Serach Rick/ Morty Character"
                             aria-label="" aria-describedby="basic-addon1" 
                             onChange={this.onChange}/>
                            
                        </div>
                    </div>
                </div>
                    </nav>
                    </div>
        )
    }
    navStyle = {
        "box-shadow": "0 3px 6px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0)",
        height: "95px",
        marginBottom: "20px"
    };

}
const mapStateToProps = state => (
    {
        characters: state.getCharacter.characters ,
        SearchTerm: state.getCharacter.SearchTerm
    }
)

export default connect (
    mapStateToProps,
    {setCharacters, setSearchTerm}
) (NavBar);