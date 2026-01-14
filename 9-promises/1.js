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
