import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function Create() {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts")
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="card col-sm-6 offset-sm-3 my-5">
      <div className="card-body">
        <h1 className='display-4 mark text-center'> Create A Post</h1>
        <div className="form-group my-5">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={(event) => { setTitle(event.target.value); }} />
        </div>
        <div className="form-group my-5">
          <label htmlFor="post-area">Post:</label>
          <textarea className="form-control" id="post-area" placeholder="Type the Post" onChange={(event) => { setPostText(event.target.value); }} />
        </div>
        <div className='text-center my-3'>

          <button type="submit" className="btn btn-primary" onClick={createPost}>Submit Post</button>
        </div>

      </div>
    </div>
  );
}

export default Create;
