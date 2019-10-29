import React, { Component } from 'react'

export default class NavBar extends Component {
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
                            <input type="text" className="form-control rounded-left" placeholder="what you are looking to buy today" aria-label="" aria-describedby="basic-addon1" onChange={this.searchFunctionality}/>
                            
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


