import React from 'react'
import './UserCard.css'
import ApiService from "../Services/ApiService";
import {Link} from "react-router-dom";

class UserCard extends React.Component {

    apiservice = new ApiService();

    state = {
        user: null,
    }

    componentDidMount() {
        this.apiservice
            .getUser(this.props.user_id)
            .then((data) => {
                console.log(data);
                this.setState({
                    user: data,
                });
            })
    }

    render() {
        return (
            <div className="container px-0 mb-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-thumbnail"
                                         src={this.state.user ? this.state.user.profile_pic : ""}
                                         alt="Не загружено"/>
                                </div>
                                <div className="col-10">
                                    <div className="text-inline justify-content-between d-flex">
                                        <Link to={"/user/" + this.props.user_id}
                                              className="">{this.state.user ? this.state.user.username : ""}</Link>
                                    </div>
                                    <hr/>
                                    <div className="text-inline">
                                        {this.state.user ? this.state.user.email ? this.state.user.email : "Почта отсутствует" : "Пользователь не загружен"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;