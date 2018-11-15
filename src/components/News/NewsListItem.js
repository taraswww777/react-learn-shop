import React, {Component} from 'react';
import {LINK} from "../../rebass-grid-custom";
import styled from 'styled-components';

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
		return (
			<ENewsItem>
				<ENewsItemLink to={`/news/${this.props.news.id}`}>
					<ENewsItemTitle> {this.props.news.title}</ENewsItemTitle>
					<ENewsItemImg src={this.props.news.previewPicture}/>
					<ENewsItemDate> {this.props.news.date}</ENewsItemDate>
				</ENewsItemLink>
				<ENewsItemPreviewText> {this.props.news.previewText}</ENewsItemPreviewText>
			</ENewsItem>
		);
	}
}

export default NewsListItem;
