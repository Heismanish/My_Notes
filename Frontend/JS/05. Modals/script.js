"use strict";

const modal = document.querySelector(".modal");
const btncloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
	showModal[i].addEventListener("click", openModal);
}

btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Keypress is a global evnt listener so we use it ono whole document.
// all eventListener stores the data of the event in form of an object
// and we can see the data by fetching required properties.
document.addEventListener("keydown", function (e) {
	// console.log(e); // 'e' here is the object
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
