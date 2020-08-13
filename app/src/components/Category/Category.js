import React, { Component } from 'react';
import './Category.css';
import { Header } from 'semantic-ui-react';

export default class Category extends Component {
    render() {
        return (
            <div className="category">
                <Header as="h2">{this.props.text}</Header>
            </div>
        )
    }
}
