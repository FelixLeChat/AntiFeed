import React, { Component } from 'react';

// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}

  	var text = this.props.tweet.text;
  	var imageLink = this.props.tweet.profileUrl;

    return (
      <div>
      	{imageLink && <img src={imageLink} role="presentation" />}
      	{text && <p>{text}</p>}
      </div>
    );
  }
}

export default FeedItem;