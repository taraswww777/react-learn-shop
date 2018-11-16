// @flow

import type {TypeNews} from "../../types/TypeNews";

export const LOAD_LIST_NEWS_PAGE = 'LOAD_LIST_NEWS_PAGE';
export const LOAD_LIST_NEWS_PAGE_BY_TAG = 'LOAD_LIST_NEWS_PAGE_BY_TAG';
export const LOAD_DETAIL_NEWS_BY_ID = 'LOAD_DETAIL_NEWS_BY_ID';

/**
 * page navigation emulation
 *
 * @param list
 * @param pageNumber
 * @param pageSize
 * @returns {Array}
 */
function getPageFromArray(list: Array<Object>, pageNumber?: number = 1, pageSize?: number = 10): Array<Object> {
	let listResult = [];
	if (list) {
		let startPosition = (pageNumber - 1) * pageSize;
		let finishPosition = startPosition + pageSize;
		listResult = list.slice(startPosition, finishPosition);
	}

	return listResult;
}


export function loadListNewsPage(pageNumber?: number = 1, pageSize?: number = 10): Array<Object> {
	let listNews = require('../../data/news');

	return getPageFromArray(listNews, pageNumber, pageSize);
}

export function loadListNewsPageByTag(tag: string, pageNumber?: number = 1, pageSize?: number = 10): Array<Object> {
	let listNews: Array<Object> = require('../../data/news');

	let newsRes = [];
	if (listNews) {
		listNews
			.filter(news => news.tags.indexOf(tag) > -1)
			.map((news: TypeNews) => newsRes.push(news));

		newsRes = getPageFromArray(newsRes, pageNumber, pageSize);
	}

	return newsRes;
}


export function loadDetailNewsById(newsId?: number | string): Object {
	let newsLoaded = require('../../data/news');

	// page navigation emulation
	let newsRes = {};
	if (newsLoaded) {
		newsLoaded.filter(news => news.id === newsId)
			.map(news => {
				if (!newsRes.id) {
					newsRes = news;
				}
				return newsRes;
			});
	}

	return newsRes;
}
