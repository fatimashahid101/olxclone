import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
 import firebase from "firebase";

import { firebaseConfig } from "./config";
import NavigationBar from "./components/NavigationBar/NavigationBar";
 import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ProdPage from "./components/Product/Product";
import Sell from "./components/Sell/Post";
//import Post from "./components/Sell/Post";
import PostForm from "./components/Sell/PostForm.js";
import SingleProd from "./components/SingleProd/SingleProd";
//import Chatroom from "./components/Chat/Chatroom";
import Message from "./components/Chat/Message";
import Profile from "./components/Profile/Profile";
 import EditProf from "./components/Profile/EditProf";
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  const App = ()=> {
  
  let [mainCatog, setMainCat] = useState("");
  let [subCatog, setSubCat] = useState("");
  let [value, setValue] = useState("");
  // let [productFilter,setProductFilter] = useState("")
  return (
    // <div className="App">
    <Router>
      <NavigationBar />
      <Route 
      exact path="/" 
      component={() => <Home />} 
      />
      <Route 
       path="/products/:cat" 
       component={() => <ProdPage />}
        />
      <Route exact path="/post"
        component={() => <Sell setMainCat={setMainCat} 
        setSubCat={setSubCat}
         />}
      />
       <Route path="/messeges/:key" 
       component={() => <Message />}
        />
      <Route
       exact path="/post/form"
        component={() => <PostForm mainCatog={mainCatog} subCatog={subCatog} />}
      />
      <Route 
      path="/editProfile/info" 
      component={() => <EditProf />} />
      <Route 
      path="/profile/:id" component={() => <Profile />} 
      />
      <Route 
      path="/product/view/:id" 
      component={() => <SingleProd />} 
      />
      <footer />
    </Router>
    // </div>
  );
}

export default App;
