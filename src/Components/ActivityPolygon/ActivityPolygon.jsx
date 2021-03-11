import React from 'react';

import { ReactComponent as ExtraDark } from '../../Assets/images/extra-dark.svg';
import {ReactComponent as MaxDark} from '../../Assets/images/max-dark.svg';
import {ReactComponent as MidDark} from '../../Assets/images/mid-dark.svg';
import {ReactComponent as MinDark} from '../../Assets/images/min-dark.svg';

import ExtraDarkUrl from '../../Assets/images/1x/extra-dark.png'
import MaxDarkUrl from '../../Assets/images/1x/max-dark.png'
import MidDarkUrl from '../../Assets/images/1x/mid-dark.png'
import MinDarkUrl from '../../Assets/images/1x/min-dark.png'

const ActivityPolygon = ({ value }) => {
	const getPolygonImage = (value) => {
		switch(value) {
			case 0:
				// return MinDark
				// return <MinDark />;
				return {
					svg: <MinDark />,
					url: MinDarkUrl,
				}
			case 1:
			case 2:
				// return MidDark
				// return <MidDark />;
				return {
					svg: <MidDark />,
					url: MidDarkUrl,
				}
			case 3:
			case 4: 
				// return <MaxDark />;
				// return MaxDark;
				return {
					svg: <MaxDark />,
					url: MaxDarkUrl,
				}
			case 5:
			case 6:
				// return ExtraDark; 
				// return <ExtraDark />;
				return {
					svg: <ExtraDark />,
					url: ExtraDarkUrl,
				}
			default:
				return 'undefined'; 
		}
	}

	return (
		<div className="activity__polygon">
			<img src={getPolygonImage(value).url} alt="poly"/>
			{/* {getPolygonImage(value).svg} */}
		</div>
	)
}

export default ActivityPolygon;
