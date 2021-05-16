// selcet model, o-m-b, c-m-b, 0veraly
const openBtn = document.querySelector("#open-modal-btn");
const closeBtn = document.querySelector("#close-modal-btn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

// create click event listener fro o-m-b to add class open
// bonus: add class open to overlay
openBtn.addEventListener("click", openModal);

// create clcik event listener for c-m-b that removes open class from modal
// bonus: remove from overlay
closeBtn.addEventListener("click", closeModal);

// bonus: add click event listener to overlay that removes class open from modal and overlay
overlay.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
  const imageSrc = e.target.getAttribute("src");
  const bigPic = modal.createElement("img");
  modal.img.setAttribute(imageSrc);
}

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
