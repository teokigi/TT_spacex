import React from 'react';

const LaunchList = (props) =>{
    if (props ==null){
        return ("loading/no launches...")
    }

    const allLaunches = props.launchData.map((launch, index)=>{
        return(
            <div id="launchlist" key={index}>
                {launch.name},{launch.date_utc.slice(0,10)}
            </div>
        )
    })

    const yearOptions = props.launchData.map(launch=>launch.date_utc.slice(0,4))
        .filter((year, index, array)=>array.indexOf(year)===index)
        .map((year, index)=>{
            return(
                <option value={year} key={index}>{year}</option>
            )
        })

    return(
        <div>
                     <select>
                         <option> Filter By year</option>
                        {yearOptions}
                     </select>
                     <button>Sort by Date</button>
        {allLaunches}
        </div>
    )
}

export default LaunchList;