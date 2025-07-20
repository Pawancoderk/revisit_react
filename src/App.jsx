
import './App.css'
import Login,{Logout} from "./Usercomponent"
import Function from './Functions'
import { Counter } from './Counter'
import { Render } from './ConditionalRendering'
import { MultipleRender } from './MultipleConditionRendering'
import { User } from './User'
import { Default } from './Defaultprop'
import { Wrapper } from './Wrapper'
import { Input } from './Input'
import { ContolledComponent } from './ConrolledComponent'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'
import { Array } from './Array'
import { ReuseComponent } from './ReuseComponent'
import { Option } from './Option'
import { Array_Nested_loop } from './Arrat_Nested_loop'
import { Effect } from './Effect'
import { Effectprop } from './Effect_prop'
import { use, useState } from 'react'
import { Life_cycle } from './Life_cycle_method'


function App() {
  // let name = "Pawan" 
  // let Userobj = {
  //   name: "Pawan",
  //   age: 24,
  //   email: "Pawan@gmail.com"
  // }

  // let Userobj2 = {
  //   name: "Karan",
  //   age: 25,
  //   email: "Karan@gmail.com"
  // }

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(true)
  return (
  <>
  {/* <h1>Pawan</h1> */}
  {/* <Login/> */}
  {/* <Logout/> */}
  {/* <Function/> */}
  {/* <Counter/> */}
  {/* <Render/> */}
  {/* <MultipleRender/> */}
  {/* <User name={name} Userobj = {Userobj}/> */}
  {/* <User  Userobj = {Userobj2}/> */}
  {/* <Default name= "Pawan"/> */}
  {/* <Default/> */}
  {/* <Wrapper color="blue" >
    <h1>Wrapper</h1>
  </Wrapper> */}

    {/* <Wrapper  >
    <h1>Second wrapper</h1>
  </Wrapper> */}

  {/* <Input/> */}
  {/* <ContolledComponent/> */}
  {/* <Checkbox/> */}
  {/* <Radio/> */}
  {/* <Array/> */}
  {/* <ReuseComponent/> */}
  {/* <Option/> */}
  {/* <Array_Nested_loop/> */}
  {/* <Effect/> */}
  {/* <Effectprop count={count}/> */}
  {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
  
   {
    display ? <Life_cycle count={count} />  : null
   }  
    <button onClick={()=>setCount(count+1)}>Click</button>
   <button onClick={()=>setDisplay(!display)}>Toggle</button>
  </>
  )
}

export default App
