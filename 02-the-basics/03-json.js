const likes = ["ice-cream", "chocolate", "kittens"];
console.log(likes[0]);

const bio = {
  name: "akts",
  dob: "31 Feb 1983",
  loc: "Alaska"
};
console.log(bio.dob);

const field = "dob";
console.log(bio.field);
console.log(bio[field]);

// ---------
const detailedBio = {
  name: "akts",
  dob: "31 Feb 1983",
  loc: "Alaska",
  movies: ["Jurassic Park", "Silence of the lambs", "Ghost in the Shell"]
};

console.log(detailedBio.movies);
console.log(detailedBio.movies[0]);

// ----------
const evenMoreDetailedBio = {
  name: {
    fname: "akts",
    lnam: "bot"
  },
  age: 30,
  movies: [
    { name: "Jurassice Park", year: 1994 },
    { name: "Silence of the lambs", year: 1990 }
  ]
};

// modifying objects and arrays
// the . operator and index
