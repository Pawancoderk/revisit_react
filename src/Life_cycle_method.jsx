import { useEffect } from "react";
export function Life_cycle({ count }) {
  useEffect(() => {
    console.log("Mounting pahse")
  }, []);

  useEffect(()=>{
    console.log("Updating phase")
  },
  [count])

  useEffect(()=>{
    return ()=>{
        console.log("unmount phase")
    }
  },[])
  return (
    <div>
      <h1>life cycle method {count}</h1>
    </div>
  );
}
