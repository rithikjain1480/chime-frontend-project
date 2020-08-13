import React, { Component } from 'react';
import './MainHeader.css';
import { Header, Icon } from 'semantic-ui-react';

export default class MainHeader extends Component {
    render() {
        return (
            <div className="mainHeader">
                <Icon name='food' />
                <Header as="h1">{this.props.text.toUpperCase()}</Header>
            </div>
        )
    }
}
