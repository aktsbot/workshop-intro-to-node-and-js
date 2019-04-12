const apiServer = "http://localhost:3000";

const getAllCats = function() {
  const url = `${apiServer}/cats`;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const list = json.map(c => `<li>${c.name} - ${c.fav}</li>`);
      const html = `<ul>${list}</ul>`;
      document.getElementById("cats-list").innerHTML = html;
    });
};

const addCat = function() {
  const name = document.getElementById("cat-add-name").value;
  const fav = document.getElementById("cat-add-fav").value;

  const payload = { name: name, fav: fav };
  const url = `${apiServer}/cats`;
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(json => {});
};

const getAllBtn = document.getElementById("get-cats");
getAllBtn.addEventListener("click", () => {
  getAllCats();
});

const addBtn = document.getElementById("add-cat");
addBtn.addEventListener("click", () => {
  addCat();
});
