let URLREQ = "https://striveschool-api.herokuapp.com/api/product/";
let idRef = new URLSearchParams(window.location.search).get("idRef");
let divRef = document.getElementById("details-container");
console.log(divRef);
const showSingleProd = (singlProd) => {
  console.log(singlProd);
  divRef.innerHTML = `
  <div class="col col-6">
    <img  src="${singlProd.imageUrl}">
    </div>
        <div class="col col-6 d-flex flex-column justify-content-between">
            <h4>${singlProd.name}</h4><br>
            <span>${singlProd.description}</span><br>

            
            
                <p>${singlProd.brand}</p>
                <p>${singlProd.price}€</p>
                <a href="./back-off.html?idRef=${singlProd._id}" class="btn btn-info">MODIFICA</a>
        </div>
    
                `;
};
const getSingleProd = async function () {
  try {
    let response = await fetch(URLREQ + idRef, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
      },
    });
    let singlProd = await response.json();
    showSingleProd(singlProd);
  } catch {}
};

getSingleProd();
