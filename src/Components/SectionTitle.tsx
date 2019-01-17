import React from 'react';
import './SectionTitle.scss'

export default class SectionTitle extends React.Component<{ title: string, id?: string }> {
    render = (): JSX.Element => (
      <div className="section-title" id={this.props.id}>
          <span>{this.props.title}</span>
          <hr />
      </div>
    );
}
