import React, { Component } from 'react';
import Img from 'react-image';

class PostSubmitter extends Component {
  constructor(props) {
        super(props);
        this.state = { 
            "post": [] 
        };

        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();

        var data = {
            
        };
    }

    render() {
        return (
            <div>
                <p> Submit Post </p>
            </div>
        );
    }
}

export default PostSubmitter;