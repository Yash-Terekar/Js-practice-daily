let users = [16, 22, 46, 12, 18, 26, 4];

for (let i = 0; i <= users.length; i++) {
  if (users[i] >= 18) {
    console.log(`User ${users[i]} can Access`);
  } else if (users[i] < 18) {
    console.log(`User ${users[i]} cant Access`);
  }
}
