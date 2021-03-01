import React from 'react';

const TemplateHeader = ({ title, subtitle }) => (
	<div className="template-header">
		<h1 className="text text--big text--primary">{title}</h1>
		<p className="text text--secondary">{subtitle}</p>
	</div>
);

export default TemplateHeader;
