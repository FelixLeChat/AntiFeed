import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';

import './App.css';

//ConUHacks2017!
class App extends Component {
	handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <MuiThemeProvider>
      	<div>
	        <Header location={this.props.location} />
	        <div>
	        	{this.props.children}
	        </div>
	        
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
