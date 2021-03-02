import React, { useEffect, useRef, useState } from 'react';
import ChartBarCharts from '../ChartBarCharts/ChartBarCharts';
import ChartUsers from '../ChartUsers/ChartUsers';

const Chart = ({ data }) => {
	console.log(data);

	const [currentWidth, setCurrentWidth] = useState(0);
	const [activeElemOffset, setActiveElemOffset] = useState(0);
	const [range, setRange] = useState(null);
	const contentRef = useRef(null);

	useEffect(() => {
		if (data && data.values && !!data.values.length) {
			let max = 0;

			data.values.forEach(item => {
				if (item.value > max) {
					max = item.value;
				}
			});

			setRange(max);
		}
	}, []);

	useEffect(() => {
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(() => {
		if (contentRef && contentRef.current) {
			contentRef.current.style.left = `${-activeElemOffset + (currentWidth / 2)}px`;
		}
	}, [currentWidth]);

	const updateSize = () => {
		setCurrentWidth(document.body.clientWidth);
	};

	const getActiveElem = (ref) => {
		if (ref && ref.current) {
			setActiveElemOffset(ref.current.offsetLeft);
		}
	}

	return (
		<div className="template-body template-body__chart">
			<div className="chart__bar-charts">
				<div ref={contentRef} className="chart__bar-charts__content">
				{data && data.values && !!data.values.length &&
					data.values
						.sort((a, b) => a.title - b.title)
						.map(value => (
							<ChartBarCharts 
								key={value.title}
								{ ...value }
								range={range}
								getActiveElem={getActiveElem}
							/>))
				}
				</div>
			</div>
			<div className="chart__users">
				{data && data.users && !!data.users.length &&
					data.users
						.sort((a, b) => b.valueText - a.valueText)
						.map(user => <ChartUsers key={user.id} { ...user } />)
				}
			</div>
		</div>
	);
};

export default Chart;
