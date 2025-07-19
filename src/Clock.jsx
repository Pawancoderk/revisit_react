import { useEffect, useState } from "react"

export function Clock({color}){
    const [time, setTime] = useState(0)
     useEffect(()=>{
        setInterval(()=>{
             setTime(new Date().toLocaleTimeString())
        })
     }
     ,[])
    return(
        <div style={{color: color, backgroundColor: "indianred", borderRadius:"5px"  }}>
              <h1>{time}</h1>
        </div>
    )
}