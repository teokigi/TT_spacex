import React from 'react';

const LaunchList = (props) =>{
    if (props.length ===0){
        return ("loading/no launches...")
    }

    return(
        <p> launch list</p>
    )
}

export default LaunchList;