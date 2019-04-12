const apiServer = "http://localhost:3000";

getAllCats = function() {
  const url = `${apiServer}/cats`;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
};

const getAllBtn = document.getElementById("get-cats");
getAllBtn.addEventListener("click", () => {
  getAllCats();
});
