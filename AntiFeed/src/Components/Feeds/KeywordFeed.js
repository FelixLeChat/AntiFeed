import React, { Component } from 'react';
import SearchBar from '../Search/SearchBar';
import RecentlyUsed from '../Search/RecentlyUsed';

class KeywordFeed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			RecentlyUsed: ["Trump", "Hilary"]
		};

		this.doSearch = this.doSearch.bind(this);
	}

	doSearch(keyword) {
		console.log(keyword);
	}

  render() {
    return (
		<div>
			<h2>Keyword Feed</h2>
			<RecentlyUsed keywords={this.state.RecentlyUsed} search={this.doSearch} />
			<SearchBar />
		</div>
    );
  }
}

export default KeywordFeed;