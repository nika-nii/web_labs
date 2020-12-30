import React from 'react'
import './Comment.css'
import ApiService from "../Services/ApiService";
import {Link} from "react-router-dom";

class Comment extends React.Component {

    apiservice = new ApiService();

    state = {
        user: null,
        creation_time: null,
        content: null,
    }

    componentDidMount() {
        this.apiservice
            .getUser(this.props.user)
            .then((data) => {
                console.log(data);
                this.setState({
                    user: data,
                    content: this.props.content,
                    creation_time: this.props.creation_time,
                });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img-thumbnail" src={this.state.user ? this.state.user.profile_pic : ""}
                             alt="Не загружено"/>
                    </div>
                    <div className="col-10">
                        <div className="text-inline justify-content-between d-flex">
                            <Link to={"/user/" + this.props.user} className="">{this.state.user ? this.state.user.username : ""}</Link>
                            <div className="comments-date">{this.state.creation_time}</div>
                        </div>
                        <hr/>
                        <div className="text-inline">
                            {this.state.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;