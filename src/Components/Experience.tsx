import React from 'react';

import CompanyItem from './CompanyItem';
import DateRange from './DateRange';

import { IExperience } from './../Model/IPortfolio'

export default class Experience extends React.Component<IExperience> {
    renderBody = (): JSX.Element => (
        <div>
            <DateRange start={this.props.start} end={this.props.end} />
            { this.props.description && <div className="description">{this.props.description}</div> }
        </div>
    );

    render = (): JSX.Element => <CompanyItem { ...this.props.company } body={this.renderBody()} />
}
