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

class HashTagFeed extends Component {
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
        <div className="col-xs-4">
          <h2>Side 1</h2>
          {!this.props.isLoading && this.props.tweets && this.props.tweets.positive && <div className="box">
            {this.props.tweets.positive && <FeedBox tweets={this.props.tweets.positive} />}
          </div>}
        </div>
        <div className="col-xs-4">
          <h2>Side 2</h2>
          {!this.props.isLoading && this.props.tweets && this.props.tweets.negative && <div className="box">
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

export default HashTagFeed;