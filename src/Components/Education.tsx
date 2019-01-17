import React from 'react';

import CompanyItem from './CompanyItem';
import DateRange from './DateRange';

import { IEducation } from './../Model/IPortfolio'

export default class Education extends React.Component<IEducation> {
    renderBody = (): JSX.Element => (
        <div>
            <DateRange start={this.props.start} end={this.props.end} />
            <div>
                { this.props.degree && <span className="education-degree">{this.props.degree} </span> }
                { this.props.field }
            </div>
        </div>
    );

    render = (): JSX.Element => <CompanyItem { ...this.props.school } body={this.renderBody()} />
}
