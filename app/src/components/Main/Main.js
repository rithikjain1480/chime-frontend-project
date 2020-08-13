import React, { Component } from 'react';
import './Main.css';
import OuterLevel from '../OuterLevel/OuterLevel';
import MainHeader from '../MainHeader/MainHeader';
import {getData} from '../../apis/api.js';
import { Accordion } from 'semantic-ui-react';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            header: ''
        }
    }

    componentDidMount(){
        getData().then((response) => {
            this.setState({
                data: response.categories,
                header: response.name
            });
        });
    }

    render() {
        return (
            <div className="main">
                <MainHeader text={this.state.header} />
                <Accordion fluid exclusive={false}>
                    {this.state.data.map((item, i) => (
                        <OuterLevel data={item} key={this.state.data[i].name + i} />
                    ))}
                </Accordion>
            </div>
        )
    }
}
