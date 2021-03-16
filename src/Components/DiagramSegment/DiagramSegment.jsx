import React from 'react';

const DiagramSegment = ({
	sortedCategories,
	differenceText,
	totalText,
}) => (
	<div className="diagram__description__content">
		<svg width="100%" heught="100%" viewBox="0 0 42 42">
			<circle cx="21" cy="21" r="15.91549430918954" fill="transparent"></circle>
			<circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" strokeWidth="5"></circle>
			{sortedCategories.map((item, index, arr) => (
				<circle 
					key={item.id}
					className={`circle-segment--${item.class}`}
					cx="21" 
					cy="21" 
					r="15.91549430918954" 
					fill="transparent"
					strokeWidth="5" 
					strokeDasharray={`${item.percent}, ${100 - item.percent}`}
					strokeDashoffset={
							`${100 - (arr.reduce((arrAcc, arrItem, arrIndex) => {
								if (arrIndex < index) {
									return arrAcc + arrItem.percent
								} else {
									return arrAcc;
								}
							}, 0)) + 33}`
					}
				/>
			))}
		</svg>
		<div className="diagram__description__content--text">
			<p className="text text--bigless text--primary">{totalText}</p>
			<span className="text text--secondary">{differenceText}</span>
		</div>
	</div>
);

export default DiagramSegment;
