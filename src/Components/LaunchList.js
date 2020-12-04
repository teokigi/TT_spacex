import React, { useState } from 'react';

const LaunchList = (props) =>{
    
    const [selYear,setselYear] = useState({year:null})
    const [sortedLaunch,setsortedLaunch] = useState({launches:props.launchData})

    function sortLaunchData(){
        setsortedLaunch({launches:sortedLaunch.launches.reverse()})
        
    }
    if (props ==null){
        return ("loading/no launches...")
    }
    
    const filteredLaunches = sortedLaunch.launches.filter(launch=>launch.date_utc.slice(0,4)===selYear.year)
        .map((launch, index)=>{
        return(
            <div className="launchlist" key={index}>
                {launch.name},{launch.date_utc.slice(0,10)}
            </div>
            )
        })

    const allLaunches = sortedLaunch.launches.map((launch, index)=>{
        return(
            <div className="launchlist" key={index}>
                {launch.name},{launch.date_utc.slice(0,10)}
            </div>
        )
    })


    const yearOptions = props.launchData.map(launch=>launch.date_utc.slice(0,4))
        .filter((year, index, array)=>array.indexOf(year)===index)
        .map((year, index)=>(<option value={year} key={index}>{year}</option>))
    

        
    return(
        <div>
                    <select onChange={id=>setselYear({year:id.target.value})} defaultValue="default">
                        <option value="default"> Filter By year</option>
                    {yearOptions}
                    </select>
                    <button onClick={()=>sortLaunchData()}>Sort by Date</button>
                    
            {selYear.year===(null||'default')?allLaunches:filteredLaunches}
        </div>
    )
    
}

export default LaunchList;