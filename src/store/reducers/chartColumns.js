import { BUILD_CHART_SUCCESS, BUILD_CHART_RESET } from '../types';
import { getDefaultChartColumns } from 'utils/utils';

const initState = getDefaultChartColumns();

const chartColumns = (state = initState, action) => {
	switch (action.type) {
		case BUILD_CHART_SUCCESS:
			return action.payload;

		case BUILD_CHART_RESET:
			return getDefaultChartColumns();

		default:
			return state;
	}
};

export default chartColumns;
