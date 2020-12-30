import React from 'react'
import './Comment.css'

class Comment extends React.Component {
    render() {
        const comment = this.props.comment
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img-thumbnail" src={comment.user.profile_pic}
                             alt="Не загружено"/>
                    </div>
                    <div className="col-10">
                        <div className="text-inline justify-content-between d-flex">
                            <a href="#" className="">{comment.user.username}</a>
                            <div className="comments-date">{comment.creation_time}</div>
                        </div>
                        <hr/>
                        <div className="text-inline">
                            {comment.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;