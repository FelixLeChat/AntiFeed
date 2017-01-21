import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const style = {
  'marginTop': 12,
};

// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}
  	var {text, profileUrl, name, handler} = this.props.tweet;

    return (
    	<Card style={style}>
    		<CardHeader title={name} subtitle={handler} avatar={profileUrl} />
		    <CardText>{text}</CardText>
  		</Card>
    );
  }
}

export default FeedItem;