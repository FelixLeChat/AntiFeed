import React, { Component } from 'react';
import SearchBar from '../Search/SearchBar';
import RecentlyUsed from '../Search/RecentlyUsed';
import RaisedButton from 'material-ui/RaisedButton';

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
				<div className="col-xs-8">
					<RecentlyUsed keywords={this.props.keywords} search={this.props.doSearch} removeKeyword={this.props.removeKeyword} />
					<div style={styles.searchBarContainer}>
						<SearchBar search={this.props.doSearch}/>
					</div>
				</div>
			</div>

			<div className="center-button">
				<RaisedButton label="Refresh Feed" primary={true} style={styles.button} onClick={this.props.addDefaultTweets} />
			</div>
		</div>
    );
  }
}

export default KeywordFeed;