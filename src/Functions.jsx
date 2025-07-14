function Function() {
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }
  return <h1>{operation(4, 5, "+")}</h1>;
}

export default Function;
