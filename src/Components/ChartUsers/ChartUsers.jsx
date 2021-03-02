import React from 'react';

const ChartUsers = ({
	id,
	avatar,
	name,
	valueText,
}) => {
	return (
		<React.Fragment>
			<div className="chart__user--content">
				<div className="chart__user--avatar">
					<img className="user-avatar user-avatar--mini" src="http://placekitten.com/200/300" alt="avatar"/>
				</div>
				<div className="chart__user--name">
					<p className="text text--primary">{name}</p>
					<span className="text text--small text--secondary">{valueText}</span>
				</div>
			</div>
			<div className="divider" />
		</React.Fragment>
	)
}

export default ChartUsers;
