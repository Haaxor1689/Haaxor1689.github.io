/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';

import { Theme } from 'Theme';

import { Box, BoxProps } from './Styled';

const Divider: FC<BoxProps & { color?: keyof Theme['colors'] }> = ({
	color,
	...props
}) => (
	<Box
		as="hr"
		my={2}
		mx={3}
		alignSelf="stretch"
		{...props}
		css={(theme: Theme) =>
			css`
				border: 0;
				border-bottom: 1px solid
					${color ? theme.colors[color] : theme.colors.light};
				border-left: 1px solid
					${color ? theme.colors[color] : theme.colors.light};
			`
		}
	/>
);
export default Divider;
