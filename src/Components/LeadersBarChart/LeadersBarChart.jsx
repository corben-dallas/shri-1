import React from 'react'

const LeadersBarChart = ({
	id,
	rang,
	name,
	avatar,
	valueText,
	emoji,
}) => {
	return (
		<div className={`bar-chart ${rang === 1 ?
			'bar-chart--first' : ''} ${rang === 2 ?
				'bar-chart--second' : ''} ${rang === 3 ?
					'bar-chart--third' : ''} ${(rang === 4 || rang == 5) ?
						'bar-chart--other' : ''}`}
		>
			<div className="bar-chart__top">
				<div className="bar-chart__top--user">
					<img 
						className="user-avatar"
						src="http://placekitten.com/200/300"
						alt="user"
					/>
					<p className="text text--primary text--center">{name}</p>
					<span className="text text--secondary text--small">{valueText}</span>
					{rang === 1 && 
						<span className="user-avatar--emoji">{emoji}</span>
					}
				</div>
			</div>
			<div className="bar-chart__bottom">
				<p className="text text--big text--primary bar-chart__bottom--rang">{rang}</p>
				<div className="bar-chart__bottom--chart"></div>
			</div>
		</div>
	)
}

export default LeadersBarChart
{}