import { useState } from "react"

export function ContolledComponent(){
   
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <>
        <h1>ContolledComponent</h1>

        <form action="">
            <input type="text"value={name}  onChange={(event)=>setName(event.target.value)}  placeholder="Enter Name" />
            <br />
             <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)} placeholder="Enter email" />
            <br />
             <input type="password"value={password}  onChange={(event)=> setPassword(event.target.value)}  placeholder="Enter password" />
            <br />
            <button >Signup</button>
            <button onClick={()=>{setName(""); setEmail("");setPassword("")}} >Clear</button>
            
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{password}</h2>
        </form>
        </>
    )
}