export function ReuseComponent2({user}){
    return(
        < div style={{border:"1px solid yellow",padding:"10px",margin:"10px",width:"400px",borderRadius:"10px"}}>
        <h3 style={{color:"red"}}>Name: {user.name}</h3>
        <h3 style={{color:"darksalmon"}}>Age: {user.age}</h3>
        <h3 style={{color:"darkcyan"}}>email: {user.email}</h3>
        </div>
    )
}  