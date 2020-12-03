import React, {Component} from 'react';
import Request from '../Helpers/spacexAPIservice';
import LaunchList from './LaunchList.js';

class LaunchContainer extends Component{
    constructor(props){
        super(props);

        this.state=null;
    }

    filterLaunchYear(year){
        this.setState({filteredLaunches:this.state.launches.filter(launch=>launch.date_utc.slice(0,4)==year)})
    }
    componentDidMount(){
        const request = new Request();

        request.get()
        .then(data =>this.setState({launches:data}))
    }

    render(){
        if(this.state != null ){
            return(
                <div>
                    <button>Filter By Year</button>
                    <LaunchList launchData={this.state.launches}/>
                </div>
            
            )
        }else{
            return(
                <p>loading launch data...</p>)
        }
    }
}
export default LaunchContainer;