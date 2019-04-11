const bio = {
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

// adding to
bio.groupName = "The Wu Tang Clan";

console.log(bio);

// iteration
const likes = ["ice-cream", "chocolate", "kittens"];

for (let i = 0; i < likes.length; i++) {
  console.log(likes[i]);
}

for (let like of likes) {
  console.log(like);
}

likes.forEach(function(l) {
  console.log(l);
});

likes.map(function(l) {
  return `akts likes ${l}`;
});

likes.filter(function(l) {
  return l != "kittens";
});

// methods

bio.printMovies = function() {
  bio.movies.forEach(m => {
    console.log(`${m.name} - ${m.year}`);
  });
};

bio.printMovies();
