import React from 'react';
import { Row, Col } from 'reactstrap';
import ReactGA from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faStackOverflow, faGithub, faPinterest } from '@fortawesome/free-brands-svg-icons'

import { IContacts } from './../Model/IPortfolio'

export default class Contact extends React.Component<IContacts> {
    private registerClick = (url: string) => {
        ReactGA.event({
            category: "Social",
            action: "Clicked social link",
            label: url,
        });
    }

    private renderSocial = (text: string, url: string, icon: IconDefinition): JSX.Element => this.renderBase(<div>{text}</div>, url, icon);

    private renderEmail = (text: string, url: string, icon: IconDefinition): JSX.Element => {
        const parts = text.split('@');
        return this.renderBase(<div>{parts[0]}<wbr />@{parts[1]}</div>, url, icon);
    }

    private renderBase = (text: JSX.Element, url: string, icon: IconDefinition): JSX.Element => (
        <Col sm="4" xs="6" className="social">
            <a href={url} onClick={() => this.registerClick(url)} className="social-link">
                <FontAwesomeIcon icon={icon} size="4x" />
                {text}
            </a>
        </Col>
    )

    render = (): JSX.Element => (
        <Col>
            <Row>
                { this.props.email && this.renderEmail(this.props.email, `mailto:${this.props.linkedin}`, faAt)}
                { this.props.linkedin && this.renderSocial(`in\\${this.props.linkedin}`, `https://www.linkedin.com/in/${this.props.linkedin}/`, faLinkedin)}
                { this.props.twitter && this.renderSocial(`@${this.props.twitter}`, `https://twitter.com/${this.props.twitter}`, faTwitter)}
                { this.props.stackoverflow && this.renderSocial('StackOverflow', `https://stackoverflow.com/users/${this.props.stackoverflow}`, faStackOverflow)}
                { this.props.github && this.renderSocial('Github', `https://github.com/${this.props.github}`, faGithub)}
                { this.props.pinterest && this.renderSocial('Pinterest', `https://cz.pinterest.com/${this.props.pinterest}/`, faPinterest)}
            </Row>
        </Col>
    );
}
