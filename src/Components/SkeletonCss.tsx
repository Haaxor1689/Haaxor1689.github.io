import { css, keyframes } from '@emotion/core';

import { Theme } from 'Theme';

const Animation = keyframes`
  0% {
    transform: translateX(-66%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SkeletonCss = (theme: Theme) => css`
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 300%;
		height: 100%;
		background: linear-gradient(
			90deg,
			${theme.colors.light} 33%,
			white 50%,
			${theme.colors.light} 66%
		);
		animation: ${Animation} 1s ease-in-out infinite;
	}
`;
export default SkeletonCss;
