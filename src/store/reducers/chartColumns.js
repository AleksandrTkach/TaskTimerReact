import { BUILD_CHART_SUCCESS, BUILD_CHART_RESET } from '../types';

const getDefaultState = () => {
	const columns = [];
	for (let i = 0; i < 24; i++) {
		columns.push({
			name: i,
			uv: 0,
		});
	}
	return columns;
};

const initState = getDefaultState();

const chartColumns = (state = initState, action) => {
	switch (action.type) {
		case BUILD_CHART_SUCCESS:
			return action.chartColumns;

		case BUILD_CHART_RESET:
			return getDefaultState();

		default:
			return state;
	}
};

export default chartColumns;
