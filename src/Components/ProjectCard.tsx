import React from 'react';
import { Col, Card, CardImg, Row, Collapse, UncontrolledCarousel } from 'reactstrap';

import { IProject, ILink } from './../Model/IPortfolio'
import DateRange from './DateRange';

interface IProjectCardProps extends IProject {
    isOpen: boolean,
    onCardToggle: (key: string | null) => void,
}

interface IProjectCardState {
    size: "auto" | "12",
}

export default class ProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {
    state: IProjectCardState = {
        size: this.props.isOpen ? "12" : "auto",
    }

    private isOpen = (): boolean => this.props.isOpen || this.state.size === "12";

    private toggleCard = () => {
        this.props.onCardToggle(this.props.isOpen ? null : this.props.name);
    }

    private setSize = (size: "12" | "auto") => this.setState((prevState) => ({ ...prevState, size, }));

    private collapseEvents = {
        onEntering: () => this.setSize("12"),
        onExiting: () => this.setSize("12"),
        onExited: () => this.setSize("auto"),
    }

    private urlPrefix = `${process.env.PUBLIC_URL}/Assets/Projects/`;

    private getPreview = (): string => this.props.preview ? this.urlPrefix + this.props.preview : `https://via.placeholder.com/100`

    private renderLinks = (): JSX.Element => (
        <Col lg="3">
            <strong>Links:</strong>
            <ul>{this.props.links!.map(link => <li><a href={link.url}>{link.title}</a></li>)}</ul>
        </Col>
    )

    private renderImages = (): JSX.Element => (
        <Col className="w-100">
            <UncontrolledCarousel items={this.props.images!.map(image => ({
                src: this.urlPrefix + image.url,
                altText: image.title,
                header: image.title,
            }))} />
        </Col>
    )

    render = (): JSX.Element => (
        <Col xs={this.state.size}>
            <Card className={`project-card ${this.isOpen() && "project-card-open"}`} onClick={this.toggleCard}>
                <div className="project-card-preview-container">
                    <CardImg top src={this.getPreview()} alt="Card image cap" className="project-card-preview" />
                </div>
                <div className="project-card-overlay"></div>
                <Row noGutters className="project-card-text">
                    <Col>
                        {this.props.name}
                    </Col>
                </Row>
            </Card>
            <Collapse isOpen={this.props.isOpen} {...this.collapseEvents}>
                <Row className="project-card-body">
                    <Col lg={ this.props.links ? "9" : "12"}>
                        <DateRange start={this.props.start} end={this.props.end} />
                        <div><strong>My role:</strong> {this.props.role}</div>
                        <div className="project-card-description" dangerouslySetInnerHTML={{ __html: this.props.description! }} />
                    </Col>
                    { this.props.links && this.renderLinks() }
                    { this.props.images && this.renderImages() }
                </Row>
            </Collapse>
        </Col>
    )
}
