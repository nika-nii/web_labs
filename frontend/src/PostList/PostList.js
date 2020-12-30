import React from 'react'
import './PostList.css'
import PostCard from "../PostCard/PostCard";

class PostList extends React.Component {
    render() {
        const posts = this.props.posts
        console.log(posts)
        const listPosts = posts.map((post, index) => {
                    return (
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 my-3">
                                <div className="container-fluid">
                                    <PostCard header_image={post.header_image} text={post.text}
                                          title={post.title} link={"post/" + post.id}/>
                                </div>
                            </div>
                        </div>
                    );
                });
        return (
            <div>
                <div className="container">
                        {listPosts}
                </div>
            </div>
        );
    }
}

export default PostList;