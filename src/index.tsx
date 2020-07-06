import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'sanitize.css';
import { theme } from 'Theme';
import GlobalStyles from 'Theme/GlobalStyles';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'Fonts/PixelMonasteryScript.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
