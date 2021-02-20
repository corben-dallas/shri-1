import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PagesTemplate from './PagesTemplate/PagesTemplate';

const App = ({ data }) => (
	<Router>
		<Switch>
			<Route path='/*' render={({ location }) => (
				<PagesTemplate
					data={data}
					location={location}
				/>)} 
			/>
		</Switch>
	</Router>
);

export default App;
