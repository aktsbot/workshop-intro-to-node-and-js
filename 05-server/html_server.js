const http = require("http");
const port = 3000;

const cats = ["Rex", "Meowth", "Lilith"];
const dogs = ["Putin", "Muffin", "Spike"];

const getCatHTML = cats => {
  let html = "<ul>";
  let catList = cats.map(c => `<li>${c}</li>`).join("");
  html += `${catList}</ul>`;
  return html;
};

const getDogHTML = cats => {
  let html = "<ul>";
  let dogList = cats.map(d => `<li>${d}</li>`).join("");
  html += `${dogList}</ul>`;
  return html;
};

const getDefaultHtml = () => {
  return `
  <a href="/cats">cats</a> | <a href="/dogs">dogs</a>
  `;
};

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");

  if (request.url == "/cats") {
    const html = getCatHTML(cats);
    response.end(html);
  } else if (request.url == "/dogs") {
    const html = getDogHTML(dogs);
    response.end(html);
  } else {
    const html = getDefaultHtml();
    response.end(html);
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
