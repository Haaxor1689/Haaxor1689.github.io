import React from 'react';
import { Nav, NavLink, Collapse, Button, } from 'reactstrap';
import ResizeDetector from 'react-resize-detector';

interface INavigationProps {
    subtitle: string;
    sections: { name: string, anchor: string }[];
}

export default class Navigation extends React.Component<INavigationProps, { isOpen: boolean }> {
    state = {
        isOpen: false,
    }

    private show = (width: number): boolean => {
        return width > 768 || this.state.isOpen;
    }

    private toggleNav = () => {
        this.setState((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
        }));
    }

    render = (): JSX.Element => (
        <header>
            <div className="sticky-top">
                <div className="nav-brand">
                    <div className="nav-title">Portfolio</div>
                    <div className="nav-subtitle">{this.props.subtitle}</div>
                </div>
                <Button color="primary" className="nav-button" onClick={this.toggleNav}>Menu</Button>
                <ResizeDetector handleWidth resizableElementId="root" render={({width, height}) => (
                    <Collapse isOpen={this.show(width)} className="nav-list">
                        <Nav vertical>
                            <NavLink href="#root">Home</NavLink>
                            <div className="nav-sections">
                            { this.props.sections.map((section) => <NavLink href={`#${section.anchor}`}>{section.name}</NavLink>)}
                            </div>
                            <NavLink href="#biography">Biography</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </Nav>
                    </Collapse>
                )}>
                </ResizeDetector>
            </div>
        </header>
    );
}