import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton'
import Isvg from 'react-inlinesvg';


class Logo extends Component {
  render() {
    return (
      <IconButton>
      	<div className="logo">
      		<Isvg src="/svg/bubble-burst.svg" />
      	</div>
      </IconButton>
    );
  }
}

export default Logo;