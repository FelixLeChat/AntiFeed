import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppTabs from './AppTabs';
import Logo from './Logo';

const style = {
	flexWrap: 'wrap',
  padding: '0'
};

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<AppBar title="Anti Feed" style={style} iconElementLeft={<Logo />} >
	        <AppTabs location={this.props.location} />
      	</AppBar>
      </div>
    );
  }
}

export default Header;