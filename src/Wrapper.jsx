export function Wrapper({children,color ="green"}){
    return (
        <>
        <div style={{color:color,border:"5px solid yellow ",margin:"50px"}}>
           {children}
        </div>
        </>
    )
}