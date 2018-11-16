// @flow

export const LOAD_LIST_NEWS_PAGE = 'LOAD_LIST_NEWS_PAGE';
export const LOAD_DETAIL_NEWS_BY_ID = 'LOAD_DETAIL_NEWS_BY_ID';

export function loadListNewsPage(pageNumber?: number = 1, pageSize?: number = 10): Array<Object> {
	let news = require('../../data/news');

	// page navigation emulation
	let newsRes = [];
	if (news) {
		let startPosition = (pageNumber - 1) * pageSize;
		let finishPosition = startPosition + pageSize;
		newsRes = news.slice(startPosition, finishPosition);
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
