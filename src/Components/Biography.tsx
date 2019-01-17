import React from 'react';
import { Col, } from 'reactstrap';

import Avatar from "./../Assets/avatar.jpg"

import { IBiography } from "./../Model/IPortfolio"

export default class Biography extends React.Component<IBiography> {
    render = (): JSX.Element => (
        <Col xs="12">
            <div className="biography">
                <img src={Avatar} className="biography-avatar" />
                <div className="biography-title">{this.props.name}</div>
                <div className="biography-headline">{this.props.headline}</div>
            </div>
            <div className="biography-summary">{this.props.summary}</div>
        </Col>
    );
}
