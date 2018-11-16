import React, {Component} from 'react';
import styled from "styled-components";
import {LINK} from "../rebass-grid-custom";
import {withRouter} from "react-router-dom";
import _ from 'lodash';

const ETags = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const ETagsLink = styled(LINK)`
	padding: 5px;
	text-decoration: underline;
	cursor:pointer;
	
	:hover{
		transition: 0.5s;
		text-decoration: none;
	}
	
	::before{
		content:'#';
		display: inline-block;
	}
	
	::after{
		content:',';
		display: inline-block;
	}
	:last-child{
		::after{
			content:'';
		}
	}
`;

const ETagsLinkCurrent = styled(ETagsLink)`
	background:rgba(255,255,0,0.5);
`;

class ElementTags extends Component {

	render() {
		let currentTag = _.get(this.props, 'match.params.tag');

		return (<ETags>
			{this.props.tags.map((tag, i) => currentTag !== tag ?
				<ETagsLink key={i} to={`/tag/${tag}`}>{tag}</ETagsLink>
				:
				<ETagsLinkCurrent key={i} to={`/tag/${tag}`}>{tag}</ETagsLinkCurrent>
			)}
		</ETags>);
	}
}

export default withRouter(ElementTags);
