import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  'marginTop': '25px',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'max-width': '350px',
};

// Feed box that contains the regular feed on the left and opposite feed on the right
class TwitterLogin extends Component {
  render() {
    return (
        <div style={{padding: '15px'}}>
            <Card style={style}>
                <CardTitle title="Twitter Login" subtitle="Free your personal anti-feed" />
                <CardText>
                Please click on the link bellow to allow us to access to your twitter feed.
                </CardText>
                <CardActions>
                <FlatButton label="Authorize" primary={true} href="http://localhost:4000/auth/twitter"/>
                </CardActions>
            </Card>
        </div>
    );
  }
}

export default TwitterLogin;