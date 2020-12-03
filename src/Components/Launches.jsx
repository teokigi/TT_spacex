import React, {Component} from 'react';
import Request from '../Helpers/spacexAPIservice';
import LaunchList from './LaunchList.js';

class LaunchContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            launches:null
        }
    }

    componentDidMount(){
        const request = new Request();

        request.get()
        .then(data =>this.setState({launches:data}))
    }

    render(){
        return(
        <p> launches
        <LaunchList launchData={this.state.launches}/>
        </p>
        )
    }
}
export default LaunchContainer;