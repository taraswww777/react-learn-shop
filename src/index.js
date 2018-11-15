import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import News from "./components/News";

ReactDOM.render((
	<Router>
		<App>
			<Switch>
				<Route path='/' exact component={Welcome}/>
				<Route path='/news' component={News}/>
			</Switch>
		</App>
	</Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
