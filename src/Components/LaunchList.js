import React, { useState } from 'react';

const LaunchList = (props) =>{
    const [selYear,setselYear] = useState({year:null})
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

    const filteredLaunches = props.launchData.filter(launch=>launch.date_utc.slice(0,4)===selYear.year)
        .map((launch, index)=>{
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
    
    if(selYear.year==null){
    return(
        <div>
                     <select onChange={id=>setselYear({year:id.target.value})} defaultValue="default">
                         <option disabled value="default"> Filter By year</option>
                        {yearOptions}
                     </select>
                     <button>Sort by Date</button>
        {allLaunches}
        </div>
    )
    } else{
        return(
            <div>
                {filteredLaunches}
            </div>
        )
    }
}

export default LaunchList;