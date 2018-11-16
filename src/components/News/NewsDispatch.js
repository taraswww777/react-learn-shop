// @flow

import {
	LOAD_DETAIL_NEWS_BY_ID,
	LOAD_LIST_NEWS_PAGE,
	LOAD_LIST_NEWS_PAGE_BY_TAG
} from "../../reducers/NewsReducers/loadListNewsPage";

const NewsDispatch = (dispatch: Function) => {
	return {
		loadListNewsPage: (pageNum?: number = 1, pageSize?: number = 10): void => {
			dispatch({type: LOAD_LIST_NEWS_PAGE, payload: {pageNum: pageNum, pageSize: pageSize}});
		},

		loadListNewsPageByTag: (tag: string, pageNum?: number = 1, pageSize?: number = 10): void => {
			console.log('loadListNewsPageByTag:',tag);
			dispatch({type: LOAD_LIST_NEWS_PAGE_BY_TAG, payload: {tag: tag, pageNum: pageNum, pageSize: pageSize}});
		},

		loadDetailNewsById: (newsId?: number | string): void => {
			setTimeout(() => {
					dispatch({type: LOAD_DETAIL_NEWS_BY_ID, payload: {newsId: newsId}})
				}, 500
			);
		}
	}
};

export default NewsDispatch;
