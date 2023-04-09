const btn = document.getElementById("menu-btn");
const mobMenu = document.getElementById("mob-menu");
const overlay = document.querySelector(".overlay");

// DESKTOP:
// feature dorpdown
const DropUpF = document.querySelector(".up-feature");
const DropDownF = document.querySelector(".down-feature");
const feat = document.getElementById("feat");
const FDrop = document.getElementById("feat-drop");
// company dropdown
const DropUpC = document.querySelector(".up-comp");
const DropDownC = document.querySelector(".down-comp");
const comp = document.getElementById("comp");
const CDrop = document.getElementById("comp-drop");

// MOBILE
// feature dropdown
const mobDropUpF = document.querySelector(".up-mob-feature");
const mobDropDownF = document.querySelector(".down-mob-feature");
const mobfeat = document.getElementById("mob-feat");
const mobFDrop = document.getElementById("mob-feat-drop");

// company dropdown
const mobDropUpC = document.querySelector(".up-mob-comp");
const mobDropDownC = document.querySelector(".down-mob-comp");
const mobcomp = document.getElementById("mob-comp");
const mobCDrop = document.getElementById("mob-comp-drop");

// hamburger button
btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	mobMenu.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
});

// overlay
overlay.addEventListener("click", () => {
	btn.classList.toggle("open");
	mobMenu.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
});

// MOBILE
mobfeat.addEventListener("click", () => {
	mobDropUpF.classList.toggle("hidden");
	mobDropDownF.classList.toggle("hidden");
	mobDropUpF.classList.toggle("inline-block");
	mobFDrop.classList.toggle("hidden");
});

mobcomp.addEventListener("click", () => {
	mobDropUpC.classList.toggle("hidden");
	mobDropDownC.classList.toggle("hidden");
	mobDropUpC.classList.toggle("inline-block");
	mobCDrop.classList.toggle("hidden");
});

// Desktop
feat.addEventListener("click", () => {
	DropUpF.classList.toggle("hidden");
	DropDownF.classList.toggle("hidden");
	DropUpF.classList.toggle("inline-block");
	FDrop.classList.toggle("lg:block");
	FDrop.classList.toggle("lg:hidden");
});

comp.addEventListener("click", () => {
	DropUpC.classList.toggle("hidden");
	DropDownC.classList.toggle("hidden");
	DropUpC.classList.toggle("inline-block");
	CDrop.classList.toggle("lg:block");
	CDrop.classList.toggle("lg:hidden");
});
