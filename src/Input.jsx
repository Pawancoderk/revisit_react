import { useState } from "react"

export function Input() {
    const [val, setVal] =useState() 
  return (
    <>
      <h1>Get Input field Value</h1>
      <input onChange={(event)=>setVal(event.target.value)} type="text" placeholder="Enter value" value={val} />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear</button>
    </>
  );
}
