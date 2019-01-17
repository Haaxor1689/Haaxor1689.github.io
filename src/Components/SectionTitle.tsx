import React from 'react';
import './SectionTitle.scss'
import { Col } from 'reactstrap';

export default class SectionTitle extends React.Component<{ title: string, id?: string }> {
    render = (): JSX.Element => (
        <Col xs="12">
            <div className="section-title" id={this.props.id}>
                <span>{this.props.title}</span>
                <hr />
            </div>
        </Col>
    );
}
