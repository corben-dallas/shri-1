import React, { useEffect, useState } from 'react';

import ExtraDarkUrl from '../../Assets/images/1x/extra-dark.png';
import MaxDarkUrl from '../../Assets/images/1x/max-dark.png';
import MidDarkUrl from '../../Assets/images/1x/mid-dark.png';
import MinDarkUrl from '../../Assets/images/1x/min-dark.png';

import ExtraLightUrl from '../../Assets/images/1x/extra-light.png';
import MaxLightUrl from '../../Assets/images/1x/max-light.png';
import MidLightUrl from '../../Assets/images/1x/mid-light.png';
import MinLightUrl from '../../Assets/images/1x/min-light.png';

const ActivityPolygon = ({ value }) => {
	const [isDarkMode, setIsDarkMode] = useState(null);

	useEffect(() => {
		setIsDarkMode(document.body.classList.contains('theme_dark'));
		return () => setIsDarkMode(false);
	}, [])

	const getPolygonImage = (value) => {
		switch(value) {
			case 0:
				return isDarkMode ? MinDarkUrl : MinLightUrl;
			case 1:
			case 2:
				return isDarkMode ? MidDarkUrl : MidLightUrl;
			case 3:
			case 4: 
				return isDarkMode ? MaxDarkUrl : MaxLightUrl;
			case 5:
			case 6:
				return isDarkMode ? ExtraDarkUrl : ExtraLightUrl;
			default:
				return null; 
		}
	}

	return (
		<div className="activity__polygon">
			{isDarkMode !== null &&
				<img src={getPolygonImage(value)} alt="poly"/>
			}
		</div>
	)
}

export default ActivityPolygon;
