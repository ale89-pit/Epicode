let bookArray = [];

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element, index) => {
      //   console.log(element.img);
      //   console.log(element.name);
      //   console.log(element.price);
      bookArray.push(element);
      let cardRef = document.getElementById("riga");

      cardRef.innerHTML += `
      <div  id="${index}" class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
      <div class="card  tex-center" >
      <div class="w-100">
           <img src="${element.img}" class="card-img-top w-100" alt="...">
       </div>    
           <div  class="card-body d-flex flex-column justify-content-between align-items-center">
               <h5 class="card-title">${element.title}</h5>
               <p class="card-text">${element.price} €</p>
               <a    href="javascrit:void(0)" onClick="scarta(${index})" class="btn btn-primary m-1 w-75">Scarta</a>
               <a    href="javascrit:void(0)" onClick="addCart(${index})" class="btn btn-warning w-75">Add to cart</a>
           </div>
       </div>
       </div>`;
    });
    //  `<div class="card" style="width: 18rem;">
    //       <img src="${element.img}" class="card-img-top" alt="...">
    //       <div class="card-body">
    //           <h5 class="card-title">${element.title}</h5>
    //           <p class="card-text">${element.price}</p>
    //           <a href="#" class="btn btn-primary">Scarta</a>
    //       </div>
    //   </div>`;
  })
  .catch((err) => {
    console.log("error");
  });

const scarta = function (id) {
  let colRef = document.getElementsByClassName("col")[id];
  colRef.style.display = "none";
};

console.log(bookArray);

const addCart = function (id) {
  let local = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  bookArray.forEach((element, index) => {
    if (id === index) {
      let title = element.title;
      let price = element.price;

      local.push({ Title: title, Price: price });

      localStorage.setItem("book", JSON.stringify(local));
    }
  });
};
