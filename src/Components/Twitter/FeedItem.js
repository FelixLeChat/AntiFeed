import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import ActionShare  from 'material-ui/svg-icons/social/share';
import {grey400, blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  card: {
    'marginTop': 12,
  },
  nofitication: {
    backgroundColor: 'black'
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '0',
    paddingTop: '0',
  },
  cardVal: {
    display: 'flex',
    alignItems: 'center',
    color: grey400,
    padding: '0 16px 16px 16px',
  },
  cardInVal: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  }
};

// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}
  	var {text, profileUrl, name, handle, retweets, favorites} = this.props.tweet;

    text = text.replace(/(@[^\s]*)/g, "<span style=\"color:#1da1f2;font-weight:bold\">$1</span>");

    return (
    	<Card style={styles.card}>
    		<CardHeader title={name} subtitle={"@" + handle} avatar={profileUrl} />
        <CardText style={styles.cardText} dangerouslySetInnerHTML={{__html: text}} />
        <div style={styles.cardVal}>
          <div style={styles.cardInVal}>
            <ActionShare color={grey400}/>
            <div style={{marginRight: '5px'}}>{retweets}</div>
          </div>
        </div>
  		</Card>
    );
  }
}

export default FeedItem;