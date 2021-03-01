import React from 'react';

import TemplateBody from '../TemplateBody/TemplateBody';
import TemplateHeader from '../TemplateHeader/TemplateHeader';

const TemplateAlias = ({alias, data}) => {
	return (
		<div className="template">
			<TemplateHeader title={data.title} subtitle={data.subtitle} />
			<TemplateBody 
				alias={alias} 
				data={data}
			/>
		</div>
	);
};

export default TemplateAlias;
