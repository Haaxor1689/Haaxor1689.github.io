/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { Flex } from './Styled';
import { Typography } from './Styled/Typography';

type Props = {
	title: string;
	onRemove: () => void;
};

const Chip: React.FC<Props> = ({ title, onRemove }) => (
	<Flex
		backgroundColor="paper"
		alignItems="center"
		color="textLight"
		mt={3}
		mr={2}
		py={2}
		px={12}
		css={css`
			border-radius: 20px;
			cursor: pointer;
		`}
	>
		<Typography my={0} fontSize={16} lineHeight={1}>
			{title}
		</Typography>
	</Flex>
);
export default Chip;
