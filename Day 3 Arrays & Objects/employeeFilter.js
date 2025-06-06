let employees = [
  { name: "Raj", role: "Developer" },
  { name: "Priya", role: "Manager" },
  { name: "Amit", role: "Manager" },
  { name: "Sara", role: "Intern" },
];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i].role.toLowerCase();
  if (employee === "manager") {
    console.log(`${employees[i].name} = ${employees[i].role}`);
  }
}
for (let employee of employees) {
  if (employee.role.toLowerCase() === "manager") {
    console.log(`${employee.name} = ${employee.role}`);
  }
}

// for (let i = 0; i < employees.length; i++) {
//   let manager = employees[i].role.toLowerCase();
//   if (manager === "manager") {
//     console.log(`${employees[i].name} ${employees[i].role}`);
//   }
// }

// for (let employee of employees) {
//   if (employee.role.toLowerCase() === "manager") {
//     console.log(`${employee.name} ${employee.role}`);
//   }
// }

// employees.forEach((employee) => {
//   if (employee.role.toLowerCase() === "manager") {
//     console.log(`${employee.name} ${employee.role}`);
//   }
// });

// let managers = employees.filter(
//   (employee) => employee.role.toLowerCase() === "manager"
// );
// managers.forEach((manager) => console.log(`${manager.name} ${manager.role}`));
