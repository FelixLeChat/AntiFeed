import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Favicon from 'react-favicon';

import './App.css';
import './css/flexboxgrid.min.css';

//ConUHacks2017!
class App extends Component {
	handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        	<div className="wrapper">
            <Favicon url={["http://historian-hare-63108.netlify.com/svg/bubble-burst.ico"]}/>
  	        <Header location={this.props.location} />
  	        <div>
  	        	{this.props.children}
  	        </div>
            <div className="push"></div>
          </div>
	        <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
