let idRef = new URLSearchParams(window.location.search).get("idRef");
let query = new URLSearchParams(window.location.search).get("query");
let PHOTOURL = "https://api.pexels.com/v1/search?query=";
const show = (photo) => {
  console.log(photo);

  photo.forEach((element) => {
    if (element.id == idRef) {
      console.log(element);

      let refHtml = document.querySelector("main .row");
      newDiv = `<div class="col mx-auto">
      <h3>${element.photographer}</h3>
      <img src="${element.src.large} alt="${element.alt}" >
      <div class="row">
      <div class="col"><a href="${element.photographer_url}">${element.photographer_url}</a></div>
      </div>
      </div>`;
      refHtml.innerHTML = newDiv;
    }
  });
};
const showLargeImg = async function () {
  let response = await fetch(PHOTOURL + query, {
    headers: {
      Authorization: "sgZoBg0FsjJLyqsgIdXOxm9dizqvJP1YOo1yWH6QyBiRN455PhI8irdd",
    },
  });

  let photo = await response.json();
  photo = photo.photos;

  show(photo);
};
showLargeImg();
