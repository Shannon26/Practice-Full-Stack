import React, { Component } from 'react'
import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { Navigate } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props)
        let loggedIn = false;
        this.state = {
            userName: '',
            loggedIn
        };

        this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }



    signInWithGoogle() {
        signInWithPopup(auth, provider).then((result) => {
            this.setState({
                userName: result.user.displayName,
                loggedIn: true
            })
            localStorage.setItem("token", result.user.accessToken);
            localStorage.setItem("username", result.user.displayName);
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        if (this.state.loggedIn === true) {
            return <Navigate to="/" />
        }
        return (
            <div className="loginPage container my-5">
                <p className='display-4 mark'>Sign In to Continue</p>
                <div className="row">
                    <div className="col-md-3">
                        <div className="btn btn-outline-dark" onClick={this.signInWithGoogle} style={{ textTransform: "none" }} >
                            <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            Login with Google
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
