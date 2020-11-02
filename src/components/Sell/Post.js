import React, {useState} from "react";
// import firebase from "firebase";

 
import Sell from "./Post";
import PostForm from "./PostForm.js";

 function Post()
  {
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     console.log(user);
  //   } else {
  //     // No user is signed in.
  //   }
  // });
  
  return (
    <div className="Post">
      <Sell />
      <PostForm  />
    </div>
  );
}

export default Post;
