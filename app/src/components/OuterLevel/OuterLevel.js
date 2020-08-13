import React, { Component } from 'react';
import './OuterLevel.css';
import InnerLevel from '../InnerLevel/InnerLevel';
import Item from '../Item/Item';
import Category from '../Category/Category';
import { Accordion } from 'semantic-ui-react';

export default class OuterLevel extends Component {
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
            <div className="outer">
                <Accordion.Title
                  active={this.state.active}
                  index={0}
                  onClick={this.handleClick}
                >

                    <Category text={this.props.data.name} />
                </Accordion.Title>
                <Accordion.Content active={this.state.active}>
                    {this.props.data.child_categories.length > 0 &&
                        <Accordion fluid exclusive={false}>
                            {this.props.data.child_categories.map((item, i) => (
                                <InnerLevel data={item} key={this.props.data.child_categories[i].name + i} />
                            ))}
                        </Accordion>
                    }
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
