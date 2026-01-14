function sumNumbers(...numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum);
}

sumNumbers(1, 2, 3, 4, 5);
