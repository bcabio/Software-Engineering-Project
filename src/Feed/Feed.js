import React, { Component } from 'react';
import Post from '../Post/Post';
import "./Feed.css";
import Img from 'react-image';

const URL = (process.env.REACT_APP_ENV === "production" ? 'https://swe-server.herokuapp.com' : 'http://localhost:5000')

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "posts": [

            ]
        };
    }

    componentDidMount() {
        fetch(URL + '/posts', {
            headers: {
                'Accept': 'application/json'
            },
            referrer: 'no-refferer',
            mode: 'cors'
        })
            .then(response=> response.json())
            .then(data => {
                this.setState({"posts": data});
            });
    }

    // TODO: edit this to generate multiple cards within the div
    render() {
        const cards = this.state.posts.map((post) =>
                <div key={post._id} className="card Feed" style={{width: `18rem`}}>
                    <Img className="card-img-top" src={post.pictureLink} alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title"> {post.title} </h3>
                        <p className="card-text"> {post.description} </p>
                    </div>
                </div>
            );

        // TODO: Change className to card-columns for the Feed Container
        return (<div>
                    <h1> List of Posts </h1>
                    <div className="container Feed-Card-Container">
                        {cards}
                    </div>
                </div>
        );
    }
}
export default Feed;