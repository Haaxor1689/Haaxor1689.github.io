import React, { FC } from 'react';

import { Education } from 'Portfolio';

import PortfolioItem from '.';

const EducationItem: FC<Education> = ({ school, degree, field, ...props }) => (
	<PortfolioItem
		title={school.name}
		subtitle={`${degree ? degree + ' ' : ''}${field}`}
		url={school.url}
		logo={school.logo}
		{...props}
	/>
);
export default EducationItem;
