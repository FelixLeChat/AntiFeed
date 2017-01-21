import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AntiFeed from './Components/Feeds/AntiFeed';
import KeywordFeed from './Components/Feeds/KeywordFeed';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={KeywordFeed}/>
			<Route path='/anti-feed' component={AntiFeed}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
