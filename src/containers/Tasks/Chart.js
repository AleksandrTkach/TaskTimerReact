import React, { PureComponent } from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';

import { connect } from 'react-redux';
import moment from 'moment';

class Chart extends PureComponent {
	constructor() {
		super();

		this.state = {
			columns: [],
			tasks: [],
			currentDay: moment().format('DD-MM-YYYY'),
		};
	}

	async componentDidMount() {
		await this._setNewFormatTasks();
		await this._setValuesChart();
	}

	_setNewFormatTasks = () => {
		const tasks = this.props.tasks.map(task => {
			return {
				startHour: Number(moment(task.timeStart).format('H')),
				startMin: Number(moment(task.timeStart).format('m')),
				startSec: Number(moment(task.timeStart).format('ss')),

				endHour: Number(moment(task.timeEnd).format('H')),
				endMin: Number(moment(task.timeEnd).format('m')),
				endSec: Number(moment(task.timeEnd).format('ss')),
			};
		});

		this.setState({ tasks });
	};

	_setValuesChart = async () => {
		const columns = [];
		for (let i = 0; i < 24; i++) {
			columns.push({
				name: i,
				uv: 0,
			});
		}

		for (const task of this.state.tasks) {
			this._setValueColumn(task, [...columns]);
		}
	};

	_setValueColumn = (task, columns) => {
		const diffHour = task.endHour - task.startHour;

		if (diffHour > 0) {
			for (let hour = task.startHour; hour < task.endHour; hour++) {
				if (task.startHour === hour) {
					columns[hour].uv += 60 - task.startMin;
				} else {
					columns[hour].uv += 60;
				}
			}
			columns[task.endHour].uv += task.endMin;

		} else if (diffHour === 0) {
			columns[task.endHour].uv += task.endMin - task.startMin;
		}

		this.setState({columns});
	};

	render() {
		const { columns } = this.state;
		return (
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={columns}>
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey="name" />
					<YAxis domain={[0, 60]} />
					<Tooltip content={<CustomTooltip />} />

					<Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		);
	}
}

const CustomTooltip = ({ payload, label, active }) => {
	if (active && payload[0].value > 0) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value}min`}</p>
			</div>
		);
	}

	return null;
};

const mapStateToProps = ({ tasks }) => {
	return {
		tasks,
	};
};

export default connect(mapStateToProps)(Chart);
