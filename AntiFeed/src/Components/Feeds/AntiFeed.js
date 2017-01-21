import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class AntiFeed extends Component {
	constructor(props) {
		super(props);

		this.state = { tweets: []};

		this.addDefaultTweet = this.addDefaultTweet.bind(this);
	}

	addDefaultTweet() {
		var newTweets = this.state.tweets;
		newTweets.push({ 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			profileUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
		});

		this.setState({tweets: newTweets});
	}

  render() {
    return (
			<div className="anti-feed">
				<h1>Anti Feed</h1>

				<div className="row center-xs">
					<div className="col-xs-8">
	        	<div className="box">
							<FeedBox tweets={this.state.tweets} />
						</div>
					</div>
				</div>

				<div className="center-button">
					<RaisedButton label="Primary" primary={true} style={style} onClick={this.addDefaultTweet} />
				</div>
			</div>
    );
  }
}

export default AntiFeed;