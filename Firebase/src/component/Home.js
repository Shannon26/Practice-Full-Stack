import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config"

export default class home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;

        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn,
            setPostList: [],
            Done: false
        }

    }
    componentDidMount() {
        const postsCollectionRef = collection(db, "posts");
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);

            let setPostLists = ((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
            return setPostLists
        }
        getPosts().then((setPostLists) => {
            this.state.setPostList.push(setPostLists);
            this.setState({
                Done: false
            })
            this.state.setPostList.map((doc) => doc.map((doc2) => console.log(doc2)))
        });

    }

    render() {
        if (this.state.loggedIn === false) {
            return <Navigate to="/login" />;
        }
        return (
            <div className='col-sm-6 offset-sm-3'>
                {this.state.setPostList.map((doc) => doc.map((doc2) => {
                    return (
                        <div className="card rounded my-2">
                            <div className="card-body">
                                <div className="card-title"> <h4>{doc2.title}</h4></div>
                                <div className="card-text">{doc2.postText}</div>
                                <p className='badge bg-primary text-wrap text-uppercase font-weight-bold my-3'> @{doc2.author.name}</p>
                            </div>
                        </div>
                    )
                }
                ))}
            </div>
        )
    }
}
