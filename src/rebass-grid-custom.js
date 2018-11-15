import React from 'react'
import {Box, Flex} from '@rebass/grid'
import styled from 'styled-components';

export const Container = props =>
	<Box
		{...props}
		mx='auto'
		px={2}
		css={{
			maxWidth: '1024px',
		}}
	/>;

export const Row = props => (
	<Flex
		{...props}
		mx={-2}
	/>
);

export const Ceil = props => (
	<Box
		{...props}
		px={2}
		flex='1 1 auto'
	/>
);

export const H1 = styled.h1`
	color: green;
`;
