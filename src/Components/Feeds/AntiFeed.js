import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import Loading from '../Loading/Loading';
import TweetService from '../../Services/tweets';

class AntiFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
      isLoading: true
		};
		TweetService
			.searchByUser()
			.then(res => {
				this.setState({
					tweets: res,
          isLoading: false
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

            {this.state.isLoading && <Loading />}
            
      			{!this.state.isLoading && <div className="box">
							{this.state.tweets && <FeedBox tweets={this.state.tweets} />}
						</div>}
            
					</div>
				</div>
			</div>
    );
  }
}

export default AntiFeed;