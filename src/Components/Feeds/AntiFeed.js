import cookie from 'react-cookie';
import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import RaisedButton from 'material-ui/RaisedButton';
import TweetService from '../../Services/tweets';

const style = {
  margin: 12,
  width: '200px'
};

class AntiFeed extends Component {
	componentWillMount() {
    const id = cookie.load('connect.cid');
		console.log(id);
  }
	constructor(props) {
		super(props);
		TweetService
			.searchByUser()
			.catch(() => {
				console.log('catch');
				this.props.history.push('/twitter-login');
			})
	}
  render() {
    return (
			<div className="anti-feed">
				<div className="row center-xs">
					<div className="col-xs-8">
      			<div className="box">
							{this.props.tweets && <FeedBox tweets={this.props.tweets} />}
						</div>
					</div>
				</div>

				<div className="center-button">
					<RaisedButton label="Refresh Feed" primary={true} style={style} onClick={this.props.addDefaultTweet} />
				</div>

			</div>
    );
  }
}

export default AntiFeed;