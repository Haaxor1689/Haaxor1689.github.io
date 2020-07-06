import React from 'react';

import usePageTitle from 'Hooks/usePageTitle';
import Section from 'Components/Section';
import Portfolio from 'Portfolio';
import ExperienceItem from 'Components/PortfolioItems/ExperienceItem';
import EducationItem from 'Components/PortfolioItems/EducationItem';

const Home: React.FC = () => {
	usePageTitle();

	return (
		<>
			<Section title="Projects"></Section>
			<Section title="Experience">
				{Portfolio.experience.map((e, i) => (
					<ExperienceItem key={`exp-${i}`} {...e} />
				))}
			</Section>
			<Section title="Education">
				{Portfolio.education.map((e, i) => (
					<EducationItem key={`edu-${i}`} {...e} />
				))}
			</Section>
			<Section title="Skills"></Section>
		</>
	);
};
export default Home;
