const student = {
  name: "Yash",
  roll: 24,
  marks: 85,
};

for (let keys in student) {
  console.log(`${keys}: ${student[keys]}`);
}
