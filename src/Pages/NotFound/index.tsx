import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Box } from 'Components/Styled';
import { Button } from 'Components/Styled/Button';
import { Heading, Typography } from 'Components/Styled/Typography';
import usePageTitle from 'Hooks/usePageTitle';

const NotFound: React.FC = () => {
	// Title
	usePageTitle('Page not found');

	// Router
	const { pathname } = useLocation();
	const { goBack } = useHistory();

	return (
		<>
			<Heading fontWeight="bold" my={4}>
				Page not found (404)
			</Heading>
			<Typography>
				Page{' '}
				<Typography as="span" fontWeight="bold">
					{pathname}
				</Typography>{' '}
				could not be found.
			</Typography>

			<Box alignSelf="flex-start">
				<Button mt={3} onClick={goBack}>
					Go back
				</Button>
			</Box>
		</>
	);
};
export default NotFound;
