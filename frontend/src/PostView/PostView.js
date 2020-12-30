import React from 'react'
import Post from "../Post/Post";
import CommentList from "../CommentList/CommentList";
import image from "../static/images/post_3.jpg";

class PostView extends React.Component {
    render() {
        return (
            <main>
                <Post match={this.props.match}/>
                <CommentList post_id = {this.props.match.params.id}/>
            </main>
        )
    }
}

export default PostView;