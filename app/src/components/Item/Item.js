import React, { Component } from 'react';
import './Item.css';
import { Button, Header, Icon, Modal, Popup } from 'semantic-ui-react';

export default class Item extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        var divStyling = this.props.data.available ? {cursor: "pointer"} : {cursor: "not-allowed"};
        var featuredStyling = {color: "gold"};
        return (
            <React.Fragment>
            {this.props.data.available ?
                <Modal closeIcon open={this.state.open} trigger={
                    <div className="item" style={divStyling}>
                        <p className="itemName">{this.props.data.name + '   '}
                        {this.props.data.featured && <Popup content='Featured item!' position='top center' trigger={<Icon name="star" style={featuredStyling} />} />}</p>
                        <p className="itemDesc">{this.props.data.description}</p>
                        <p className="itemPrice">{'$' + this.props.data.price.toFixed(2)}</p>
                    </div>
                } onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})}>
                    <Header icon='food' content='Add item to bag?' />
                    <Modal.Content>
                        <p className="itemName">{this.props.data.name + '   '}
                        {this.props.data.featured && <Popup content='Featured item!' position='top center' trigger={<Icon name="star" style={featuredStyling} />} />}</p>
                        <p className="itemDesc">{this.props.data.description}</p>
                        <p className="itemPrice">{'$' + this.props.data.price.toFixed(2)}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setState({open: false})}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' onClick={() => this.setState({open: false})}>
                            <Icon name='checkmark' /> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
                :
                <Popup content='Item unavailable... Check back later!' position='top center' wide trigger=
                {<div className="itemUnavailable" style={divStyling}>
                    <p className="itemName">{this.props.data.name + '   '}
                    {this.props.data.featured && <Icon name="star" style={featuredStyling} />}</p>
                    <p className="itemDesc">{this.props.data.description}</p>
                    <p className="itemPrice">{'$' + this.props.data.price.toFixed(2)}</p>
                </div>} />
            }
            </React.Fragment>
        )
    }
}
