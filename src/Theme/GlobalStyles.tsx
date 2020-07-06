import { css, Global } from '@emotion/core';
import React from 'react';

import { theme } from '.';

const GlobalStyles = () => (
	<Global
		styles={css`
			/* Fonts */
			@import url('https://fonts.googleapis.com/css?family=Roboto|Work+Sans&display=swap');

			body {
				margin: 0;
				font-family: 'Work Sans', 'Roboto', -apple-system, BlinkMacSystemFont,
					'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
					'Helvetica Neue', sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;

				color: ${theme.colors.light};
				background-color: ${theme.colors.dark};
			}

			* {
				font-family: 'Work Sans', 'Roboto', -apple-system, BlinkMacSystemFont,
					'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
					'Helvetica Neue', sans-serif;
			}

			span,
			p,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				padding: 0;
				margin: ${theme.space[2]}px 0;
			}
		`}
	/>
);

export default GlobalStyles;
