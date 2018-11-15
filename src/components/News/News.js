import React, {Component} from 'react';
import {Ceil, Container, H1, Row} from "../../rebass-grid-custom";
import styled from 'styled-components';
import {mapStateToProps} from "../../reducers/imdex";
import NewsDispatch from "./NewsDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NewsList from "./NewsList";
import _ from 'lodash';

const NewsComponent = styled.div`

`;

class News extends Component {

	componentWillMount() {
		this.props.loadListNewsPage();
	}

	render() {
		let listNews = _.get(this.props, 'store.NewsReducers.listNews');

		return (
			<NewsComponent>
				<Container>
					<Row>
						<Ceil>
							<H1>News</H1>
							<NewsList list={listNews}/>
						</Ceil>
					</Row>
				</Container>
			</NewsComponent>
		);
	}
}

export default withRouter(connect(mapStateToProps, NewsDispatch)(News));
