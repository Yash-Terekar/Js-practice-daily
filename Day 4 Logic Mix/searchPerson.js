let employees = [
  { name: "Yash", dept: "Web", role: "Dev" },
  { name: "Riya", dept: "HR", role: "Manager" },
  { name: "Ayush", dept: "JS", role: "Dev" },
  { name: "Aniket", dept: "HR", role: "Manager" },
  { name: "Yash", dept: "Web", role: "Ai" },
  { name: "Ayush", dept: "HR", role: "Manager" },
];
let search = "Dev";
for (let employee of employees) {
  if (search === employee.name) {
    search = employee.name;
    console.log(`${employee.name} ${employee.dept} ${employee.role}`);
  } else if (search === employee.dept) {
    search = employee.dept;
    console.log(`${employee.name} ${employee.dept} ${employee.role}`);
  }
  if (search === employee.role) {
    search = employee.role;
    console.log(`${employee.name} ${employee.dept} ${employee.role}`);
  }
}
