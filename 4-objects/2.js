const user = {
  name: "Akshay",
  age: 25,
  city: "Pune"
};

Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

Object.values(user).forEach(value => {
  console.log(value);
});
