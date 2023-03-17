let URLREQ = "https://striveschool-api.herokuapp.com/api/product/";

const getProd = async function () {
  try {
    let response = await fetch(URLREQ, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
      },
    });
    let product = await response.json();
    console.log(product);
    ShowProd(product);
  } catch {}
};
const ShowProd = function (product) {
  product.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    newLi.innerHTML = `
    <img src="${element.imageUrl}"
          <span>
          
              <span class="w-25 mx-auto">${element.name}</span>
              <p class="w-75 mx-auto">${element.description}</p>
          </span>
           <span class="badge bg-secondary  mx-auto">${element.price}€</span>
          <span class=" mx-auto text-center">
             
              <a href="./details.html?idRef=${element._id}" class="btn btn-success w-75 mb-1">DETTAGLI</a>
              <a href="./back-off.html?idRef=${element._id}" class="btn btn-info w-75">MODIFICA</a>
          </span>
        `;
    let ulReference = document.getElementsByClassName("list-group")[0];
    ulReference.appendChild(newLi);
  });
};
getProd();
