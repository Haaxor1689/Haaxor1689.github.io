import React from 'react';
import { Row, Col, } from 'reactstrap';

import { IPortfolio } from "./../Model/IPortfolio"
import PortfolioJSON from "./../Data/portfolio.json"

import Navigation from './Navigation';
import Biography from './Biography';
import Experience from './Experience';
import Education from './Education';
import SectionTitle from './SectionTitle';
import Skill from './Skill';
import Contact from './Contact';

interface IAppState {
    portfolio: IPortfolio;
    navOpen: boolean;
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        portfolio: PortfolioJSON,
        navOpen: true,
    };

    private showNav = (): boolean => {
        return this.state.navOpen;
    }

    private toggleNav = () => {
        this.setState((prevState) => ({
            ...prevState,
            navOpen: !prevState.navOpen,
        }));
    }

    render = (): JSX.Element => (
        <Row noGutters>
            <Col sm="auto" className="sticky-top">
                <Navigation subtitle={this.state.portfolio.biography.name} />
            </Col>
            <Col sm>
                <main>
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