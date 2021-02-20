import React from 'react';
import ReactDOM from 'react-dom';

import serverData from './Data/data.json';
import App from './Components/App';
import './_bundle.scss';

ReactDOM.render(
	<React.StrictMode>
		<App data={serverData} />
	</React.StrictMode>,
	document.getElementById('root')
);

window.renderTemplate = (alias, data) => {
	console.log(alias);
	console.log(data);
};
