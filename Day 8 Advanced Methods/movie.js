const movies = [
  { title: "Pushpa", rating: 8, genre: "Action" },
  { title: "Annabella", rating: 7, genre: "Horror" },
  { title: "RRR", rating: 9, genre: "Freedom" },
  { title: "Golmaal", rating: 5, genre: "Comedy" },
  { title: "KGF", rating: 8, genre: "Action" },
  { title: "Total Dhamal", rating: 4, genre: "Comedy" },
  { title: "Spiderman", rating: 8, genre: "Action" },
];

const highRated = movies.filter((a) => a.rating > 7).map((t) => t.title);
console.log(`High rated movies: ${highRated}`);

const title = "Golmaal";
const find = movies.find((a) => a.title === title);
console.log(find);

const list = movies.map((a) =>
  console.log(`Movie: ${a.title} (${a.genre}) Ratings:${a.rating}`)
);
