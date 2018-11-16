// @flow

import {LOAD_DETAIL_NEWS_BY_ID, LOAD_LIST_NEWS_PAGE} from "../../reducers/NewsReducers/loadListNewsPage";

const NewsDispatch = (dispatch: Function) => {
	return {
		loadListNewsPage: (pageNum?: number = 1, pageSize?: number = 10): void => {
			dispatch({type: LOAD_LIST_NEWS_PAGE, payload: {pageNum: pageNum, pageSize: pageSize}});
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
