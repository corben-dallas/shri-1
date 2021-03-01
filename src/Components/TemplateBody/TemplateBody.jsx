import React from 'react';
import { templateAlias } from '../../Shared/constants';
import Leaders from '../Leaders/Leaders';

const TemplateBody = ({ alias, data }) => renderBody(alias, data);

const renderBody = (alias, data) => {
	switch(alias) {
		case templateAlias.LEADERS: 
			return <Leaders data={data} />;
		default: 
			return null;
	}
}

export default TemplateBody;
