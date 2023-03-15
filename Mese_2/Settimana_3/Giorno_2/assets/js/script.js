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

  if (local.length == 0) {
    alert("non ci sono elementi da eliminare");
  } else if (local.length === 1) {
    alert("Stai eliminando l'ultimo record");

    writeName();
  } else {
    local.pop();

    localStorage.setItem("nomi", JSON.stringify(local));
    writeName();
  }
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

  let savedName = localStorage.getItem("nomi");
  if (savedName) {
    arrayName = JSON.parse(savedName);
  }
  if (arrayName.length === 1) {
    let newLi = document.createElement("li");
    newLi.innerText = arrayName[0].name;
    console.log(arrayName[0].name);
    listRef.appendChild(newLi);
  } else {
    let lastName = arrayName.pop();
    console.log(lastName);
    let newLi = document.createElement("li");
    newLi.innerText = lastName.name;
    listRef.appendChild(newLi);
  }
  //   name.forEach((element) => {
  //     let newLi = document.createElement("li");

  //     newLi.innerText = element.name;

  //     listRef.appendChild(newLi);
  //   });
};
writeName();
let minutiRef = document.getElementById("minuti");
let secondiRef = document.getElementById("secondi");

let timer = function () {
  let secondi = sessionStorage.getItem("secondi") || 0;
  let minuti = sessionStorage.getItem("minuti") || 0;

  setInterval(function () {
    secondi++;
    if (secondi == 60) {
      minuti++;
      secondi = 0;
    }
    sessionStorage.setItem("secondi", secondi.toString());
    sessionStorage.setItem("minuti", minuti.toString());

    minutiRef.innerHTML = minuti;
    secondiRef.innerHTML = secondi;
  }, 1000);
};

timer();
