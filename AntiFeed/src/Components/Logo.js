import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton'


class Logo extends Component {
  render() {
    return (
      <IconButton>
      	<img className="logo" src="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded" />
      </IconButton>
    );
  }
}

export default Logo;