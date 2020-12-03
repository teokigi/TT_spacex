import React, {Component} from 'react';
import Request from '../helpers/spacexAPIservice';
import LaunchList from './LaunchList.js';
const { Component } = require("react");

class LaunchContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            launches=null
        }
    }

    componentDidMount(){
        const request = new Request();

        request.get()
        .then(data =>this.setState({launches:data}))
    }

    render(){
        {console.log(this.state)}
        <p> launches
        <LaunchList/>
        </p>
    }
}
export default LaunchContainer;