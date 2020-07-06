import { css } from '@emotion/core';

import styled from 'Theme';

import { Box, BoxProps } from '.';

type Props = {
	ellipsis?: boolean;
};

export const Typography = styled(Box)<BoxProps & Props>`
	${p =>
		p.ellipsis &&
		css`
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		`}
`.withComponent('p');

type HeadingProps = {
	fullUnderline?: boolean;
};

export const Heading = styled(Typography)<
	BoxProps & Props & HeadingProps
>``.withComponent('h2');

Heading.defaultProps = {
	fontSize: 24,
	fontWeight: 500,
	textAlign: 'center',
};
