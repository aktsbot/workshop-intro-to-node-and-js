const apiServer = "http://localhost:3000";

getAllCats = function() {
  const url = `${apiServer}/cats`;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const list = json.map(c => `<li>${c.name} - ${c.fav}</li>`);
      const html = `<ul>${list}</ul>`;
      document.getElementById("cats-list").innerHTML = html;
    });
};

const getAllBtn = document.getElementById("get-cats");
getAllBtn.addEventListener("click", () => {
  getAllCats();
});
