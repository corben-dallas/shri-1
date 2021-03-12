import React from 'react';

import ActivityPolygon from '../ActivityPolygon/ActivityPolygon';

const ActivitySortedDays = ({ data }) => {
	return (
		<div className="activity__days">
			{data.map(item => <ActivityPolygon key={item.id} {...item}/>)}
		</div>
	)
};

export default ActivitySortedDays;
