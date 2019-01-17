import React from 'react';
import './CompanyItem.scss';

import { ICompany } from '../Model/IPortfolio'
import Media from 'reactstrap/lib/Media';

interface ICompanyItemProps extends ICompany {
    body: JSX.Element;
}

export default class XompanyItem extends React.Component<ICompanyItemProps> {
    private getLogo = (): string =>  this.props.logo ? `${process.env.PUBLIC_URL}/Assets/Logos/${this.props.logo}.png` : "http://via.placeholder.com/60x60";

    render = (): JSX.Element => (
        <Media className="company">
            <Media left href={this.props.url}>
                <div className="company-logo-wrapper">
                    <img className="company-logo" src={this.getLogo()} alt="Company logo" />
                </div>
            </Media>
            <Media body>
                <Media heading>{this.props.name}</Media>
                {this.props.body}
            </Media>
        </Media>
    );
}
