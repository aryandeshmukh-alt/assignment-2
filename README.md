## Variables & Data Types

### Assignment 1: Function to print data type using typeof

In JavaScript, different values like numbers, strings, booleans, undefined, etc. are called primitive data types. JavaScript provides the typeof operator to check the type of any value at runtime. The function below accepts any value as input and prints its data type using typeof. When this function is called with different kinds of values, it helps us understand how JavaScript identifies each data type internally.

function printType(value) {

  console.log(typeof value);

}

  

printType(10);          // number

printType("Hello");     // string

printType(true);        // boolean

printType(undefined);   // undefined

printType(null);        // object

  

* * *

### Assignment 2: Difference between null and undefined

In JavaScript, undefined means a variable has been declared but no value has been assigned to it yet. On the other hand, null is an intentional assignment, which means the developer is explicitly saying that the variable has no value. Even though both represent empty values, they are used in different situations. Also, typeof undefined returns "undefined", while typeof null surprisingly returns "object", which is a known JavaScript behavior.

let a;

let b = null;

  

console.log(a);        // undefined

console.log(b);        // null

  

console.log(typeof a); // undefined

console.log(typeof b); // object

  

This example clearly shows that undefined is the default state of a variable without a value, whereas null is a value assigned deliberately by the programmer.

* * *

  

## Functions

### Assignment 1: Normal function to add two numbers

A normal function in JavaScript is created using the function keyword. It can accept parameters, perform some operation, and return a value. In the code below, the function takes two numbers as input, adds them, and returns the result. When the function is called, the returned value is stored and printed, which confirms that the function is working correctly.

function addNumbers(a, b) {

  return a + b;

}

  

const result = addNumbers(10, 20);

console.log(result);

  

* * *

### Assignment 2: Convert the above function into an arrow function

Arrow functions are a shorter syntax introduced in ES6. They are often used for simple operations and make the code more readable. Below, the same addition logic is written using an arrow function. The behavior remains the same, but the syntax is cleaner and more concise.

const addNumbersArrow = (a, b) => {

  return a + b;

};

  

const resultArrow = addNumbersArrow(15, 25);

console.log(resultArrow);

  

This shows that both normal functions and arrow functions can achieve the same result, with the main difference being the syntax and how this behaves internally.

  

## Strings

### Assignment 1: Difference between \== and \=== in JavaScript

In JavaScript, \== is called the loose equality operator and it compares only the values after performing type conversion if needed. This means JavaScript tries to convert both values to the same type before comparing them. On the other hand, \=== is called the strict equality operator and it compares both the value and the data type without doing any type conversion. Because of this, \=== is safer and more predictable and is generally recommended in real projects.

console.log(10 == "10");   // true

console.log(10 === "10"); // false

  

console.log(true == 1);   // true

console.log(true === 1);  // false

  

The examples show that \== may give unexpected results due to type coercion, while \=== gives accurate comparisons by checking both value and type.

* * *

### Assignment 2: Convert "hello world" to title case

Title case means converting the first letter of each word to uppercase while keeping the rest of the letters in lowercase. In the example below, the string is first split into words, then each word’s first character is capitalized, and finally the words are joined back into a single string. This uses common string and array methods together.

const text = "hello world";

  

const titleCaseText = text

  .split(" ")

  .map(word => word\[0\].toUpperCase() + word.slice(1))

  .join(" ");

  

console.log(titleCaseText); // Hello World

  

This approach works for normal sentences and clearly shows how string methods can be combined to manipulate text in JavaScript.

## Objects

### Assignment 1: Create and access a user object

In JavaScript, objects are used to store related data in key–value pairs. Below, a user object is created with properties name, age, and city. These properties can be accessed directly using the dot notation, which is the most common and readable way to work with object data.

const user = {

  name: "Akshay",

  age: 25,

  city: "Pune"

};

  

console.log(user.name);

console.log(user.age);

console.log(user.city);

  

* * *

### Assignment 2: Print all keys and values using Object.keys, Object.values and forEach

JavaScript provides built-in methods to work with object properties. Object.keys() returns an array of all keys, and Object.values() returns an array of all values. Using forEach, we can iterate over these arrays and print each key and value in a clean way.

Object.keys(user).forEach(key => {

  console.log(key, user\[key\]);

});

  

Object.values(user).forEach(value => {

  console.log(value);

});

  

* * *

### Assignment 3: Add and delete object properties dynamically

Object properties can be added or removed at runtime. In this example, a new property mobileNumber is added to the user object, and the city property is removed using the delete keyword. This shows how flexible JavaScript objects are.

user.mobileNumber = "9999999999";

delete user.city;

  

console.log(user);

  

* * *

### Assignment 4: Group array of objects by role

Here, an array of user objects is given, and the task is to group them based on their role property. This is achieved using the reduce method, which builds a new object by iterating over the array. Each role becomes a key, and its value is an array of users belonging to that role.

const users = \[

  { name: "Pratik", role: "admin" },

  { name: "Amit", role: "user" },

  { name: "Neha", role: "admin" },

  { name: "Ravi", role: "user" }

\];

  

const groupedUsers = users.reduce((result, currentUser) => {

  if (!result\[currentUser.role\]) {

    result\[currentUser.role\] = \[\];

  }

  result\[currentUser.role\].push(currentUser);

  return result;

}, {});

  

console.log(groupedUsers);

  

The output object contains separate arrays for admin and user, making the data easier to manage and use in real-world applications.

  
  
  

## Array Methods

In JavaScript, array methods like map, filter, and reduce are very important because they help us transform, select, and combine data in a clean and readable way without modifying the original array.

const numbers = \[20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50\];

  

* * *

### Assignment 1: Use map to multiply each element by 2

The map method is used when we want to transform each element of an array and create a new array. In this case, every number in the array is multiplied by 2, and the result is stored in a new array.

const multipliedByTwo = numbers.map(num => num \* 2);

console.log(multipliedByTwo);

  

* * *

### Assignment 2: Use filter to find numbers greater than 10

The filter method is used to select elements that match a specific condition. Here, only the numbers greater than 10 are kept in the new array, while the rest are ignored.

const greaterThanTen = numbers.filter(num => num > 10);

console.log(greaterThanTen);

  

* * *

### Assignment 3: Use reduce to find the sum of all elements

The reduce method is used to combine all elements of an array into a single value. In this example, it adds all the numbers together to calculate the total sum of the array.

const sum = numbers.reduce((total, num) => {

  return total + num;

}, 0);

  

console.log(sum);

  

* * *

### Assignment 4: Reverse the array

To reverse an array, JavaScript provides the reverse method. Since reverse modifies the original array, a copy is created first using the spread operator to keep the original data unchanged.

const reversedArray = \[...numbers\].reverse();

console.log(reversedArray);

  

This completes the array methods assignment and demonstrates how each method is used for a specific purpose in real-world coding scenarios.

  

## ES6+ Features

ES6 introduced new syntax and features that make JavaScript code cleaner and easier to write. Destructuring, spread, and rest parameters are commonly used in modern JavaScript and help reduce extra code.

* * *

### Assignment 1: Object destructuring

Object destructuring allows us to extract specific properties from an object and store them in variables with the same name. In the example below, the name and age properties are taken from the user object and logged directly, without accessing them using dot notation.

const user = {

  name: "Akshay",

  age: 25,

  city: "Pune"

};

  

const { name, age } = user;

  

console.log(name); // Akshay

console.log(age);  // 25

  

* * *

### Assignment 2: Merge two arrays using spread operator

The spread operator (...) is used to expand elements of an array. By spreading two arrays into a new array, we can merge them easily without modifying the original arrays.

const arr1 = \[1, 2, 3\];

const arr2 = \[4, 5, 6\];

  

const mergedArray = \[...arr1, ...arr2\];

  

console.log(mergedArray); // \[1, 2, 3, 4, 5, 6\]

  

* * *

### Assignment 3: Function using rest parameters to calculate sum

Rest parameters allow a function to accept multiple arguments as an array. In this example, the function accepts five numbers, collects them using rest parameters, and then calculates the sum of all the numbers using reduce.

function sumNumbers(...numbers) {

  const sum = numbers.reduce((total, num) => total + num, 0);

  console.log(sum);

}

  

sumNumbers(1, 2, 3, 4, 5);

  

This demonstrates how ES6 features help write flexible and readable code while handling objects, arrays, and function arguments efficiently.

  

## Closures

Closures are created when a function remembers and continues to access variables from its outer (lexical) scope even after the outer function has finished executing. This is a core concept in JavaScript and is widely used for data hiding and state management.

* * *

### Assignment 1: Counter function using closure

In this example, the counter function creates a local variable count. It then returns an inner function that increments and prints the value of count. Even after the counter function has finished executing, the inner function still has access to the count variable. This happens because the inner function forms a closure over the variables of its outer function.

function counter() {

  let count = 0;

  

  return function () {

    count++;

    console.log(count);

  };

}

  

const increment = counter();

increment(); // 1

increment(); // 2

increment(); // 3

  

* * *

### Assignment 2: How inner functions access outer variables

Inner functions can access variables defined in their outer function because of lexical scoping. The scope of a variable is determined by where it is written in the code, not by where the function is called. In the example below, the inner function uses the message variable defined in the outer function, even after the outer function has returned.

function outerFunction() {

  let message = "Hello from outer function";

  

  function innerFunction() {

    console.log(message);

  }

  

  return innerFunction;

}

  

const greet = outerFunction();

greet();

  

This example clearly shows that the inner function remembers the message variable from its outer scope, which is what makes closures possible in JavaScript.

  

## Callbacks

A callback function is a function that is passed as an argument to another function and is executed later. Callbacks are commonly used in JavaScript to handle asynchronous operations like timers, events, or API calls.

In this example, a function is created that accepts another function as a callback. Inside the function, setTimeout is used to delay the execution of the callback by 10 seconds. Once the time is completed, the callback function is executed.

function executeAfterTenSeconds(callback) {

  setTimeout(() => {

    callback();

  }, 10000);

}

  

executeAfterTenSeconds(function () {

  console.log("Callback executed after 10 seconds");

});

  

This code shows how a function can control when another function runs, which is the core idea behind callback functions in JavaScript.

  

## Promises

Promises are used in JavaScript to handle asynchronous operations in a cleaner and more readable way compared to callbacks. A promise represents a value that may be available now, later, or never, and it can be handled using .then() for success and .catch() for errors.

* * *

### Assignment 1: Create getUserData function using Promise

In this example, the getUserData function returns a Promise. If the userId is 1, the promise is resolved with a user details object containing name, age, and city. If the userId is 0, the promise is rejected with an error message. The result of the promise is then handled using .then() and .catch() to manage both success and failure cases.

function getUserData(userId) {

  return new Promise((resolve, reject) => {

    if (userId === 1) {

      resolve({

        name: "Akshay",

        age: 25,

        city: "Pune"

      });

    } else {

      reject("Invalid user ID");

    }

  });

}

  

getUserData(1)

  .then(user => {

    console.log(user);

  })

  .catch(error => {

    console.log(error);

  });

  

* * *

### Assignment 2: Execution sequence of asynchronous code

In the code below, synchronous statements are executed first, followed by microtasks (Promises), and then macrotasks (setTimeout). Even though setTimeout has a delay of 0, it is still executed after the Promise because of the JavaScript event loop.

console.log("1: Start"); setTimeout(() => { console.log("2: setTimeout"); }, 0); Promise.resolve().then(() => { console.log("3: Promise"); }); console.log("4: End"); 

## Async / Await

Async and await are modern JavaScript features built on top of Promises. They make asynchronous code look and behave more like synchronous code, which improves readability and makes error handling easier using try and catch.

In this assignment, the Promise-based getUserData function from the previous section is rewritten using async and await. Instead of using .then() and .catch(), the response is handled inside a try block, and errors are handled in the catch block.

async function getUserData(userId) {

  try {

    if (userId === 1) {

      return {

        name: "Akshay",

        age: 25,

        city: "Pune"

      };

    } else {

      throw new Error("Invalid user ID");

    }

  } catch (error) {

    console.log(error.message);

  }

}

  

getUserData(1).then(user => {

  console.log(user);

});

  

This version of the code is easier to understand because the asynchronous logic is written in a top-down manner, and error handling is clearly separated using the try and catch blocks.

  
  

## Change text of a div on button click

This example selects a div and a button from the DOM. When the button is clicked, the text inside the div is changed using innerText.

<!DOCTYPE html>

<html>

<body>

  

<div id="message">Hello World</div>

<button id="changeBtn">Change Text</button>

  

<script>

  const button = document.getElementById("changeBtn");

  const messageDiv = document.getElementById("message");

  

  button.addEventListener("click", function () {

    messageDiv.innerText = "Text Changed Successfully";

  });

</script>

  

</body>

</html>

  

* * *

## Add a new list item dynamically

In this code, a new <li> element is created using JavaScript when the button is clicked. The new item is then added to the existing list using appendChild.

<!DOCTYPE html>

<html>

<body>

  

<ul id="list">

  <li>Item 1</li>

</ul>

<button id="addItem">Add Item</button>

  

<script>

  const button = document.getElementById("addItem");

  const list = document.getElementById("list");

  

  button.addEventListener("click", function () {

    const newItem = document.createElement("li");

    newItem.innerText = "New Item";

    list.appendChild(newItem);

  });

</script>

  

</body>

</html>

  

* * *

## Remove an element from the DOM

This example removes a paragraph element from the page when the button is clicked. The remove() method directly deletes the element from the DOM.

<!DOCTYPE html>

<html>

<body>

  

<p id="removeMe">Remove this text</p>

<button id="removeBtn">Remove</button>

  

<script>

  const button = document.getElementById("removeBtn");

  const paragraph = document.getElementById("removeMe");

  

  button.addEventListener("click", function () {

    paragraph.remove();

  });

</script>

  

</body>

</html>

  

* * *

## Display input value on screen while typing

Here, an input event listener is used to capture the text as the user types. The value from the input box is displayed in real time inside a paragraph.

<!DOCTYPE html> <html> <body> <input type="text" id="inputBox" /> <p id="output"></p> <script> const input = document.getElementById("inputBox"); const output = document.getElementById("output"); input.addEventListener("input", function () { output.innerText = input.value; }); </script> </body> </html>

  

## Timers

A countdown timer is a common use case for setInterval. The setInterval function runs a block of code repeatedly after a fixed time delay. In this example, a countdown starts from a given number and decreases every second. Once the countdown reaches zero, the interval is cleared so it stops running.

let count = 10;

  

const timer = setInterval(() => {

  console.log(count);

  count--;

  

  if (count < 0) {

    clearInterval(timer);

    console.log("Countdown completed");

  }

}, 1000);

  

When this code is executed, the numbers are printed to the console every second from 10 to 0, and after that the timer stops automatically. This shows how setInterval can be used to perform repeated actions at fixed time intervals.
