import React from 'react';
import { Col, Card, CardImg, Row, Collapse } from 'reactstrap';

import { IProject, ILink } from './../Model/IPortfolio'
import DateRange from './DateRange';

interface IProjectCardState {
    isOpen: boolean,
    size: "auto" | "12",
}

export default class ProjectCard extends React.Component<IProject, IProjectCardState> {
    state: IProjectCardState = {
        isOpen: false,
        size: "auto",
    }

    private isOpen = (): boolean => this.state.isOpen || this.state.size === "12";

    private toggleNav = () => {
        this.setState((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
            size: !prevState.isOpen ? "12" : prevState.size,
        }));
    }

    private onExited = () => {
        console.log('closed');
        this.setState((prevState) => ({
            ...prevState,
            size: "auto",
        }));
    }

    private getPreview = (): string => this.props.preview ? `${process.env.PUBLIC_URL}/Assets/Projects/${this.props.preview}.png` : `${process.env.PUBLIC_URL}/Assets/Projects/Clock.png` 

    private renderLink = (link: ILink): JSX.Element => <li><a href={link.url}>{link.title}</a></li>

    private renderLinks = (): JSX.Element => (
        <Col lg="3">
            <p>Links:</p>
            <ul>{this.props.links!.map(this.renderLink)}</ul>
        </Col>
    )

    render = (): JSX.Element => (
        <Col xs={this.state.size}>
            <Card className={`project-card ${this.isOpen() && "project-card-open"}`} onClick={this.toggleNav}>
                <div>
                    <CardImg top src={this.getPreview()} alt="Card image cap" className="project-card-image" />
                </div>
                <div className="project-card-overlay"></div>
                <Row noGutters className="project-card-text">
                    <Col>
                        {this.props.name}
                    </Col>
                </Row>
            </Card>
            <Collapse isOpen={this.state.isOpen} onExited={this.onExited}>
                <Row className="project-card-body">
                    <Col lg={ this.props.links ? "9" : "12"}>
                        <DateRange start={this.props.start} end={this.props.end} />
                        <div><strong>My role:</strong> {this.props.role}</div>
                        <div>{this.props.description}</div>
                    </Col>
                    { this.props.links && this.renderLinks() }
                </Row>
            </Collapse>
        </Col>
    )
}
