// @flow

import type {ReducerAction} from "../../types/ReducerAction";
import {
	LOAD_DETAIL_NEWS_BY_ID,
	LOAD_LIST_NEWS_PAGE,
	LOAD_LIST_NEWS_PAGE_BY_TAG,
	loadDetailNewsById,
	loadListNewsPage, loadListNewsPageByTag
} from "./loadListNewsPage";

function NewsReducers(state: Object = {}, action: ReducerAction) {
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
		case LOAD_LIST_NEWS_PAGE_BY_TAG:
			return {
				...state,
				listNews: loadListNewsPageByTag(action.payload.tag, action.payload.pageNum, action.payload.pageSize),
				currentTag: action.payload.tag,
			};
		default:
			return state;
	}
}

export default NewsReducers;
