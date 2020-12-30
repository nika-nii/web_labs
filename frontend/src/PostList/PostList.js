import React from 'react'
import './PostList.css'
import PostCard from "../PostCard/PostCard";

class PostList extends React.Component {
    render() {
        const posts = this.props.posts
        // elementary, Watson
        const evenPosts = posts.filter((post, index) => index % 2 === 0 && index !== 0)
        const oddPosts = posts.filter((post, index) => index % 2 === 1)
        const betterPosts = evenPosts.map((p, i) => [p, oddPosts[i]])
        betterPosts.unshift(posts[0])
        const listPosts = betterPosts.map((postSet, index) => {
                if (index === 0) {
                    return <div className="row justify-content-center">
                        <div className="col-12 col-md-8 my-3">
                            <PostCard post_image={postSet.post_image} post_text={postSet.post_text}
                                      post_title={postSet.post_title} post_link={postSet.post_link}/>
                        </div>
                    </div>
                }
                return <div className="row justify-content-center">
                    {
                        postSet.map((post) =>
                            <div className="col-12 col-md-4 my-3">
                                <PostCard
                                    post_image={post.post_image}
                                    post_text={post.post_text}
                                    post_title={post.post_title}
                                    post_link={post.post_link}
                                />
                            </div>
                        )
                    }
                </div>
            }
        )
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        {listPosts}
                    </div>
                </div>
            </div>
        );
    }
}

export default PostList;