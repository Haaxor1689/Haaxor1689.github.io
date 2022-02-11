import React from 'react';

import ProjectTile from 'Components/Projects/ProjectTile';
import usePageTitle from 'Hooks/usePageTitle';
import Section from 'Components/Section';
import Portfolio from 'Portfolio';
import ExperienceItem from 'Components/PortfolioItems/ExperienceItem';
import EducationItem from 'Components/PortfolioItems/EducationItem';
import SkillItem from 'Components/PortfolioItems/SkillItem';
import { Grid } from 'Components/Styled';

const Home: React.FC = () => {
	usePageTitle();

	return (
		<>
			<Section title="Projects">
				<Grid
					gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
					gridGap={3}
				>
					{Portfolio.projects.map((p, i) => (
						<ProjectTile key={`proj-${i}`} {...p} />
					))}
				</Grid>
			</Section>
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
			<Section title="Skills">
				{Portfolio.skills.map((s, i) => (
					<SkillItem key={`ski-${i}`} {...s} />
				))}
			</Section>
		</>
	);
};
export default Home;
