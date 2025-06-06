let people = [
  { name: "Rahul", age: 17, nationality: "Indian" },
  { name: "Sneha", age: 22, nationality: "Indian" },
  { name: "Ali", age: 20, nationality: "Pakistani" },
  { name: "Yash", age: 22, nationality: "Indian" },
  { name: "Disha", age: 22, nationality: "Indian" },
  { name: "Sunil", age: 43, nationality: "Shri Lanka" },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].nationality.toLowerCase() === "indian") {
    if (people[i].age >= 18) {
      console.log(`${people[i].name} can Vote`);
    } else {
      console.log(`${people[i].name} are minor`);
    }
  } else {
    console.log(`${people[i].name} are not Indian`);
  }
}
