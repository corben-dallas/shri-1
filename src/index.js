import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

import './_bundle.scss';

import serverData from './Data/data.json';
import { templateAlias } from './Shared/constants';
import TemplateAlias from './Components/TemplateAlias/TemplateAlias';

ReactDOM.render(
	<React.StrictMode>
		<App data={serverData} />
	</React.StrictMode>,
	document.getElementById('root')
);

window.renderTemplate = (alias, data) => {
	if (!alias && !data) return;

	switch(alias) {
		case templateAlias.VOTE:
		case templateAlias.CHART:
		case templateAlias.LEADERS:
		case templateAlias.DIAGRAM:
		case templateAlias.ACTIVITY:
			return <TemplateAlias alias={alias} data={data} />;
		default: 
			return null;
	}
};
