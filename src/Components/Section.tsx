import React, { FC } from 'react';

import { Flex } from './Styled';
import { Heading } from './Styled/Typography';
import Divider from './Divider';

type Props = {
	title: string;
};

const Section: FC<Props> = ({ title, children }) => (
	<Flex as="section" flexDirection="column">
		<Flex flexDirection="column" alignItems="center" alignSelf="center">
			<Heading>{title}</Heading>
			<Divider color="primary" />
		</Flex>
		<Flex flexDirection="column" p={3}>
			{children}
		</Flex>
	</Flex>
);
export default Section;
