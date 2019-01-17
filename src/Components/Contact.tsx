import React from 'react';
import Col from 'reactstrap/lib/Col';

import './Skill.scss';

import { IContacts } from './../Model/IPortfolio'
import Row from 'reactstrap/lib/Row';

export default class Contact extends React.Component<IContacts> {
    private hasLinks = (): boolean => this.props.links.length > 0;

    private renderLinks = (): JSX.Element => (
        <Col md="4">
            <div>Other links:</div>
            <ul>
                { this.props.links.map((link) => <li><a href={link.url}>{link.title}</a></li>)} 
            </ul>
        </Col>
    )

    private renderSocial = (text: string, url: string): JSX.Element => (
        <Col>
            <a href={url}>{text}</a>
        </Col>
    )

    render = (): JSX.Element => (
        <Col>
            <Row>
                <Col>
                    <Row>
                        { this.props.linkedin && this.renderSocial(`in\\${this.props.linkedin}`, `https://www.linkedin.com/in/${this.props.linkedin}/`)}
                        { this.props.twitter && this.renderSocial(`@${this.props.twitter}`, `https://twitter.com/${this.props.twitter}`)}
                        { this.props.stackoverflow && this.renderSocial('StackOverflow', `https://stackoverflow.com/users/${this.props.stackoverflow}`)}
                        { this.props.github && this.renderSocial('Github', `https://github.com/${this.props.github}`)}
                        { this.props.pinterest && this.renderSocial('Pinterest', `https://cz.pinterest.com/${this.props.pinterest}/`)}
                    </Row>
                </Col>
                { this.hasLinks() && this.renderLinks() }
            </Row>
        </Col>
    );
}
