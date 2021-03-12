import React, { useEffect, useState } from 'react';

import ActivitySortedDays from '../ActivitySortedDays/ActivitySortedDays';

import { dayOfWeekSorter } from '../../Shared/constants';

const Activity = ({ data }) => {
	const [isLandscape, setIsLandscape] = useState(null);
	const [days, setDays] = useState([]);
	const [sortedDays, setSortedDays] = useState([]);

	useEffect(() => {
		setDays([
			...Object.keys(data.data)
				.map(dayOfWeek => ({ day: dayOfWeek, data: [...data.data[dayOfWeek]] }))
					.sort((a, b) => dayOfWeekSorter[a.day] - dayOfWeekSorter[b.day])
		]);
	}, [data])

	useEffect(() => {
		onOrientationChange();
		window.addEventListener('resize', onOrientationChange);
		document.querySelector('.template').classList.add('template__activity');

		return () => {
			window.removeEventListener('resize', onOrientationChange);
			document.querySelector('.template').classList.remove('template__activity');
		}
	}, []);

	useEffect(() => {
		if (isLandscape) {
			setSortedDays([
				...days
					.map(day => day.data
						.reduce((acc, item, index, arr) => {
							if (index % 2) {
								acc[index] = item + arr[index - 1]
							} else {
								acc[index] = null
							}
							return acc;
						}, [])
						.filter(item => item !== null)
						.map((item, index) => ({ id: index, value: item, day: day.day }))
					),
			]);
		} else {
			setSortedDays([
				...days
					.reduce((daysAcc, daysItem, daysIndex) => {
						daysItem.data.forEach((dataItem, dataIndex) => {
							daysAcc[dataIndex] = [...daysAcc[dataIndex] || [], {id:daysIndex, value: dataItem, day: daysItem.day }];
						})

						return daysAcc;
				}, [])
			]);
		}
	}, [isLandscape])

	const onOrientationChange = () => {
		console.log(document.body.clientWidth);
		const mql = window.matchMedia('(orientation: landscape)');

		if (mql.matches) {
			setIsLandscape(true);
		} else {
			setIsLandscape(false);
		}
	}

	return (
		<div className="template-body template-body__activity">
			<div className="activity">
				<div className="activity activity__diagram">
					{sortedDays && !!sortedDays.length && 
						sortedDays.map((days, index) => <ActivitySortedDays key={index} data={[...days]} />)
					}
				</div>
				<div className="activity activity__scale">
					<div className="scale">
						<div className="scale__hour">
							<div className="scale__hour--vertical" />
							<div className="scale__hour--horizontal" />
							<div className="scale__hour--vertical" />
						</div>
						<p className="text text--secondary">{isLandscape ? '2 часа' : '1 час'}</p>
					</div>
					<div className="scale">
						<div className="scale__amount scale__amount--min" />
						<p className="text text--secondary">0 </p>
					</div>
					<div className="scale">
						<div className="scale__amount scale__amount--mid" />
						<p className="text text--secondary">1 - 2 </p>
					</div>
					<div className="scale">
						<div className="scale__amount scale__amount--max" />
						<p className="text text--secondary">3 - 4 </p>
					</div>
					<div className="scale">
						<div className="scale__amount scale__amount--extra" />
						<p className="text text--secondary">5 - 6 </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Activity;
