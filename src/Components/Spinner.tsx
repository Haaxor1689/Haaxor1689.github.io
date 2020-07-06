import { keyframes } from '@emotion/core';
import React, { FC } from 'react';

import styled from 'Theme';

import { Box, BoxProps } from './Styled';

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Element = styled.div<{ delay: number }>`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid currentColor;
	border-radius: 50%;
	animation: ${Animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: currentColor transparent transparent transparent;
	animation-delay: ${p => p.delay}s;
`;

const Spinner: FC<BoxProps & { color?: string }> = props => (
	<Box display="inline-block" position="relative" size={80} {...props}>
		<Element delay={-0.45} />
		<Element delay={-0.3} />
		<Element delay={-0.15} />
	</Box>
);
export default Spinner;
