const student = {
  name: "Yash",
  roll: 23,
  marks: 85,
};

for (let keys in student) {
  console.log(`${keys}: ${student[keys]}`);
}
