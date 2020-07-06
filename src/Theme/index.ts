import styled, { CreateStyled } from '@emotion/styled/macro';

export const theme = {
	colors: {
		primary: '#AD343E',
		secondary: '#734CB0',
		light: '#E5D0CC',
		dark: '#0A0908',
	},
	breakpoints: ['40em', '52em', '64em', '76em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	constants: {
		bodyWidth: '76em',
		searchBarHeight: 35,
		borderRadius: '10px',
		inputHeight: '46px',
	},
};

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
