/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';

import { PortfolioItem as PortfolioItemT } from 'Portfolio';
import { Flex } from 'Components/Styled';
import { Typography } from 'Components/Styled/Typography';
import { HrefButton } from 'Components/Styled/Button';

type Props = PortfolioItemT & {
	title: string;
	subtitle?: string;
	url: string;
	logo?: string;
};

const PortfolioItem: FC<Props> = ({
	title,
	subtitle,
	url,
	logo,
	start,
	end,
	children,
}) => (
	<Flex my={3}>
		<HrefButton
			href={url}
			size={60}
			mr={3}
			mt={2}
			flexShrink={0}
			css={css`
				background-image: url(/Assets/Logos/${logo});
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				background-color: white;
			`}
		/>
		<Flex flexDirection="column">
			<Typography my={0} fontSize={22} fontWeight={700}>
				{title}
			</Typography>
			{subtitle && <Typography my={0}>{subtitle}</Typography>}
			<Typography my={0}>
				{start} - {end ?? 'Present'}
			</Typography>
			{children}
		</Flex>
	</Flex>
);
export default PortfolioItem;
