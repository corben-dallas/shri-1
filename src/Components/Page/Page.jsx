import React, { useEffect, useState } from 'react';

import { themeMode } from '../../Shared/constants';

const Page = ({ themeConfig, pageType, data }) => {
	const [filteredData, setFilteredData] = useState(null);
	const [alias, setAlias] = useState('');

	useEffect(() => {
		if (themeConfig === themeMode.LIGHT) {
			document.body.classList.add('theme_light');
			document.body.classList.remove('theme_dark');
		}

		if (themeConfig === themeMode.DARK) {
			document.body.classList.add('theme_dark');
			document.body.classList.remove('theme_light');
		}
	}, [themeConfig]);

	useEffect(() => {
		const pageData = data
			.filter((item, index) => index === pageType - 1)
			.reduce((acc, item) => ({ ...item }), {});

		setFilteredData({ ...pageData.data });
		setAlias(pageData.alias);
	}, [pageType]);

	return (
		<>
			{filteredData && alias &&
				window.renderTemplate(alias, filteredData)
			}
		</>
	);
};

export default Page;
