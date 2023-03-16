let btnLoadRef = document.querySelector("main .btn");
let btnSecondaryRef = document.getElementById("secondary");
let PHOTOURL = "https://api.pexels.com/v1/search?query=";
let query_1 = "Ocean";
let query_2 = "Panda";
let rowRef = document.querySelector(".album .row");
let newCard;
let inputRef = document.getElementById("inputValue");
let btnSearch = document.getElementById("search");
let query_3;

const hideCard = function (event) {
  event.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
    "d-none"
  );
};
const loadImg = function (query) {
  fetch(PHOTOURL + query, {
    headers: {
      Authorization: "sgZoBg0FsjJLyqsgIdXOxm9dizqvJP1YOo1yWH6QyBiRN455PhI8irdd",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Errore nella gestione della chiamata");
      }
    })
    .then((photo) => {
      console.log(photo);
      let photoArray = photo.photos;
      console.log(query);
      writeCard(photoArray, query);
    })
    .catch((err) => {
      console.log(err);
    });
};
const writeCard = function (photoArray, query) {
  console.log(photoArray);
  photoArray.forEach((element) => {
    newCard = `<div class="col col-12  col-md-3">
      <div class="card mb-4 shadow-sm">
      <a href="largImg.html?idRef=${element.id}&query=${query}"><img src="${element.src.large}" alt="${element.alt}"></a>
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text ">
            <a href=largImg.html?idRef=${element.id}&query=${query}>Author: ${element.photographer} (${element.photographer_id}
            Author profile: ${element.photographer_url}
  
          (Original size: ${element.height} x ${element.width})</a>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hideCard(event)">Hide</button>
            </div>
            <small class="text-muted">pic id: ${element.id}</small>
          </div>
        </div>
      </div>
    </div>`;
    rowRef.innerHTML += newCard;
  });
};

btnLoadRef.addEventListener("click", () => {
  rowRef.innerHTML = "";
  loadImg(query_1);
});
btnSecondaryRef.addEventListener("click", () => {
  rowRef.innerHTML = "";
  loadImg(query_2);
});
btnSearch.addEventListener("click", () => {
  query_3 = PHOTOURL + inputRef.value;
  console.log(query_3);
  rowRef.innerHTML = "";
  loadImg(query_3);
});

// const loadImg2 = function () {
//   btnSecondaryRef.addEventListener("click", () => {
//     fetch("https://api.pexels.com/v1/search?query=Football", {
//       headers: {
//         Authorization:
//           "sgZoBg0FsjJLyqsgIdXOxm9dizqvJP1YOo1yWH6QyBiRN455PhI8irdd",
//       },
//     }).then((response) => {
//       console.log(response);
//     });
//   });
// };
