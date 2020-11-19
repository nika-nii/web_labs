import React from 'react'
import './PostList.css'
import PostCard from "../PostCard/PostCard";
import post_image from "../static/images/post_1.png";

function PostList(props) {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <PostCard image={post_image}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 p-2">
                        <PostCard image={post_image}/>
                    </div>
                    <div className="col-12 col-md-4 p-2">
                        <PostCard image={post_image}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 p-2">
                        <PostCard image={post_image}/>
                    </div>
                    <div className="col-12 col-md-4 p-2">
                        <PostCard image={post_image}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostList;