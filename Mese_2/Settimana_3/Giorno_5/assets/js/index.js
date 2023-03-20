let URLREQ = "https://striveschool-api.herokuapp.com/api/product/";
let product = [];
const getProd = async function () {
  try {
    let response = await fetch(URLREQ, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjYzNmY4MWI0MjAwMTM5YjI3ZDciLCJpYXQiOjE2NzkwNDIxMDIsImV4cCI6MTY4MDI1MTcwMn0.XcRxEXHvGf1QFmNeZSCeRQ6adMSA-kks6vkyPP9VqHQ",
      },
    });
    product = await response.json();
    console.log(product);
    ShowProd(product);
  } catch {}
};
const ShowProd = function (product) {
  product.forEach((element) => {
    // let newCol = document.createElement("div");
    // newCol.classList.add("col", "col-12", " col-md-3", " col-lg-4");
    // newCol.innerHTML =
    let divReference = document.getElementById("prod");
    divReference.innerHTML += `
    <div class="col col-12 col-sm-6   col-lg-4 col-xl-3 col-xxl-2 d-flex align-items-stretch">
        <div class="card mb-4 shadow-sm border-dark rounded-4">
            <a href="./details.html?idRef=${element._id}"><img class="border-bottom border-4" src="${element.imageUrl}"></a>
            <div class="card-body d-flex justify-content-between flex-column">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text ">${element.description}
                
                </p>
                <p class="card-text size bold"><strong>${element.price}&nbsp€
                </strong>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick="window.location='./details.html?idRef=${element._id}'">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick="window.location='./back-off.html?idRef=${element._id}'">Modifica</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addCart(${element._id})">Add </button>
                    </div>
                    
                 </div>
             </div>
        </div>
    </div>    
  `;
  });
};
getProd();

// const addCart = async function (id) {
//   console.log(id);
//   product.forEach((e) => {
//     if (product._id === id) {
//       let cart = localStorage.getItem("cartRecord")
//         ? JSON.parse(localStorage.getItem("cartRecord"))
//         : [];
//       cart.push({ name: e.name, img: e.imgUrl, price: e.price });
//       localStorage.setItem("cartRecord", JSON.stringify(cart));
//     }
//   });
// };

// <img src="${element.imageUrl}"
//       <span>

//           <span class="w-25 mx-auto">${element.name}</span>
//           <p class="w-75 mx-auto">${element.description}</p>
//       </span>
//        <span class="badge bg-secondary  mx-auto">${element.price}€</span>
//       <span class=" mx-auto text-center">

//           <a href="./details.html?idRef=${element._id}" class="btn btn-success w-75 mb-1">DETTAGLI</a>
//           <a href="./back-off.html?idRef=${element._id}" class="btn btn-info w-75">MODIFICA</a>
//       </span>
