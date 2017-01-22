import React, { Component } from 'react';
import SearchBar from '../Search/SearchBar';
import RecentlyUsed from '../Search/RecentlyUsed';

const styles = {
	searchBarContainer: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '450px',
		marginLeft: 'auto',
		marginRight: 'auto',
	}
}

class KeywordFeed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keywords: ["trump", "hilary"]
		};

		this.doSearch = this.doSearch.bind(this);
		this.removeKeyword = this.removeKeyword.bind(this);
	}

	doSearch(keyword) {
		const normalizedKeyword = keyword.toLowerCase();
		const newArr = [
			...this.state.keywords.filter(x => x != normalizedKeyword), 
			normalizedKeyword
		];
		this.setState({
			keywords: newArr,
		});
	}

	removeKeyword(id) {
		const keywords = [ ...this.state.keywords.slice(0, id), ...this.state.keywords.slice(id + 1) ]
		this.setState({
			keywords
		});
	}

  render() {
    return (
		<div>
			<h2>Keyword Feed</h2>
			<RecentlyUsed keywords={this.state.keywords} search={this.doSearch} removeKeyword={this.removeKeyword} />
			<div style={styles.searchBarContainer}>
				<SearchBar search={this.doSearch}/>
			</div>
			
		</div>
    );
  }
}

export default KeywordFeed;