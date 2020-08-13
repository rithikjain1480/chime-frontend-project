import React, { Component } from 'react';
import './ChildCategory.css';
import { Header } from 'semantic-ui-react';

export default class ChildCategory extends Component {
    render() {
        return (
            <div className="childCategory">
                <Header as="h3">{this.props.text}</Header>
            </div>
        )
    }
}
