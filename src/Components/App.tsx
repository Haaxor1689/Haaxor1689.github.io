import React from 'react';
import { Row, Col, } from 'reactstrap';
import ReactGA from 'react-ga';

import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';

import Navigation from './Navigation';
import ProjectCard from './ProjectCard';
import Biography from './Biography';
import Experience from './Experience';
import Education from './Education';
import SectionTitle from './SectionTitle';
import Skill from './Skill';
import Contact from './Contact';

import { IPortfolio, IProject } from "./../Model/IPortfolio"
import PortfolioJSON from "./../Data/portfolio.json"

interface ISectionGroups {
    [type: string]: IProject[];
}

interface IAppState {
    portfolio: IPortfolio;
    filteredProjects: ISectionGroups;
    openedCard: string | null;
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        portfolio: PortfolioJSON,
        filteredProjects: groupBy(sortBy(PortfolioJSON.projects, 'type'), 'type'),
        openedCard: null,
    };

    constructor(props: {}) {
        super(props);
        ReactGA.initialize("UA-136681354-1");
        ReactGA.pageview("/");
    }

    private onCardOpen = (key: string | null) => {
        this.setState(prevState => ({
            ...prevState,
            openedCard: key,
        }));
    }

    private toAnchor = (name: string): string => name.replace(/ /g, '_').toLowerCase();

    private getSections = () => Object.keys(this.state.filteredProjects).map((type) => ({
        name: type,
        anchor: this.toAnchor(type),
    }));

    private renderSection = (type: string, projects: IProject[]): JSX.Element => (
        <Row className="section justify-content-center" noGutters>
            <SectionTitle title={type} id={this.toAnchor(type)} />
            { projects.map((project) => <ProjectCard { ...project } isOpen={project.name == this.state.openedCard} onCardToggle={this.onCardOpen} />)}
        </Row>
    );

    render = (): JSX.Element => (
        <Row noGutters>
            <Col md="auto" className="sticky-top">
                <Navigation subtitle={this.state.portfolio.biography.name} sections={this.getSections()} />
            </Col>
            <Col md>
                <main>
                    { Object.entries(this.state.filteredProjects).map((entry) => this.renderSection(entry[0], entry[1])) }
                    <Row className="section">
                        <SectionTitle title="Biography" id="biography" />
                        <Biography {...this.state.portfolio.biography} />
                    </Row>
                    <Row>
                        <Col lg="6" className="section">
                            <SectionTitle title="Experience"/>
                            {this.state.portfolio.experience.map((ex) => <Experience {...ex} />)}
                        </Col>
                        <Col lg="6" className="section">
                            <SectionTitle title="Education"/>
                            {this.state.portfolio.education.map((ed) => <Education {...ed} />)}
                        </Col>
                    </Row>
                    <Row>
                        <SectionTitle title="Skills"/>
                        {this.state.portfolio.skills.map((skill) => <Skill {...skill} />)}
                    </Row>
                    <Row>
                        <SectionTitle title="Contact" id="contact" />
                        <Contact { ...this.state.portfolio.contacts } />
                    </Row>
                </main>
            </Col>
        </Row>
    );
}