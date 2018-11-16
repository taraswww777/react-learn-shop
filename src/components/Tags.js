import React, {Component} from 'react';
import {Ceil, Container, H1, PreLoader, Row} from "../rebass-grid-custom";
import styled from 'styled-components';
import {mapStateToProps} from "../reducers/imdex";
import NewsDispatch from "./News/NewsDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NewsList from "./News/NewsList";
import _ from 'lodash';

const NewsComponent = styled.div`

`;

class Tags extends Component {

	componentDidMount() {
		let tag = _.get(this.props, 'match.params.tag');
		console.log('componentDidMount:', tag);
		this.props.loadListNewsPageByTag(tag);
	}

	componentDidUpdate() {
		let tag = _.get(this.props, 'match.params.tag');
		let currentTag = _.get(this.props, 'store.NewsReducers.currentTag');
		if (tag !== currentTag) {
			this.props.loadListNewsPageByTag(tag);
		}
	}

	render() {
		let listNews = _.get(this.props, 'store.NewsReducers.listNews');
		let tag = _.get(this.props, 'match.params.tag');
		console.log('render tag:', tag, 'listNews:', listNews);

		return (
			<NewsComponent>
				<Container>
					<Row>
						<Ceil>
							<H1>Tag: #{tag} </H1>
							{listNews ?
								<NewsList list={listNews}/>
								:
								<PreLoader/>
							}
						</Ceil>
					</Row>
				</Container>
			</NewsComponent>
		);
	}
}

export default withRouter(connect(mapStateToProps, NewsDispatch)(Tags));
