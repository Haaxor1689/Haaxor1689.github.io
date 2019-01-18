import React from 'react';
import { Col, Card, CardImg } from 'reactstrap';

import { IProject } from './../Model/IPortfolio'

export default class ProjectCard extends React.Component<IProject> {
    private getPreview = (): string => this.props.preview ? `${process.env.PUBLIC_URL}/Assets/Logos/${this.props.preview}.png` : "http://via.placeholder.com/500x500";

    render = (): JSX.Element => (
        <Col>
            <Card>
                <CardImg top width="100%" src={this.getPreview()} alt="Card image cap" />
            </Card>
        </Col>
    )
}
