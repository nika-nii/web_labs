import React from 'react'
import './Post.css'
import ApiService from "../Services/ApiService";

class Post extends React.Component {

    apiservice = new ApiService();

    state = {
        id: null,
        user: null,
        title: null,
        text: null,
        header_image: null,
        creation_time: null,
        content: null,
    }

    componentDidMount() {
        this.apiservice
            .getPost(this.props.match.params.id)
            .then((data) => {
                this.setState({
                    id: data.id,
                    user: data.user,
                    title: data.title,
                    text: data.text,
                    header_image: data.header_image,
                    creation_time: data.creation_time,
                });
                this.apiservice
                    .getContent(data.id)
                    .then((data) => {
                        this.setState({
                            content: data,
                        })
                    })

            })
    }

    render() {
        const {id, user, title, text, header_image, creation_time, content} = this.state

        const rendered_content = content ? content.map((piece) => {
                if (piece.image_data) {
                    return <img className="mx-auto d-block rounded post-img m-3 w-100" src={piece.image_data}
                                alt={piece.description}/>
                }
                if (piece.text_data) {
                    return (
                        <div>
                            <h4>{piece.description}</h4>
                            <p className="card-text">
                                {piece.content}
                            </p>
                        </div>
                    )
                }
                if (piece.code_data) {
                    return (
                        <div>
                            <h4>{piece.description}</h4>
                            <pre><code>{piece.content}</code></pre>
                        </div>
                    )
                }
                return <p>Неопознанный контент</p>
            }
        ) : []

        return (
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 p-1">
                        <div className="card">
                            <img className="post-img-top card-img-top" src={header_image}
                                 alt="Картинка у поста"/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{creation_time}</h6>
                                {rendered_content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;