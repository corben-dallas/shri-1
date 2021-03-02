import React from 'react';

import Chart from '../Chart/Chart';
import Leaders from '../Leaders/Leaders';

import { templateAlias } from '../../Shared/constants';

const TemplateBody = ({ alias, data }) => renderBody(alias, data);

const renderBody = (alias, data) => {
	switch(alias) {
		case templateAlias.LEADERS: 
			return <Leaders data={data} />;
		case templateAlias.CHART:
			return <Chart data={data} />;
		default: 
			return null;
	}
}

export default TemplateBody;
