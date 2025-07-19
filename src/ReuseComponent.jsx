import { ReuseComponent2 } from "./ReuseComponent2";

export function ReuseComponent(){
      const userData = [
    {
      name: "Aman",
      age: 29,
      email: "Aman@gmail.com",
      id: 1,
    },
    {
      name: "Krish",
      age: 28,
      email: "Krish@gmail.com",
      id: 2,
    },
    {
      name: "Anuj",
      age: 24,
      email: "Anuj@gmail.com",
      id: 3,
    },
    {
      name: "Veer",
      age: 23,
      email: "Veer@gmail.com",
      id: 4,
    },
  ];
    return(
        <>
        <h1>Reuse component in loop</h1>
        {
            userData.map((user)=>(
              <div key={user.id} >
                < ReuseComponent2 user={user}/>
                
                </div>
            ))
        }
        </>
    )
}