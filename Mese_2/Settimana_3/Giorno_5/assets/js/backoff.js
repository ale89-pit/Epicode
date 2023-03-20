let formRef = document.getElementsByTagName("form")[0];
let URLREQ = "https://striveschool-api.herokuapp.com/api/product/";
let idRef = new URLSearchParams(window.location.search).get("idRef");
console.log(formRef);
let btnDelete = document.getElementById("delete");
let btnModifica = document.getElementById("modifica");
let btnInvia = document.getElementById("invia");
let modalText = document.getElementById("textModal");
let saveChange = document.getElementById("saveChange");
let deleteModal = document.getElementById("deleteModal");
let newProd;
let url;
let titleModal = document.getElementById("modalLabel");
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
  newProd = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
});
//Prova per modal
// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
//   console.log(myInput);
// });

const saveProd = async function (newProd) {
  url = idRef ? URLREQ + idRef : URLREQ;
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
    window.location.replace("./index.html");
  } else {
    alert("Qualcosa è andato storto");
  }
};

const deleteProd = async function () {
  //controlDel()
  let response = await fetch(URLREQ + idRef, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
    },
  });
  console.log("eliminato");
  if (response.ok) {
    modalText.innerHTML = `<p>Prodotto eliminato correttamente</p>`;
  } else {
    alert("PROBLEMA NELL'ELIMINAZIONE DELL'EVENTO");
  }
};
btnInvia.addEventListener("click", function () {
  titleModal.innerHTML = "AGGIUNGERE QUESTO PRODOTTO ALLA LISTA?";
  modalText.innerHTML = `<p>conferma per aggiungerre il prodotto o annulla</p>`;
  saveChange.classList.remove("d-none");
});
btnModifica.addEventListener("click", function () {
  titleModal.innerHTML = "MODIFICARE QUESTO PRODOTTO?";
  modalText.innerHTML = `<p>Questa azione modifichera l'articolo in maniera definitiva.Confermare??</p>`;
  saveChange.classList.remove("d-none");
});
btnDelete.addEventListener("click", function () {
  titleModal.innerHTML = "ELIMINARE QUESTO PRODOTTO?";
  modalText.innerHTML = `<p>ATTENZIONE L'AZIONE ELIMINERA' DEFINITIVAMENTE IL PRODOTTO</p>`;
  deleteModal.classList.remove("d-none");
});
saveChange.addEventListener("click", function () {
  saveProd(newProd);
});

deleteModal.addEventListener("click", function () {
  deleteProd();
  window.location.replace("./index.html");
});
