import React, { useEffect, useState } from 'react';
import DiagramDescription from '../DiagramDescription/DiagramDescription';
import DiagramSegment from '../DiagramSegment/DiagramSegment';

const Diagram = ({ data }) => {
	const [sortedCategories, setSortedCategories] = useState([]);

	useEffect(() => {
		const {categories} = data;
		const result = {
			...categories
				.map((category, index) => ({
					...category,
					id: index,
					value: mapStringToNum(category.valueText),
					class: getCategoryClass(category.title),
					difference: mapStringToNum(category.differenceText),
					percent: '',
				}))
				.reduce((acc, item) => 
					({ 
						categories: [
							...acc.categories, 
							{ ...item }
						], 
						totlaAmount: acc.totlaAmount + item.value,
					}), { totlaAmount: 0, categories: [] }),
		}

		setSortedCategories([...result.categories.map(category => ({ ...category, percent: +(100 * category.value / result.totlaAmount).toFixed(2) }))]);
	}, []);

	useEffect(() => {
		document.querySelector('.template').classList.add('template--diagram');
		document.querySelector('.template-header').classList.add('template-header--diagram');
		return () => {
			document.querySelector('.template').classList.remove('template--diagram');
			document.querySelector('.template-header').classList.remove('template-header--diagram');
		}
	}, []);

	const mapStringToNum = (valueText) => +valueText.replace(/[^\d]/g, '');

	const getCategoryClass = (title) => {
		if (title.includes('1001')) return 'extra';
		if (title.includes('501 — 1000')) return 'max';
		if (title.includes('101 — 500')) return 'mid';
		if (title.includes('1 — 100')) return 'min';
		return '';
	};

	const { differenceText, totalText, categories } = data;

	return (
		<div className="template-body template-body__diagram">
			<div className="diagram diagram__chart">
				<DiagramSegment 
					sortedCategories={sortedCategories}
					differenceText={differenceText}
					totalText={totalText}
				/>
			</div>
			<div className="diagram diagram__description">
				<DiagramDescription categories={sortedCategories} />
			</div>
		</div>
	)
}

export default Diagram;
