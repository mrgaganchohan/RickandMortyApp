import React, { Component } from 'react'
import axios from 'axios';

import { connect } from 'react-redux';

import { setCharacters, setSearchTerm, setCurrentPage, setDisplaySearchFooter
        } from '../actions/GetCharacters';


class NavBar extends Component {

    state = {
    }

    
    onChange = (e) =>{
        this.props.setSearchTerm(
             e.target.value

        )
        
    }


    async componentDidUpdate(prevProps){
        if (this.props.SearchTerm !== prevProps.SearchTerm)
        {
            // if searchTerm is not empty, then set DisplaySearchFooter to true
            // which means Footer related to search will be displayed.
            // If DisplaySearchFooter is False, display normal footer, and not the 
            // search one.
            this.props.setCurrentPage(1);

            if (this.props.SearchTerm!==""){
                this.props.setDisplaySearchFooter(true);
            }
            else {
                this.props.setDisplaySearchFooter(false);
            }
            // waits for the result

            await axios
            .get(
            `https://rickandmortyapi.com/api/character/?name=${this.props.SearchTerm}`
            )
            .then(res=> {
                this.props.setCharacters(res.data)

            }
            
                )
            // Make sure the catch is an arrow function
            // catch( function(error{}) won't work
            .catch((error)=> {
                this.props.setCharacters({})
            })
        }

    }
    render() {
        return (

            <div style={this.navStyle}>

            <nav className="navbar navbar-expand-sm navbar-light ml-lg-5 mr-lg-5">

                    <div className="mx-auto" style={{ width: "100%" }}>
                        <div className="input-group mb-3" style={{ paddingTop: "13px" }}>
                            {/* Always try and link the value to the state as below or
                            with props. */}
                            <input type="text" className="form-control rounded-left" 
                             name = "SearchTerm"
                             id = "searchBar"
                             placeholder="Search Rick/ Morty Character"
                             aria-label="" aria-describedby="basic-addon1" 
                             onChange={this.onChange}
                             value={this.props.SearchTerm}/>
                            
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
{/* getCharacter is given name in Reducer/index.js */}

const mapStateToProps = state => (
    {
        characters: state.getCharacter.characters ,
        SearchTerm: state.getCharacter.SearchTerm,
        DisplaySearchFooter: state.getCharacter.DisplaySearchFooter
    }
)

export default connect (
    mapStateToProps,
    {setCharacters, setSearchTerm, setCurrentPage, setDisplaySearchFooter }
) (NavBar);