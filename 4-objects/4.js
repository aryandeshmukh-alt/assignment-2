const users = [
  { name: "Pratik", role: "admin" },
  { name: "Amit", role: "user" },
  { name: "Neha", role: "admin" },
  { name: "Ravi", role: "user" }
];

const groupedUsers = users.reduce((result, currentUser) => {
  if (!result[currentUser.role]) {
    result[currentUser.role] = [];
  }
  result[currentUser.role].push(currentUser);
  return result;
}, {});

console.log(groupedUsers);
