export function Collage({collage}) {
    console.log(collage)
  return (
    <div style={{backgroundColor:"#000", padding:"5px",margin:"10px", borderRadius:"5px"}}>
        
      <h2>Name: {collage.Name}</h2>
      <ul>
        <li>
          <h3>Student Name: {collage.student[0].name}</h3>
        </li>
        <li>
          <h3>Student Age: {collage.student[0].age}</h3>
        </li>
      </ul>
    </div>
  );
}
