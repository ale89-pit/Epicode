let nascondi = document.querySelectorAll(".hiddenSection");
console.log(nascondi);
nascondi[0].addEventListener("click", () => {
  let section = document.querySelector("#saldi div~div");
  section.classList.toggle("visibility");
});
nascondi[1].addEventListener("click", () => {
  let section2 = document.querySelector("#welsum div~div");
  section2.classList.toggle("visibility");
});

const travelCount = function () {
  let travel = document.getElementsByTagName("img");
  console.log(travel.length);
  alert(`Il conto dei viaggi è ${travel.length}`);
};
//travelCount();
