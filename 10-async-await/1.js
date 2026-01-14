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
