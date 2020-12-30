import React from 'react';
import './CommentList.css';
import Comment from "../Comment/Comment";
import ApiService from "../Services/ApiService";

class CommentList extends React.Component {

    apiservice = new ApiService()

    state = {
        comments: null
    }

    componentDidMount() {
        this.apiservice.getComments(this.props.post_id)
                    .then((data) => {
                        this.setState({
                            comments: data
                        })
                    })
    }
    render() {
        const listComments = this.state.comments ? this.state.comments.map((comment) =>
            <li className="list-group-item d-flex">
                <Comment user={comment.user} content={comment.content} creation_time={comment.creation_time}/>
            </li>
        ) : [];
        return (
            <div className="container px-0 mb-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <ul className="list-group w-100">
                            {listComments}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;