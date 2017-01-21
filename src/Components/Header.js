import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppTabs from './AppTabs';
import Logo from './Logo';

const style = {
	flexWrap: 'wrap'
};

class Header extends Component {
  render() {
    return (
      <div>
      	<AppBar title="AntiFeed - We burst your social bubble" style={style} iconElementLeft={<Logo />} >
	        <AppTabs location={this.props.location} />
      	</AppBar>
      </div>
    );
  }
}

export default Header;