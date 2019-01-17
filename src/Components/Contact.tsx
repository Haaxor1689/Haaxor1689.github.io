import React from 'react';
import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faStackOverflow, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'

import { IContacts } from './../Model/IPortfolio'

export default class Contact extends React.Component<IContacts> {
    private renderSocial = (text: string, url: string, icon: IconDefinition): JSX.Element => (
        <Col xs="4" className="social">
            <a href={url} className="social-link">
                <FontAwesomeIcon icon={icon} size="4x" />
                <div>{text}</div>
            </a>
        </Col>
    )

    render = (): JSX.Element => (
        <Col>
            <Row>
                { this.props.email && this.renderSocial(this.props.email, `email://${this.props.linkedin}/`, faAt)}
                { this.props.linkedin && this.renderSocial(`in\\${this.props.linkedin}`, `https://www.linkedin.com/in/${this.props.linkedin}/`, faLinkedin)}
                { this.props.twitter && this.renderSocial(`@${this.props.twitter}`, `https://twitter.com/${this.props.twitter}`, faTwitter)}
                { this.props.stackoverflow && this.renderSocial('StackOverflow', `https://stackoverflow.com/users/${this.props.stackoverflow}`, faStackOverflow)}
                { this.props.github && this.renderSocial('Github', `https://github.com/${this.props.github}`, faGithub)}
                { this.props.pinterest && this.renderSocial('Pinterest', `https://cz.pinterest.com/${this.props.pinterest}/`, faPinterest)}
            </Row>
        </Col>
    );
}
