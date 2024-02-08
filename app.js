"use strict";
let showModelBtn = document.querySelectorAll(".show-modal");
let closeModalBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");
let overLay = document.querySelector(".overlay");
showModelBtn.forEach((m) => {
  m.addEventListener("click", showModal);
});
overLay.addEventListener("click", hideModal);
closeModalBtn.addEventListener("click", hideModal);

function hideModal() {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
}
function showModal() {
  modal.classList.remove("hidden");

  overLay.classList.remove("hidden");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    console.log("fop");
    hideModal();
  }
  if (e.key == "o" && modal.classList.contains("hidden")) {
    console.log("uio");
    showModal();
  }
});
