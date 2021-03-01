import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageWrapper from './PageWrapper/PageWrapper';

const App = ({ data }) => (
	<Router>
		<Switch>
			<Route path='/*' render={({ location }) => (
				<PageWrapper
					data={data}
					location={location}
				/>)} 
			/>
		</Switch>
	</Router>
);

export default App;
