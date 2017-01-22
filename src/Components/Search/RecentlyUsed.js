import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
    cursor: 'hand'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
};


class RecentlyUsed extends Component {
	constructor(props) {
		super(props);
		this.handleTouchTap = this.handleTouchTap.bind(this);
	}

	handleTouchTap(event) {
		var keyword = event.target.innerText;
		this.props.search(keyword);
	}

  render() {
    return (
			<div style={styles.wrapper}>
				{this.props.keywords.map((item, id) => 
					<Chip style={styles.chip} key={id} 
					onTouchTap={this.handleTouchTap}
					onRequestDelete={() => this.props.removeKeyword(id)}
					>{item}</Chip>
					)}
      </div>
    );
  }
}

export default RecentlyUsed;