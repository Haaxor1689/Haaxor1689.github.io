import React from 'react';
import { Row, Col, Nav, NavLink, Collapse, Button, } from 'reactstrap';

import { IPortfolio } from "./../Model/IPortfolio"
import PortfolioJSON from "./../Data/portfolio.json"

import Navigation from './Navigation';
import Biography from './Biography';
import Experience from './Experience';
import Education from './Education';
import SectionTitle from './SectionTitle';

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
        </main>
      </Col>
    </Row>
  );
}