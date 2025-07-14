import { useState } from "react";

export function Render() {
  const [display, setDisplay] = useState(true);
  return (
    <>
        <h1>Toggle in react</h1>
      <button onClick={()=>setDisplay(!display)}>Click to toggle</button>

      {
        display ? <h1>Pawan</h1> : <h1>Karan</h1>
      }
    </>
  );
}
