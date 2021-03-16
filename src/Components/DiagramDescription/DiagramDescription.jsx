import React from 'react';

const DiagramDescription = ({ categories }) => {
	return (
		<div className="diagram__content">
			{categories.map(item => (
				<React.Fragment key={item.id}>
					<div className="diagram__content__text">
						<div className="diagram__content__text--primary">
							<div className={`circle circle--${item.class}`} />
							<span className="text text--primary">{item.title}</span>
						</div>
						<div className="diagram__content__text--secondary">
							<span className="text text--secondary">{`+${item.difference}`}</span>
							<span className="text text--secondary">{item.value}</span>
						</div>
					</div>
					<div className="divider diagram__content--divider" />
				</React.Fragment>
			))}
		</div>
	);
};

export default DiagramDescription;
