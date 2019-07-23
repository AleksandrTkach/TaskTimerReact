import { action, getDefaultChartColumns } from 'utils/utils';

export const BUILD_CHART = 'BUILD_CHART';
export const BUILD_CHART_SUCCESS = 'BUILD_CHART_SUCCESS';
export const BUILD_CHART_RESET = 'BUILD_CHART_RESET';

export const buildChart = () => action(BUILD_CHART);
export const buildChartReset = () => action(BUILD_CHART_RESET);
export const buildChartSuccess = chartColumns =>
  action(BUILD_CHART_SUCCESS, chartColumns);

const initState = getDefaultChartColumns();

export const chartColumns = (state = initState, action) => {
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
