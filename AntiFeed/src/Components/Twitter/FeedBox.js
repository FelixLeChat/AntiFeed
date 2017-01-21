import React, { Component } from 'react';
import FeedItem from './FeedItem';


// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedBox extends Component {
  render() {
    return (
      <div>
      	<FeedItem />
      	<FeedItem />
      </div>
    );
  }
}

export default FeedBox;