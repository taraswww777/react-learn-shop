// @flow

import type {ReducerAction} from "../../types/ReducerAction";
import {LOAD_DETAIL_NEWS_BY_ID, LOAD_LIST_NEWS_PAGE, loadDetailNewsById, loadListNewsPage} from "./loadListNewsPage";

function NewsReducers(state = {}, action?: ReducerAction) {
	switch (action.type) {
		case LOAD_LIST_NEWS_PAGE:
			return {
				...state,
				listNews: loadListNewsPage(action.payload.pageNum, action.payload.pageSize)
			};
		case LOAD_DETAIL_NEWS_BY_ID:
			return {
				...state,
				detailNews: loadDetailNewsById(action.payload.newsId)
			};
		default:
			return state;
	}
}

export default NewsReducers;
