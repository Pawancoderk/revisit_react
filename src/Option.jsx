import { useState } from "react"
import { Clock } from "./Clock"

export function Option(){
    const [color, setColor] = useState("green")
    return (
        <div>
            <select name="" id="" onChange={(event)=> setColor(event.target.value)}>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <Clock color= {color}/>
        </div>
    )
}