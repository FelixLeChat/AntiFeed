import React, { Component } from 'react';
import service from '../../Services/tweets';

// Feed box that contains the regular feed on the left and opposite feed on the right
class TwitterLoginComplete extends Component {
    constructor(props) {
        super(props);
        const tokens = {
            oauth_token: this.props.location.query.oauth_token,
            oauth_verifier: this.props.location.query.oauth_verifier
        };
        console.log(tokens);
        service
            .authenticate(tokens)
            .then(() => {
                this.props.history.push('/anti-feed');
            });
    }
  render() {
    return (
        <div style={{padding: '15px'}}>
            <h1>Connected</h1>
        </div>
    );
  }
}

export default TwitterLoginComplete;
