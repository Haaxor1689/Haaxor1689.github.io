/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC, ReactNode } from 'react';

import { Typography } from './Styled/Typography';
import { HrefButton } from './Styled/Button';

type Props = {
	icon: ReactNode;
	url: string;
	text?: string;
};

const SocialLink: FC<Props> = ({ icon, url, text }) => (
	<HrefButton
		href={url}
		color="light"
		flexShrink={0}
		title={text}
		px={2}
		css={css`
			:hover {
				text-decoration: underline;
			}
		`}
	>
		{icon}
		<Typography display={['none', 'block']} ml={2} fontSize={12} ellipsis>
			{text}
		</Typography>
	</HrefButton>
);
export default SocialLink;
