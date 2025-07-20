import { useEffect, useState } from "react"

export function Effect(){

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    useEffect(()=>{
        // callone()
        counter1()
    }
    ,[counter])
    function callone(){
        console.log("function called")
    }
    function counter1(){
        console.log("counter")
    }


   
    return (
        <div>
           <h1>useEffect Hook</h1>
           <button onClick={()=>setCounter(counter+1)}>Counter:  {counter}</button>
           <button onClick={()=>setData(data+1)}>Data:  {data}</button>
        </div>
    )
}