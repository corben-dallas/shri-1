import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import './_bundle.scss';

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);