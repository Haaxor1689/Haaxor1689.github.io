import React from 'react';
import CompanyItem from './CompanyItem';

import { IEducation } from './../Model/IPortfolio'

export default class Education extends React.Component<IEducation> {
    renderBody = (): JSX.Element => (
        <div>
            {this.props.field}
        </div>
    );

    render = (): JSX.Element => <CompanyItem { ...this.props.school } body={this.renderBody()} />
}
