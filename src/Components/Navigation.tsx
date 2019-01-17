import React from 'react';
import ResizeDetector from 'react-resize-detector';
import { Nav, NavLink, Collapse, Button, } from 'reactstrap';

import './Navigation.scss';


export default class Navigation extends React.Component<{ subtitle: string }, { isOpen: boolean }> {
    state = {
        isOpen: false,
    }

    private show = (width: number): boolean => {
        return width > 576 || this.state.isOpen;
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
                <div className="header-brand">
                    <div className="header-title">Portfolio</div>
                    <div className="header-subtitle">{this.props.subtitle}</div>
                </div>
                <Button color="secondary" className="nav-button" onClick={this.toggleNav}>Menu</Button>
                <ResizeDetector handleWidth resizableElementId="root" render={({width, height}) => (
                    <Collapse isOpen={this.show(width)} className="header-nav">
                        <Nav vertical>
                            <NavLink href="#">Home</NavLink>
                            <NavLink href="#biography">Biography</NavLink>
                            <NavLink href="#contacts">Contacts</NavLink>
                        </Nav>
                    </Collapse>
                )}>
                </ResizeDetector>
            </div>
        </header>
    );
}