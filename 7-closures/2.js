function outerFunction() {
  let message = "Hello from outer function";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const greet = outerFunction();
greet();
