import React from 'react'
import './PostCard.css'
import {Link} from "react-router-dom";

class PostCard extends React.Component {
    render() {
        return (
            <div className="card h-100">
                <img className="post-img-top card-img-top" src={this.props.header_image} alt="Картинка у поста"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <Link to={this.props.link} t className="btn btn-primary">Читать далее...</Link>
                </div>
            </div>
        )
    }
}

export default PostCard;