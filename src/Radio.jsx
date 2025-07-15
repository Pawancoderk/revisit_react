import { useState } from "react"

export function Radio(){
    const [gender, setGender] = useState("female");
    return (
        <>
        <h2>Radio handle and Dropdown</h2>
        <h3>Select gender</h3>

        <input type="radio" onClick={(event)=> setGender(event.target.value)}  name="gender" value="male"  id="male" checked={gender == "male"} />
        <label htmlFor="male" >Male</label>
        <input type="radio" onClick={(event)=> setGender(event.target.value)} name="gender" value="female"  id="female" checked={gender == "female"} />
        <label htmlFor="female">Female</label>
        <h2>{gender}</h2>
        <br /><br /><br />

        <h2>Slecet city</h2>
        <select defaultValue={"UAE"}>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="UAE">UAE</option>
            <option value="Saudi">Saudi</option>
        </select>
        </>
    )
}