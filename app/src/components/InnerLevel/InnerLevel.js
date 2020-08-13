import React, { Component } from 'react';
import './InnerLevel.css';
import Item from '../Item/Item';
import ChildCategory from '../ChildCategory/ChildCategory';
import { Accordion, Icon } from 'semantic-ui-react';

export default class InnerLevel extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div className="inner">
                <Accordion.Title
                  active={this.state.active}
                  index={0}
                  onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    <ChildCategory text={this.props.data.name} />
                </Accordion.Title>

                <Accordion.Content active={this.state.active}>
                    {this.props.data.items.length > 0 &&
                        this.props.data.items.map((item, i) => (
                            <Item data={item} key={this.props.data.items[i].name + i} />
                        ))
                    }
                </Accordion.Content>
            </div>
        )
    }
}
