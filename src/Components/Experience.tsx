import React from 'react';
import CompanyItem from './CompanyItem';

import { IExperience } from './../Model/IPortfolio'

export default class Experience extends React.Component<IExperience> {
    renderBody = (): JSX.Element => (
        <div>
            {this.props.description}
        </div>
    );

    render = (): JSX.Element => <CompanyItem { ...this.props.company } body={this.renderBody()} />
}
