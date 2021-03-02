import React, { useEffect, useRef } from 'react';

const ChartBarCharts = ({ 
	title,
	value,
	range,
	active,
	getActiveElem,
}) => {
	const chartBottomRef = useRef(null);
	const chartTopRef = useRef(null);
	const activeElemRef = useRef(null);

	useEffect(() => {
		getActiveElem(activeElemRef);
	}, [])

	useEffect(() => {
		if (chartBottomRef && chartBottomRef.current) {
			const h = setHeight(range, value);
			chartBottomRef.current.style.height = `${h}%`;
			chartTopRef.current.style.height = `${93 - h}%`;
		}
	}, [range]);

	const setHeight = (max, value) => {
		const result = Math.floor(((value * 70) / max) * 100) / 100;
		
		if (result === 0) return 2;

		return result
	}

	return (
		<div ref={active ? activeElemRef : null} className={`bar-chart ${active ? 'bar-chart--first' : ''}`}>
			<div ref={chartTopRef} className="bar-chart__top">
				<p className={`text text--bigless ${active ? 'text--primary' : 'text--secondary'}`}>{value || null}</p>
			</div>
			<div ref={chartBottomRef} className="bar-chart__bottom">
				<div className="bar-chart__bottom--chart" />
			</div>
			<div className="bar-chart__bottom--title">
				<p className="text text--secondary text--center">{title}</p>
			</div>
		</div>
	)
}

export default ChartBarCharts
