export function Array() {
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

  return (
    <>
      <h1>Loop in JSX with map function</h1>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>age</td>
            <td>email</td>
            <td>id</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

            <h1>Dummy data</h1>
      <table border="1" >
        <thead>
          <tr>
            <td>Name</td>
            <td>age</td>
            <td>email</td>
            <td>id</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aman</td>
            <td>25</td>
            <td>Aman@gmail.com</td>
            <td>1</td>
          </tr>

          <tr>
            <td>Krish</td>
            <td>28</td>
            <td>Krish@gmail.com</td>
            <td>2</td>
          </tr>

          <tr>
            <td>Anuj</td>
            <td>24</td>
            <td>Anuj@gmail.com</td>
            <td>3</td>
          </tr>

          <tr>
            <td>Veer</td>
            <td>23</td>
            <td>Veer@gmail.com</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
