import React from 'react';

const TitleSection = props => {
	const { title } = props;
	return <h2 className="titleSection">{ title }</h2>
};

export { TitleSection };