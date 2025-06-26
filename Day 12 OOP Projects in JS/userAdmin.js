// Day 12 - Project 3: Users Handler

let allUsers = [];

class Users {
  constructor(name, email) {
    (this.name = name), (this.email = email);
    allUsers.push(this);
  }

  login() {
    console.log(`${this.name} logging In`);
  }
}

class Admin extends Users {
  constructor(name, email) {
    super(name, email);
  }
  deleteUser(username) {
    let userToDelete = allUsers.find(
      (user) => user.name.toLowerCase() === username
    );
    if (userToDelete) {
      console.log(
        `Admin ${this.name} delete user ${userToDelete.name} ${userToDelete.email}`
      );
      allUsers = allUsers.filter(
        (users) => users.name.toLowerCase() !== username
      );
    } else {
      console.log(`User ${username} not found`);
    }
  }
}

const yash = new Admin("Yash", "yash@gmail.com");
const aniket = new Users("Aniket", "aniket@gmail.com");
const aditya = new Users("Aditya", "aditya@gmail.com");
const rohan = new Users("Rohan", "rohan@gmail.com");
const omkar = new Users("Omkar", "omkar@gmail.com");

yash.deleteUser("omkar");
yash.deleteUser("rohan");
console.log(allUsers);
yash.deleteUser("rohan");
