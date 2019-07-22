import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Timer from 'containers/Timer/Timer';
import store from 'store';

const App = () => (
	<Provider store={store}>
		<Container>
			<BrowserRouter>
				<Timer />
			</BrowserRouter>
		</Container>
	</Provider>
);

export default App;
