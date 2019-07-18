import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';

import Timer from 'containers/Timer/Timer';
import store from 'store';

const App = () => (
	<Provider store={store}>
		<Container>
			<Timer />
		</Container>
	</Provider>
);

export default App;
