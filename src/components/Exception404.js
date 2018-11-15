import React, {Component} from 'react';
import {Ceil, Container, H1, Row} from "../rebass-grid-custom";

class Exception404 extends Component {

	render() {
		return (
			<Container>
				<Row>
					<Ceil>
						<H1>404 page note found</H1>
					</Ceil>
				</Row>
			</Container>
		);
	}
}

export default Exception404;
