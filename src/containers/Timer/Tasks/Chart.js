import React, { PureComponent } from 'react';
import { ResponsiveContainer, BarChart, Bar,  CartesianGrid, XAxis, YAxis } from 'recharts';

import { connect } from 'react-redux';
import moment from 'moment';


class Chart extends PureComponent {
	constructor() {
		super();

		this.state = {
			columns: [],
			tasks: []
		};
	}

	async componentWillMount() {
		await this.setState({tasks: this.props.tasks});

	  this._getHoversAndMinutes();
		this._setValuesChart();
	}

	_getHoversAndMinutes = () => {
		const tasks = this.state.tasks.map(task => {
			return {
				startHover: moment(task.timeStart).format('H'),
				startMin: moment(task.timeStart).format('m'),
				startSec: moment(task.timeStart).format('ss'),
				endHover: moment(task.timeEnd).format('H'),
				endMin: moment(task.timeEnd).format('m'),
				endSec: moment(task.timeEnd).format('ss'),
			};
		});
		console.log('tasks: ', tasks, tasks.length);

		const taskLength = tasks.length - 1;

		for (let index = 0; index < taskLength; index++) {
			let nextIndex = index + 1;

			if (nextIndex < taskLength)

			if (tasks[index].startHover === tasks[nextIndex].startHover) {
				if (tasks[index].startMin === tasks[nextIndex].startMin) {
					tasks[index] = {
						startHover: tasks[index].startHover,
						endHover: tasks[index].endHover,
						startMin: String(Number(tasks[index].startMin) + 1),
						endMin: tasks[index].endMin,
					};
				}
			} else {
				console.log('ne sovp: ');
			}
		}

		// tasks.forEach((task, index, tasks) => {
		// 	let nextIndex = index + 1;
		// 	if (nextIndex < tasks.length)
		// 		console.log(task.startHover, tasks[nextIndex].startHover)
		// 	if (task.startHover === tasks[nextIndex].startHover) {
		// 		console.log('ok: ');
		// 	}
		// });

		this.setState({tasks});
		console.log('tasks: ', tasks);
	};

	_setValuesChart = () => {
		const columns = [];
		for (let i = 0; i <= 24; i++) {

			// for (const task of this.state.tasks) {
			// 	if (task.startHover === )
			// }

			columns.push(	{
				name: i, uv: 0, pv: 2400, amt: 2400,
			});
		}

		this.setState({
			columns,
		});
	};



	render() {
		const {columns} = this.state;
		return (
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={columns}>
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey="name" />
					<YAxis />
					<Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"/>
				</BarChart>
			</ResponsiveContainer>
		);
	}
}

const mapStateToProps = ({tasks}) => {
	return {
		tasks,
	};
};

export default connect(
	mapStateToProps,
)(Chart);
