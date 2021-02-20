import React, { useEffect, useState } from 'react';

import { themeMode } from '../../Shared/constants';
import Page from '../Page/Page';

const getPageParams = ({ page, theme }, length) => {
	const count = Number(page.replace(/\D/g, '').trim());

	if (typeof count === 'number') {
		if (count >= 1 && count <= length) {
			return {
				page: count,
				theme: (theme === themeMode.DARK || theme === themeMode.LIGHT) ? theme : themeMode.DARK,
			}
		}

		if ((count < 1 || count > length) && !theme) {
			return {
				page: 1,
				theme: themeMode.DARK,
			}
		}
	}

	return {
		page: 1,
		theme: (theme === themeMode.DARK || theme === themeMode.LIGHT) ? theme : themeMode.DARK,
	};
}

const PagesTemplate = ({ data, location }) => {
	const [themeConfig, setThemeConfig] = useState(null);
	const [pageType, setPageType] = useState(null);

	useEffect(() => {
		const { search } = location;
		const theme = new URLSearchParams(`${location.pathname}${location.search}`).get('theme');
		const params = getPageParams({ page: search, theme }, data.length);

		setThemeConfig(params.theme);
		setPageType(params.page);
	}, [location])

	return (
		<Page
			themeConfig={themeConfig}
			pageType={pageType}
			data={data}
		/>
	);
};

export default PagesTemplate;
