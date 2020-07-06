/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';

import { Theme } from 'Theme';

import { Box, Flex } from './Styled';
import SocialLinks from './SocialLinks';
import Divider from './Divider';

const Footer: FC = () => {
	return (
		<Box as="footer">
			<Flex
				flexDirection="column"
				mx="auto"
				css={(theme: Theme) => css`
					max-width: ${theme.constants.bodyWidth};
				`}
			>
				<Divider color="primary" />
				<Flex alignItems="center" justifyContent="center" p={4}>
					<SocialLinks />
				</Flex>
			</Flex>
		</Box>
	);
};
export default Footer;
