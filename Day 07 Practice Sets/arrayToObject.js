// 3. Convert array of objects to an object (use reduce)

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
];

const obj = arr.reduce((p, c) => {
  p[c.id] = c.name;
  return p;
}, {});
console.log(obj);
