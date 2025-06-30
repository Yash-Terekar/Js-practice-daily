async function fetchUsers() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!data.ok) {
      throw new Error("There was something error in fetch");
    }
    const users = await data.json();
    users.forEach((user) => {
      console.log(
        `Name: ${user.name} Email: ${user.email} City: ${user.address.city}`
      );
    });
  } catch (err) {
    console.log(`Error = ${err}`);
  }
}
fetchUsers();
