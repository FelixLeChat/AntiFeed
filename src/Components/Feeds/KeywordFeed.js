import React, { Component } from 'react';
import FeedBox from '../Twitter/FeedBox';
import SearchBar from '../Search/SearchBar';
import RecentlyUsed from '../Search/RecentlyUsed';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from '../Loading/Loading';

const styles = {
	searchBarContainer: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	container: {
		marginTop: '40px'
	},
	button: {
		margin: 12,
  	width: '200px'
	}
}

class KeywordFeed extends Component {
  render() {
    return (
		<div style={styles.container}>
			<div className="row center-xs">
				<div className="col-xs-8 keywords">
					<RecentlyUsed keywords={this.props.keywords} search={this.props.doSearch} removeKeyword={this.props.removeKeyword} />
					<div style={styles.searchBarContainer}>
						<SearchBar search={this.props.doSearch}/>
					</div>
				</div>
			</div>

			<div className="row center-xs">
				<div className="col-xs-8">
					<div className="right-button main-button">
						<RaisedButton label="Refresh Feed" primary={true} style={styles.button} onClick={this.props.addDefaultTweets} />
					</div>
				</div>
			</div>

			<div className="row center-xs">
				{this.props.related && this.props.related.length > 0 && <div className="col-xs-4">
			 		<h3>Related</h3>
					<p>{this.props.related.map((item, id) => <span id={"as"+id}>{item + ", "}</span>)}</p>
				</div>}
				{this.props.opposite && this.props.opposite.length > 0 &&	<div className="col-xs-4">
					<h3>Opposite</h3>
					<p>{this.props.opposite.map((item, id) => <span id={"2"+id}>{item + ", "}</span>)}</p>
				</div>}
			</div>

			<div className="row center-xs">
				<div className="col-xs-4">
					<h2>"Pros" Feed</h2>
    			{!this.props.isLoading && <div className="box">
						{this.props.tweets.positive && <FeedBox tweets={this.props.tweets.positive} />}
					</div>}
				</div>
				<div className="col-xs-4">
					<h2>"Cons" Feed</h2>
    			{!this.props.isLoading && <div className="box">
						{this.props.tweets.negative && <FeedBox tweets={this.props.tweets.negative} />}
					</div>}
				</div>
			</div>

			<div className="row center-xs">
				<div className="col-xs-4">
					{this.props.isLoading && <Loading />}
				</div>
			</div>

		</div>
    );
  }
}

export default KeywordFeed;