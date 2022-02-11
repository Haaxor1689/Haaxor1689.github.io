/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC, Fragment } from 'react';

import { Theme } from 'Theme';
import Portfolio from 'Portfolio';
import useHeaderSize from 'Hooks/useHeaderSize';
import avatar from 'Assets/avatar.jpg';

import { Box, Flex } from './Styled';
import { Typography } from './Styled/Typography';
import Divider from './Divider';
import SocialLinks from './SocialLinks';

const Header: FC = () => {
	const { isScrolledToTop } = useHeaderSize();

	return (
		<Box
			id="PAGE_HEADER"
			as="header"
			width="100%"
			bg="dark"
			position={isScrolledToTop ? 'relative' : 'fixed'}
			top={0}
			zIndex={999}
		>
			<Flex
				mx="auto"
				flexDirection="column"
				css={(theme: Theme) => css`
					max-width: ${theme.constants.bodyWidth};
				`}
			>
				<Flex alignItems="center" flexDirection="column" p={4}>
					<Box
						size={isScrolledToTop ? 140 : 0}
						mb={isScrolledToTop ? 4 : 0}
						css={css`
							border-radius: 50%;
							background-image: url(${avatar});
							background-position: center;
							background-size: contain;
						`}
					/>
					<Typography as="h1" fontSize={24}>
						{Portfolio.biography.name}
					</Typography>
					<Typography
						as="h2"
						fontSize={[14, 20]}
						fontWeight={500}
						mt={0}
						ellipsis
					>
						{Portfolio.biography.headline}
					</Typography>
					{isScrolledToTop && (
						<Fragment>
							<Typography>{Portfolio.biography.summary}</Typography>
							<Flex mt={2}>
								<SocialLinks />
							</Flex>
						</Fragment>
					)}
				</Flex>
				<Divider color="primary" />
			</Flex>
		</Box>
	);
};
export default Header;
