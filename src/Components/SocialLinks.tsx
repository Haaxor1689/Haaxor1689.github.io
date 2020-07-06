import React, { FC } from 'react';
import {
	FaLinkedin,
	FaTwitter,
	FaStackOverflow,
	FaGithub,
	FaEnvelope,
} from 'react-icons/fa';

import Portfolio from 'Portfolio';

import SocialLink from './SocialLink';

const SocialLinks: FC = () => {
	const {
		contacts: { email, linkedin, twitter, stackoverflow, github },
	} = Portfolio;
	return (
		<>
			<SocialLink text={email} url={`mailto:${email}`} icon={<FaEnvelope />} />
			<SocialLink
				text={linkedin}
				url={`https://www.linkedin.com/in/${linkedin}/`}
				icon={<FaLinkedin />}
			/>
			<SocialLink
				text={twitter}
				url={`https://twitter.com/${twitter}`}
				icon={<FaTwitter />}
			/>
			<SocialLink
				text="StackOverflow"
				url={`https://stackoverflow.com/users/${stackoverflow}`}
				icon={<FaStackOverflow />}
			/>
			<SocialLink
				text="Github"
				url={`https://github.com/${github}`}
				icon={<FaGithub />}
			/>
		</>
	);
};
export default SocialLinks;
