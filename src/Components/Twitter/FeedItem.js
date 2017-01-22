import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionShare  from 'material-ui/svg-icons/social/share';

const styles = {
  card: {
    'marginTop': 12,
  },
  nofitication: {
    backgroundColor: 'black'
  }
};

// Feed box that contains the regular feed on the left and opposite feed on the right
class FeedItem extends Component {
  render() {

  	if(!this.props.tweet){
  		return;
  	}
  	var {text, profileUrl, name, handler, retweets, favorites} = this.props.tweet;

    return (
    	<Card style={styles.card}>
    		<CardHeader title={name} subtitle={handler} avatar={profileUrl} />
		    <CardText>{text}</CardText>
        
        <Badge badgeContent={retweets} badgeStyle={{top: 12, right: 12, backgroundColor: '#333333', color: '#FAFAFA'}}>
          <IconButton tooltip="RETWEETS" iconStyle={{fill: '#5C913B'}}>
            <ActionShare />
          </IconButton>
        </Badge>

        <Badge badgeContent={favorites} badgeStyle={{top: 12, right: 12, backgroundColor: '#333333', color: '#FAFAFA'}}>
          <IconButton tooltip="FAVORITES" iconStyle={{fill: '#FFAC33'}}>
            <ActionGrade />
          </IconButton>
        </Badge>

  		</Card>
    );
  }
}

export default FeedItem;