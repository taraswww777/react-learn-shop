import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	color: black;
`;

const NavListItem = styled.div`
margin-right: 10px;
`;

const NavLink = styled(Link)`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	color: black;
	cursor: pointer;
	padding: 5px 10px;

	:hover{
		background: rgba(92,92,92,0.5);
	}
`;

class Nav extends Component {
	render() {
		return (
			<NavList>
				<NavListItem><NavLink to={'/'}>Главная</NavLink></NavListItem>
				<NavListItem><NavLink to={'/news'}>Новости</NavLink></NavListItem>
			</NavList>
		);
	}
}

export default Nav;
