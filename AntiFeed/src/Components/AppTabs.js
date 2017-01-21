import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';

const style = {
	width: '100%',
}


class AppTabs extends Component {
  render() {
    return (
		<Tabs style={style} value={this.props.location.pathname}>
			<Tab value="/" label="KeywordFeed" containerElement={<Link to="/"></Link>} />
	    <Tab value="/anti-feed" label="AntiFeed" containerElement={<Link to="/anti-feed"></Link>} />
	  </Tabs>
    );
  }
}

export default AppTabs;