const text = "hello world";

const titleCaseText = text
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCaseText); // Hello World
