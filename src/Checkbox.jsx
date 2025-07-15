import { useState } from "react";

export function Checkbox() {

    const [skills, setSkills] = useState([])
    

    const handleSkills = (event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
          setSkills([...skills,event.target.value])
        }else{
          setSkills([...skills.filter((item)=> item != event.target.value)])
        }
    }
  return (
    <>
      <h1>Select your skil</h1>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>

      <br />
      <br />

      <input onChange={handleSkills}  type="checkbox" id="js" value="JS" />
      <label htmlFor="js">JS</label>
      <br />
      <br />

      <input onChange={handleSkills}  type="checkbox" id="python" value="Python" />
      <label htmlFor="python">PYTHON</label>
      <br />
      <br />
      <input onChange={handleSkills}  type="checkbox" id="c++" value="C++" />
      <label htmlFor="c++">C++</label>
      <h1>{skills.toString()}</h1>
    </>
  );
}
