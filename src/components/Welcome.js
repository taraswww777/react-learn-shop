import React, {Component} from 'react';
import {Ceil, Container, H1, Row} from "../rebass-grid-custom";
import styled from 'styled-components';
import {Link} from "react-router-dom";


class Welcome extends Component {


	render() {
		return (
			<div>
				<Container>
					<Row>
						<Ceil>
							<H1>Welcome</H1>
						</Ceil>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Welcome;
