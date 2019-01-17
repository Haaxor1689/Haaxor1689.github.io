import React from 'react';
import { Col, } from 'reactstrap';
import SectionTitle from './SectionTitle';
import './Biography.scss'

import { IBiography } from "./../Model/IPortfolio"

import Avatar from "./../Assets/avatar.jpg"

export default class Biography extends React.Component<IBiography> {
    render = (): JSX.Element => (
        <Col>
            <SectionTitle title="Biography" id="biography" />
            <div className="biography">
                <img src={Avatar} className="biography-avatar" />
                <div className="biography-title">{this.props.name}</div>
                <div className="biography-headline">{this.props.headline}</div>
            </div>
            <div className="biography-summary">{this.props.summary}</div>
        </Col>
    );
}
