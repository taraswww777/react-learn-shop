import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {createBrowserHistory as createHistory} from "history";
import NewsReducers from "./NewsReducers";

export function mapStateToProps(state) {
	return {
		store: state
	};
}

export default combineReducers({
	routing: routerReducer(createHistory),
	NewsReducers
})
