
import './App.css'
import Login,{Logout} from "./Usercomponent"
import Function from './Functions'
import { Counter } from './Counter'
import { Render } from './ConditionalRendering'
import { MultipleRender } from './MultipleConditionRendering'
import { User } from './User'
import { Default } from './Defaultprop'
import { Wrapper } from './Wrapper'


function App() {
  // let name = "Pawan" 
  let Userobj = {
    name: "Pawan",
    age: 24,
    email: "Pawan@gmail.com"
  }

  let Userobj2 = {
    name: "Karan",
    age: 25,
    email: "Karan@gmail.com"
  }
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
  <Wrapper >
    <h1>Wrapper</h1>
  </Wrapper>
  </>
  )
}

export default App
