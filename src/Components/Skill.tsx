import React from 'react';
import Col from 'reactstrap/lib/Col';

import './Skill.scss';

import { ISkill } from './../Model/IPortfolio'

export default class Experience extends React.Component<ISkill> {
    render = (): JSX.Element => (
        <Col xl md="6">
            <div className="skill-description"><span className="skill-title">{this.props.field}</span>{this.props.description}</div>
        </Col>
    );
}
