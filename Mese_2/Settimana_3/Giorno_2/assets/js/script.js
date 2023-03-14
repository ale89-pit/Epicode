let userName = document.getElementById("name");
let btnSave = document.getElementById("save");
let form = document.getElementById("saveUser");
let btnReset = document.getElementById("delete");
let listRef = document.getElementById("nameList");

let arrayName = [];

btnReset.addEventListener("click", function () {
  let local = localStorage.getItem("nomi")
    ? JSON.parse(localStorage.getItem("nomi"))
    : [];
  console.log(local);
  local.pop();
  console.log(local);

  localStorage.setItem("nomi", JSON.stringify(local));
  writeName();
});

saveUser.addEventListener("submit", (event) => {
  if (userName.value == "") {
    alert("insrisci almeno un nome");
  } else {
    listRef.innerHTML = "";
    event.preventDefault();
    let local = localStorage.getItem("nomi")
      ? JSON.parse(localStorage.getItem("nomi"))
      : [];
    local.push({ name: userName.value });
    localStorage.setItem("nomi", JSON.stringify(local));
    writeName();
  }
});

const writeName = function () {
  listRef.innerHTML = "";
  let name = [];
  let savedName = localStorage.getItem("nomi");
  if (savedName) {
    name = JSON.parse(savedName);
  }
  name.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element.name;

    listRef.appendChild(newLi);
  });
};
writeName();

let timer = function () {
  let secondi = sessionStorage.getItem("secondi") || 0;
  let minuti = sessionStorage.getItem("minuti") || 0;

  setInterval(function () {
    secondi++;

    sessionStorage.setItem("secondi", secondi.toString());
    console.log(secondi);
  }, 1000);
};

timer();
