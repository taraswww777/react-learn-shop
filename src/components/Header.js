import React, {Component} from 'react';
import {Ceil, Row} from "../rebass-grid-custom";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import Nav from "./Nav";

const HeaderLink = styled(Link)`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	color: black;
	cursor: pointer;
	:hover{
		background:rgba(204,204,204,0.51);
	}
`;
const HeaderTitle = styled.div`

`;

const HeaderIcon = styled.img`
	max-width: 100%;
	max-height: 100%;
	height: 100px;
`;

class Header extends Component {
	render() {
		return (
			<Row>
				<Ceil width={[2 / 6]}>
					<HeaderLink to={'/'}>
						<HeaderIcon src={logo} title={'logo'} alt={'logo'}/>
						<HeaderTitle>rect-learn-shop</HeaderTitle>
					</HeaderLink>
				</Ceil>
				<Ceil
					width={[4 / 6]}
					css={{'align-items': 'center', display: 'flex'}}>
					<Nav/>
				</Ceil>
			</Row>
		);
	}
}

export default Header;
