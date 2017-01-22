import cookie from 'react-cookie';
import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from '../Loading/Loading';
import TweetService from '../../Services/tweets';

const style = {
  margin: 12,
  width: '200px'
};

class AntiFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: []
		};
		TweetService
			.searchByUser()
			.then(res => {
				this.setState({
					tweets: res
				});
			})
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
            <h2>Your personnalized Anti Feed</h2>

            {this.props.isLoading && <Loading />}

            {!this.props.isLoading && <div className="right-button main-button">
              <RaisedButton label="Refresh Feed" primary={true} style={style} onClick={this.props.addDefaultTweet} />
            </div>}
            
      			{!this.props.isLoading && <div className="box">
							{this.state.tweets && <FeedBox tweets={this.state.tweets} />}
						</div>}
            
					</div>
				</div>
			</div>
    );
  }
}

export default AntiFeed;