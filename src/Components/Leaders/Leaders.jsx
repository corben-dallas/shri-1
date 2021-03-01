import React, { useEffect, useState } from 'react';
import LeadersBarChart from '../LeadersBarChart/LeadersBarChart';

const sortLeaders = (users) => {
	if (!users && !users.length) return [];

	const even = [];
	const odd = [];

	users
		.sort((a, b) => +b.valueText - +a.valueText)
		.slice(0, 5)
		.map((item, index) => ({ ...item, rang: index + 1 }))
		.forEach((item, index) => {
			index % 2 ? even.push(item) : odd.push(item);
		});

	return odd.reverse().concat(even);
}

const Leaders = ({ data }) => {
	const [leadersRange, setLeadersRange] = useState([]);

	useEffect(() => {
		const sortedUsers = sortLeaders([...data.users]);
		setLeadersRange([...sortedUsers]);
	}, []);

	return (
		<div className="template-body">
			{leadersRange && leadersRange.length &&
				leadersRange.map(user => (
					<LeadersBarChart key={user.id} {...user} emoji={data.emoji} />
				))
			}
		</div>
	)
};

export default Leaders;
