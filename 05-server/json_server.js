const http = require("http");
const port = 3000;

const cats = ["Rex", "Meowth", "Lilith"];
const dogs = ["Putin", "Muffin", "Spike"];
const defaultData = [];

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "application/json");

  if (request.url == "/cats") {
    response.end(JSON.stringify(cats));
  } else if (request.url == "/dogs") {
    response.end(JSON.stringify(dogs));
  } else {
    response.end(JSON.stringify(defaultData));
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
