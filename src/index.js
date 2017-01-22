import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AntiFeed from './Components/Feeds/AntiFeed';
import KeywordFeed from './Components/Feeds/KeywordFeed';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { keywords: ["trump", "hilary"], keywordsTweets: {good:[], bad:[]}, antiTweets: []};

		this.addDefaultTweets = this.addDefaultTweets.bind(this);
		this.addDefaultTweet = this.addDefaultTweet.bind(this);
		this.removeKeyword = this.removeKeyword.bind(this);
		this.doSearch = this.doSearch.bind(this);
	}

	//-------------------------------- Anti Feed --------------------------------------//
	addDefaultTweet() {
		var newTweets = this.state.antiTweets;
		newTweets.push({
			name: "Felix",
			handler: "@felixlechat",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			profileUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
		});

		this.setState({antiTweets: newTweets});
	}

	//-------------------------------- Keywords Feed --------------------------------------//
	addDefaultTweets() {
		var newGoodTweets = this.state.keywordsTweets.good;
		newGoodTweets.push({
			name: "Felix - good",
			handler: "@felixlechat",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			profileUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
		});

		var newBadTweets = this.state.keywordsTweets.bad;
		newBadTweets.push({
			name: "Felix - good",
			handler: "@felixlechat",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			profileUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
		});

		this.setState({keywordsTweets: {good: newGoodTweets, bad: newBadTweets}});
	}

	doSearch(keyword) {
		const normalizedKeyword = keyword.toLowerCase();
		const newArr = [
			...this.state.keywords.filter(x => x !== normalizedKeyword), 
			normalizedKeyword
		];
		this.setState({
			keywords: newArr,
		});
	}

	removeKeyword(id) {
		const keywords = [ ...this.state.keywords.slice(0, id), ...this.state.keywords.slice(id + 1) ]
		this.setState({
			keywords: keywords
		});
	}

	//-------------------------------------------------------------------------------------//
  render() {
    return (
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={() => <KeywordFeed keywords={this.state.keywords} doSearch={this.doSearch} removeKeyword={this.removeKeyword} />} />
					<Route path='/anti-feed' component={() => <AntiFeed tweets={this.state.antiTweets} addDefaultTweet={this.addDefaultTweet} />}/>
				</Route>
			</Router>
    );
  }
}

ReactDOM.render(
	<MainContainer />,
  document.getElementById('root')
);
