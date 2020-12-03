import React from 'react';

const LaunchList = (props) =>{
    if (props ==null){
        return ("loading/no launches...")
    }

    const allLaunches = props.launchData.map((launch, index)=>{
        return(
            <div id="launchlist" key={index}>
                {launch.name},{launch.date}
            </div>
        )
    })

    return(
        <div>
        {allLaunches}
        </div>
    )
}

export default LaunchList;