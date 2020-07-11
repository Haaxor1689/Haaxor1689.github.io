/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';

import { Skill } from 'Portfolio';
import { Flex } from 'Components/Styled';
import { Typography } from 'Components/Styled/Typography';

const SkillItem: FC<Skill> = ({ field, description }) => (
	<Flex flexDirection="column" mb={2}>
		<Typography fontWeight="bold" fontSize={22}>
			{field}
		</Typography>
		<Typography
			css={css`
				text-indent: 32px;
			`}
		>
			{description}
		</Typography>
	</Flex>
);
export default SkillItem;
