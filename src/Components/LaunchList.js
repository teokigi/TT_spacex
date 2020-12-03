import React from 'react';

const LaunchList = (props) =>{
    if (props ==null){
        return ("loading/no launches...")
    }

    const allLaunches = props.launchData.map((launch, index)=>{
        return(
            <div id="launchlist">
                {launch.name}
            </div>
        )
    })

    return(
        <p>
        {allLaunches}
        </p>
    )
}

export default LaunchList;