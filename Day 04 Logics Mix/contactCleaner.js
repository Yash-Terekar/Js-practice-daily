let contacts = [
  { name: "Yash", phone: "9876543210", email: "" },
  { name: "Ravi", phone: "", email: "ravi@mail.com" },
  { name: "Priya", phone: "", email: "" },
];

for (let contact of contacts) {
  if (contact.phone === "" && contact.email === "") {
  } else {
    console.log(
      `${contact.name} : Phone: ${contact.phone}, Email: ${contact.email}`
    );
  }
}
