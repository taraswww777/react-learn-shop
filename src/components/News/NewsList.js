import React, {Component} from 'react';
import {Ceil, Row} from "../../rebass-grid-custom";
import NewsListItem from "./NewsListItem";


class NewsList extends Component {


	render() {
		return (
			<Row>
				{this.props.list && this.props.list.map((news, i) =>
					<Ceil
						key={i}
						width={[1 / 2, 1 / 3, 1 / 5]}
						mb={[2, 3, 4]}
					><NewsListItem news={news}/></Ceil>
				)}
			</Row>
		);
	}
}

export default NewsList;
