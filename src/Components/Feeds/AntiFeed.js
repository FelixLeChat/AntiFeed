import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from '../Loading/Loading';

const style = {
  margin: 12,
  width: '200px'
};

class AntiFeed extends Component {
  render() {
    return (
			<div className="anti-feed">
				<div className="row center-xs">
					<div className="col-xs-8">
            <h2>Your personnalized Anti Feed</h2>

            {this.props.isLoading && <Loading />}

            {!this.props.isLoading && <div className="right-button">
              <RaisedButton label="Refresh Feed" primary={true} style={style} onClick={this.props.addDefaultTweet} />
            </div>}
            
      			{!this.props.isLoading && <div className="box">
							{this.props.tweets && <FeedBox tweets={this.props.tweets} />}
						</div>}
            
					</div>
				</div>
			</div>
    );
  }
}

export default AntiFeed;