import React, {Component} from 'react';
import {Ceil, Container, H1, PreLoader, Row} from "../../rebass-grid-custom";
import styled from 'styled-components';
import {mapStateToProps} from "../../reducers/imdex";
import NewsDispatch from "./NewsDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import _ from 'lodash';
import ElementTags from "../../elements/ElementTags";

const ENewsDetail = styled.div``;

const ENewsDetailTitle = styled(H1)``;
const ENewsDetailDetailPicture = styled.img`
	max-width: 100%;
	max-height: 100%;
`;
const ENewsDetailDetailText = styled.div``;
const ENewsDetailDate = styled.div``;
const ENewsDetailTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

const ENewsDetailRange = styled.div``;

class NewsDetail extends Component {

	componentWillMount() {
		let newsId = _.get(this.props, 'match.params.newsId');
		this.props.loadDetailNewsById(newsId);
	}

	render() {
		let detailNews = _.get(this.props, 'store.NewsReducers.detailNews');

		return (
			<ENewsDetail>
				<Container>
					{detailNews ?
						<Row>
							<Ceil width={[1, 1 / 2]}>
								<ENewsDetailTitle>{detailNews.title}</ENewsDetailTitle>
								<ENewsDetailDate>{detailNews.date}</ENewsDetailDate>
								{detailNews.tags && <ENewsDetailTags>tags: <ElementTags tags={detailNews.tags}/></ENewsDetailTags>}
								<ENewsDetailRange>range: {detailNews.range}</ENewsDetailRange>
								<ENewsDetailDetailPicture src={detailNews.detailPicture}/>
							</Ceil>
							<Ceil width={[1, 1 / 2]}>
								<ENewsDetailDetailText>{detailNews.detailText}</ENewsDetailDetailText>
							</Ceil>
						</Row>
						:
						<Row>
							<Ceil>
								<PreLoader/>
							</Ceil>
						</Row>
					}
				</Container>
			</ENewsDetail>
		);
	}
}

export default withRouter(connect(mapStateToProps, NewsDispatch)(NewsDetail));
