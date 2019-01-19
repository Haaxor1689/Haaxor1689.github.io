import React from 'react';

export default class DateRange extends React.Component<{ start: string, end?: string}> {
    private getEnd = (): string => this.props.end || "Present";
    render = (): JSX.Element => (
        <span className="date-range">
            {this.props.start} { this.props.start !== this.getEnd() && `- ${this.getEnd()}` }
        </span>
    )
}
