import React, { Component } from 'react';
import FeedItem from './FeedItem';


// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedBox extends Component {
  render() {
  	console.log(this.props.tweets);

    return (
      <div className="feed-box">
      	{this.props.tweets && this.props.tweets.map((item, id) =>
      		<FeedItem tweet={item} key={id} />
      	)}
      </div>
    );
  }
}

export default FeedBox;