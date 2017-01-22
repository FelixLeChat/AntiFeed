import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';

const style = {
	width: '100%',
};


class AppTabs extends Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
		<Tabs style={style} value={this.props.location.pathname}>
			<Tab value="/" label="Keyword Search" containerElement={<Link to="/"></Link>} onClick={this.scrollToTop} />
      <Tab value="/hashtags" label="Hashtags Search" containerElement={<Link to="/hashtags"></Link>} onClick={this.scrollToTop} />
      <Tab value="/anti-feed" label="Anti Feed" containerElement={<Link to="/anti-feed"></Link>} onClick={this.scrollToTop} />
	  </Tabs>
    );
  }
}

export default AppTabs;