let employees = [
  { name: "Yash", dept: "Web", role: "Dev" },
  { name: "Riya", dept: "HR", role: "Manager" },
  { name: "Ayush", dept: "JS", role: "Dev" },
  { name: "Aniket", dept: "HR", role: "Manager" },
  { name: "Yash", dept: "Web", role: "Ai" },
  { name: "Ayush", dept: "HR", role: "Manager" },
];
let search = "ayush";

for (let employee of employees) {
  if (
    search.toLowerCase() === employee.name.toLowerCase() ||
    search.toLowerCase() === employee.dept.toLowerCase() ||
    search.toLowerCase() === employee.role.toLowerCase()
  ) {
    console.log(`${employee.name} ${employee.dept} ${employee.role}`);
  }
}
