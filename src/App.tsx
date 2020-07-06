/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Flex } from 'Components/Styled';
import routes from 'Routes';
import LazyRoute from 'Routes/LazyRoute';
import { Theme } from 'Theme';
import useHeaderSize from 'Hooks/useHeaderSize';

const App: React.FC = () => {
	const { height } = useHeaderSize();

	return (
		<Flex as="main" flexDirection="column" minHeight="100vh">
			<Header />
			<Flex
				flexDirection="column"
				flexGrow={1}
				py={3}
				width="100%"
				mt={height}
				mx="auto"
				css={(theme: Theme) => css`
					max-width: ${theme.constants.bodyWidth};
				`}
			>
				<Switch>
					{routes.map(route => (
						<Route
							key={route.path.toString()}
							exact
							path={route.path}
							render={route.render}
						/>
					))}
					<Route exact render={LazyRoute(() => import('./Pages/NotFound'))} />
				</Switch>
			</Flex>
			<Footer />
		</Flex>
	);
};

export default App;
