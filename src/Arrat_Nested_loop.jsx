import { Collage } from "./College";

export function Array_Nested_loop() {
  const collegeData = [
    {
      Name: "IIT DELHI",
      email: "iitdelhi@gmail.com",
      student: [
        {
          name: "Aman",
          age: 28,
        },
      ],
    },
    {
      Name: "IIT BIHAR",
      email: "iitbihar@gmail.com",
      student: [
        {
          name: "Shivam",
          age: 24,
        },
      ],
    },
    {
      Name: "IIT MUMBAI",
      email: "iitmumbai@gmail.com",
      student: [
        {
          name: "Karan",
          age: 21,
        },
      ],
    },
  ];
  return (
    <div>
      {collegeData.map((collage, index) => (
        <div key={index}>
         <Collage collage= {collage}/>
        </div>
      ))}
    </div>
  );
}
