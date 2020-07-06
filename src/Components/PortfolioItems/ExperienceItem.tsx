import React, { FC } from 'react';

import { Experience } from 'Portfolio';
import { Typography } from 'Components/Styled/Typography';

import PortfolioItem from '.';

const ExperienceItem: FC<Experience> = ({ company, description, ...props }) => (
	<PortfolioItem
		subtitle={company.name}
		logo={company.logo}
		url={company.url}
		{...props}
	>
		<Typography>{description}</Typography>
	</PortfolioItem>
);
export default ExperienceItem;
