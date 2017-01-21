import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Components/Header';
import './App.css';

class App extends Component {
	handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Header />

				<Tabs>
					<Tab label="Anti Feed" >
			      <div>
			        <h2>Tab Three</h2>
			      </div>
			    </Tab>

			    <Tab label="#Trump" >
			      <div>
			        <h2>Tab One</h2>
			      </div>
			    </Tab>

			    <Tab label="#Prolife" >
			      <div>
			        <h2>Tab Two</h2>
			      </div>
			    </Tab>

			  </Tabs>

      </MuiThemeProvider>
    );
  }
}

export default App;
