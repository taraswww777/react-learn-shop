import React, {Component} from 'react';
import {LINK} from "../../rebass-grid-custom";
import styled from 'styled-components';
import _ from 'lodash';
import ElementTags from "../../elements/ElementTags";
import type {TypeNews} from "../../types/TypeNews";

const ENewsItem = styled.div``;
const ENewsItemTitle = styled.div`
	text-align: center;
`;
const ENewsItemImg = styled.img`
	max-width: 100%;
	margin: 10px auto;
`;
const ENewsItemPreviewText = styled.div``;
const ENewsItemDate = styled.div`
	text-align: left;
`;

const ENewsItemLink = styled(LINK)`
	color: #666;
	font-weight: bold;
	display: inline-block;

	:hover{
		background: rgba(102,102,102,0.5);
	}
`;

class NewsListItem extends Component {


	render() {
		let news: TypeNews = _.get(this.props, 'news');
		return (
			<ENewsItem>
				<ENewsItemLink to={`/news/${news.id}`}>
					<ENewsItemTitle> {news.title}</ENewsItemTitle>
					<ENewsItemImg src={news.previewPicture}/>
					<ENewsItemDate> {news.date}</ENewsItemDate>
				</ENewsItemLink>
				{news.tags && <ENewsItemDate> <ElementTags tags={news.tags}/></ENewsItemDate>}
				<ENewsItemPreviewText> {news.previewText}</ENewsItemPreviewText>
			</ENewsItem>
		);
	}
}

export default NewsListItem;
