import React, { useState } from 'react';
import sort_ico from '../assets/icon/sort.png';

const LaunchList = (props) =>{
    
    const [selYear,setselYear] = useState({year:"default"})
    const [sortedLaunch,setsortedLaunch] = useState({launches:props.launchData})
    const [sortText,setsortText] = useState({text:"Ascending"})

    function sortLaunchData(){
        setsortedLaunch({launches:sortedLaunch.launches.reverse()})
        sortText.text === "Ascending"? setsortText({text:"Descending"}):setsortText({text:"Ascending"});
    }
    if (props ==null){
        return ("loading/no launches...")
    }
    
    const filteredLaunches = sortedLaunch.launches.filter(launch=>launch.date_utc.slice(0,4)===selYear.year)
        .map((launch, index)=>{
        return(
            <div className="launch-list" key={index}>
                {launch.name},{launch.date_utc.slice(0,10)}
            </div>
            )
        })

    const allLaunches = sortedLaunch.launches.map((launch, index)=>{
        return(
            <div className="launch-list" key={index}>
                {launch.name},{launch.date_utc.slice(0,10)}
            </div>
        )
    })


    const yearOptions = props.launchData.map(launch=>launch.date_utc.slice(0,4))
        .filter((year, index, array)=>array.indexOf(year)===index)
        .map((year, index)=>(<option value={year} key={index}>{year}</option>))
    

        
    return(
        <div>
                    <select className="action-menu" onChange={id=>setselYear({year:id.target.value})} defaultValue="default">
                        <option value="default"> Filter By year</option>
                    {yearOptions}
                    </select>
                    <button className="action-menu" onClick={()=>sortLaunchData()}>Sort {sortText.text} <img src={sort_ico}/></button>
                    
                    
            {selYear.year==='default'?allLaunches:filteredLaunches}
        </div>
    )
    
}

export default LaunchList;