import { useEffect } from "react"

export function Effectprop({count}){

    const handleCount = ()=>{
        console.log("counter called")
    }
    
    useEffect(()=>{

        handleCount()
    },[])

    return (
        <div>
            <h2>Effect_prop: {count}</h2>
        </div>
    )
}