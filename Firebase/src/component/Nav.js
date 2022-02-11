import React, { Component } from 'react'
import {signOut} from "firebase/auth"
import { auth } from "../firebase-config"


export default class nav extends Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn,
            username
        }

        this.onClick = this.onClick.bind(this);
    }
    
    

    onClick(){
        signOut(auth).then(() =>{
            localStorage.clear();
        })
    }

    render() {
        
        let logIn = "LogIn";
        if (this.state.loggedIn === true) {
            logIn = "Logout";
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">React Assignment</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                {this.state.loggedIn && <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/create">Create Post</a>
                                </li>}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>{this.state.username}</li>
                                        <li><a className="dropdown-item" href="/login" onClick={this.onClick}>{logIn}</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
