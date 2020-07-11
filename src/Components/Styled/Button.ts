import { css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

import styled, { Theme } from 'Theme';

import { Flex, FlexProps } from '.';

type Props = FlexProps & {
	variant?: 'filled' | 'inline';
	color?: keyof Theme['colors'];
	active?: boolean;
	disabled?: boolean;
};

export const Button = styled(Flex)<Props>`
	align-items: center;
	justify-content: center;
	font-size: 16px;
	appearance: none;
	border: none;
	background: none;
	text-decoration: none;
	cursor: pointer;

	/* Filled variant */
	${p =>
		p.variant === 'filled' &&
		css`
			background-color: ${p.theme.colors[p.color ?? 'primary']};
			color: white;
		`}

	/* Inline variant */
	${p =>
		p.variant === 'inline' &&
		css`
			color: ${p.theme.colors[p.color ?? 'light']};
			padding: 0;

			&:hover {
				text-decoration: underline;
			}

			${p.active &&
			css`
				font-weight: bold;
			`}
			${p.disabled &&
			css`
				color: ${p.theme.colors.light};
			`}
		`}
`.withComponent('button');

Button.defaultProps = {
	type: 'button',
	variant: 'filled',
	px: 4,
	py: 3,
};

export const NavButton = styled(Button)``.withComponent(NavLink);

export const HrefButton = styled(Button)``.withComponent('a');
