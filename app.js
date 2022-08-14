const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", function () {
  modal_container.classList.add("show");
});

close.addEventListener("click", function () {
  modal_container.classList.remove("show");
});
