/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';

import { Project } from 'Portfolio';
import { Box } from 'Components/Styled';

const ProjectTile: FC<Project> = ({ preview }) => (
	<Box position="relative" pb="100%">
		<Box
			position="absolute"
			top={0}
			bottom={0}
			left={0}
			right={0}
			css={css`
				background-image: url(Assets/Projects/${preview});
				background-position: center;
				background-size: contain;
				background-repeat: no-repeat;
			`}
		></Box>
	</Box>
);
export default ProjectTile;
