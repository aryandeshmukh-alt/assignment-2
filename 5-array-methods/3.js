const numbers = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);

