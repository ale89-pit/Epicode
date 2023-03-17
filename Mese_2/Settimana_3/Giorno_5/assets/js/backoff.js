let formRef = document.getElementsByTagName("form")[0];
let URLREQ = "https://striveschool-api.herokuapp.com/api/product/";
let idRef = new URLSearchParams(window.location.search).get("idRef");
console.log(formRef);
let btnDelete = document.getElementById("delete");
let btnModifica = document.getElementById("modifica");
let btnInvia = document.getElementById("invia");
let modalText = document.getElementById("textModal");
console.log(modalText);
console.log(btnDelete);
if (idRef) {
  fetch(URLREQ + idRef, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
    },
  })
    .then((response1) => {
      if (response1.ok) {
        return response1.json();
      } else {
        return new Error("Error!");
      }
    })

    .then((single) => {
      document.getElementById("name").value = single.name;
      document.getElementById("description").value = single.description;
      document.getElementById("brand").value = single.brand;
      document.getElementById("url").value = single.imageUrl;
      document.getElementById("price").value = single.price;
    });
  btnDelete.classList.remove("d-none");
  btnModifica.classList.remove("d-none");
} else {
  btnInvia.classList.remove("d-none");
}
formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProd = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
  console.log(newProd);
  saveProd(newProd);
});

const saveProd = async function (newProd) {
  let url = idRef ? URLREQ + idRef : URLREQ;
  let response = await fetch(url, {
    method: idRef ? "PUT" : "POST",
    body: JSON.stringify(newProd),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
    },
  });
  if (response.ok) {
    modalText.innerHTML = `<p>Prodotto salvato correttamente</p>`;
  } else {
    alert("Qualcosa è andato storto");
  }
};

const deleteProd = async function () {
  let response = await fetch(URLREQ + idRef, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
    },
  });
  console.log("eliminato");
  if (response.ok) {
    modalText.innerHTML = `<p>Sei Sicuro di voler eliminare questo prodotto<br>
    QUESTA AZIONE ELIMINERA' DEFINIVAMENTE IL PRODOTTO!!</p>`;
  } else {
    alert("PROBLEMA NELL'ELIMINAZIONE DELL'EVENTO");
  }
};
