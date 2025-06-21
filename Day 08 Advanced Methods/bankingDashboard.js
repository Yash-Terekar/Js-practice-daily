const transactions = [
  { user: "Yash", type: "debit", amount: 16000 },
  { user: "Aniket", type: "credit", amount: 12000 },
  { user: "Yash", type: "credit", amount: 26000 },
  { user: "Rohan", type: "debit", amount: 8000 },
  { user: "Aniket", type: "credit", amount: 16000 },
];

const uniqueUsers = [...new Set(transactions.map((a) => a.user))];
console.log(`Unique Users: ${uniqueUsers}`);

const dashboard = uniqueUsers.map((name) => {
  const user = transactions.filter((a) => a.user === name);

  const totalCredit = user
    .filter((u) => u.type === "credit")
    .reduce((p, c) => p + c.amount, 0);

  const totalDebit = user
    .filter((u) => u.type === "debit")
    .reduce((p, c) => p + c.amount, 0);

  return {
    name: name,
    totalCredit: totalCredit,
    totalDebit: totalDebit,
    netTotal: totalCredit - totalDebit,
  };
});

console.log(`Dashboard`);
dashboard.forEach((dashboard) => {
  console.log(`------ User : ${dashboard.name} ------`);
  console.log(`Total Credit: ${dashboard.totalCredit}`);
  console.log(`Total Debit: ${dashboard.totalDebit}`);
  console.log(`Total Balance: ${dashboard.netTotal}`);
  console.log(`-----------------------------------`);
});
