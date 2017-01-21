import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}

  	var text = this.props.tweet.text;
  	var imageLink = this.props.tweet.profileUrl;

    return (
    	<Card>
    		<CardHeader title="Title" subtitle="Subtitle" avatar={imageLink} />
		    <CardText>{text}</CardText>
  		</Card>
    );
  }
}

export default FeedItem;