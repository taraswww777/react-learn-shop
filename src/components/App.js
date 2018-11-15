import React, {Component} from 'react';
import Header from "./Header";
import {Ceil, Container, Row} from "../rebass-grid-custom";

class App extends Component {
	render() {
		console.log('this', this);
		return (
			<div>
				<header>
					<Container>
						<Row>
							<Ceil><Header/></Ceil>
						</Row>
					</Container>
				</header>

				{this.props.children}

				<footer>
					<Container>
						<Row>
							<Ceil><Header/></Ceil>
						</Row>
					</Container>
				</footer>
			</div>
		);
	}
}

export default App;
