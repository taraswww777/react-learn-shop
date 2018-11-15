import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import News from "./components/News/News";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import Reducers from './reducers/imdex';
import {Provider} from "react-redux";
import Exception404 from "./components/Exception404";
import NewsDetail from "./components/News/NewsDetail";

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

// TODO: page tags
ReactDOM.render((
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path='/' exact component={Welcome}/>
					<Route path='/news' exact component={News}/>
					<Route path='/news/:newsId' component={NewsDetail}/>
					<Route path='*' component={Exception404}/>
				</Switch>
			</App>
		</Router>
	</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
