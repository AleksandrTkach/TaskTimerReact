import React, { PureComponent } from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
} from 'recharts';

import { connect } from 'react-redux';
import { buildChart } from 'store/actions';

import BtnGenerate from './BtnGenerate';

class Chart extends PureComponent {
	componentDidMount() {
		this.props.buildChart();
	}

	render() {
		return (
			<>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={this.props.chartColumns}>
						<CartesianGrid stroke="#ccc" />
						<XAxis dataKey="name" />
						<YAxis domain={[0, 60]} />
						<Bar
							type="monotone"
							dataKey="uv"
							barSize={30}
							fill="#8884d8"
							label={renderLabel}
						/>
					</BarChart>
				</ResponsiveContainer>

				<BtnGenerate />
			</>
		);
	}
}

const renderLabel = ({ payload, x, y, width, height, value }) => {
	if (value > 0) {
		let dy = 16;
		let fill = '#fff';

		if (value <= 5) {
			dy = -6;
			fill = '#000';
		}

		return (
			<text x={x + width / 2} y={y} fill={fill} textAnchor="middle" dy={dy}>
				{value}
			</text>
		);
	} else {
		return null;
	}
};

const mapStateToProps = ({ chartColumns }) => {
	return {
		chartColumns,
	};
};

const mapDispatchToProps = {
	buildChart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chart);
