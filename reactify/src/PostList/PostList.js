import React from 'react'
import './PostList.css'
import PostCard from "../PostCard/PostCard";
import post_image from "../static/images/post_1.png";

function PostList(props) {
    return (
        <div>
        <div className="container py-3">
            <div className="row">
                <div className="col-12 p-2">
                    <PostCard image={post_image}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 p-2">
                    <PostCard image={post_image}/>
                </div>
                <div className="col-12 col-md-6 p-2">
                    <PostCard image={post_image}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 p-2">
                    <PostCard image={post_image}/>
                </div>
                <div className="col-12 col-md-6 p-2">
                    <PostCard image={post_image}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PostList;