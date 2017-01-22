import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ActionShare  from 'material-ui/svg-icons/social/share';
import {grey400} from 'material-ui/styles/colors';

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
  },
  tags : {
    color: '#1da1f2',
    fontWeight: 'bold'
  }
};

// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}
  	var {text, profileUrl, name, handle, retweets, hashtags} = this.props.tweet;

    if(text) {
      // Remove retweets
      text = text.replace(/RT\s/g, "");

      // Add style to #
      text = text.replace(/(#[^\s]*)/g, "<span style=\"color:#1da1f2;font-weight:bold;white-space:nowrap;\">$1</span>");

      // Add style to @
      text = text.replace(/(@[^\s]*)/g, "<span style=\"color:#1da1f2;font-weight:bold;white-space:nowrap;\">$1</span>");

      // Add link to http
      text = text.replace(/(https:\/\/[^\s]*)/g, "");
      //text = text.replace(/(https:\/\/[^\s]*)/g, "<a href=\"$1\" target=\"_blank\">$1</a>");
    }


    var tags = hashtags.map((item, id) => <span style={styles.tags} id={id}>{'#' + item + ', '}</span>);

    return (
    	<Card style={styles.card}>
    		<CardHeader title={name} subtitle={"@" + handle} avatar={profileUrl} />
        <CardText style={styles.cardText} dangerouslySetInnerHTML={{__html: '<p>' + text + '</p>'}} />
        <CardText style={styles.cardText} >
          {tags && tags.length > 0 && <p>{tags}</p>}
        </CardText>
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