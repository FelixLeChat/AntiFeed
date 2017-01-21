import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';

class AntiFeed extends Component {
	constructor(props) {
		super(props);

		this.state = { tweets: []};
	}

  render() {
    return (
			<div>
				<FeedBox tweets={this.tweets} />
			</div>
    );
  }
}

export default AntiFeed;