import React from 'react'
import './App.css';
import Header from "../Header/Header";
import PostCard from "../PostCard/PostCard";
import post_image from "../static/images/post_1.png"
import PostList from "../PostList/PostList";

function App() {
  return (
    <div className="App">
        <Header/>
        <PostList/>
    </div>
  );
}

export default App;
