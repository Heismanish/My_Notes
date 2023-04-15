"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

const openModal = function (e) {
	// to get rid of the default behaviour of clicking a '#' link
	e.preventDefault();
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Add eventlistener to multiple buttons
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
	btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

/////////////////////////////////////////////////////////
// Smooth scrolling
btnScrollTo.addEventListener("click", function () {
	section1.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////////////////////
// PAGE NAVIGATION

// document.querySelectorAll(".nav__link").forEach(function (el) {
// 	el.addEventListener("click", function (e) {
// 		e.preventDefault();
// 		const id = this.getAttribute("href");
// 		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
// 	});
// });

// Using Event Delegation:
// 1. Add event Listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
	e.preventDefault();
	// Matching strategy:
	if (e.target.classList.contains("nav__link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

///////////////////////////////////////////////////////////////////
// Tabbed Component:

tabsContainer.addEventListener("click", function (e) {
	const clicked = e.target.closest(".operations__tab");

	// Guard Clause
	if (!clicked) return;

	// Remove active classes
	tabs.forEach((t) => t.classList.remove("operations__tab--active"));
	tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

	// Activate tab
	clicked.classList.add("operations__tab--active");

	// Activate content area:
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add("operations__content--active");
});

///////////////////////////////////////////////////////////////////
// Menu fade animation:
const handleHover = function (e) {
	// console.log(this, e.currentTarget);
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const siblings = link.closest(".nav").querySelectorAll(".nav__link");
		const logo = link.closest(".nav").querySelector("img");
		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});
		logo.style.opacity = this;
	}
};

// Passing 'argument' into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////////////////////////////////
// Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// Using scroll event(not recommended)
// window.addEventListener("scroll", function (e) {
// 	if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
// });

// Using intersection observer API:
// How it's executed: the nav bar will be sticky when headder moves out
// of the viewport
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
	const [entry] = entries; // entries is an array of object, entry is an object
	// when header is no more visible in viewport make navbar sticky
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null, // to selecting the whole viewport
	threshold: 0, // how much of the target should be visible
	rootMargin: `-${navHeight}px`, // a margin to the visible area
});
headerObserver.observe(header);

///////////////////////////////////////////////////////////////////
// Reveal Sections:
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
	const [entry] = entries;

	// if the section is intersection make it visible
	if (!entry.isIntersecting) return; // for the first section to be visible(reveal)
	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	// section.classList.add("section--hidden");
});
///////////////////////////////////////////////////////////////////
// LAZY Loading Images:
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	// replace src with data-src
	entry.target.src = entry.target.dataset.src;

	// will take time for image to load if network is slow so
	//  we remove that blur filter only after it's loaded.
	entry.target.addEventListener("load", function () {
		entry.target.classList.remove("lazy-img");
	});

	observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
	root: null,
	threshold: 0,
	rootMargin: "200px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////////////////////////////////
// Sliders
const slider = function () {
	const slides = document.querySelectorAll(".slide");
	const btnLeft = document.querySelector(".slider__btn--left");
	const btnRight = document.querySelector(".slider__btn--right");
	const dotContainer = document.querySelector(".dots");

	let curSlide = 0;
	const maxSlide = slides.length;

	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide='${i}'></button>`
			);
		});
	};

	createDots();

	const activeDot = function (slide) {
		document
			.querySelectorAll(".dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)
			.classList.add("dots__dot--active");
	};

	// activeDot(0);

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
		);
	};
	// goToSlide(0);

	// Next slide
	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}
		goToSlide(curSlide);
		activeDot(curSlide);
	};

	// prev Slide
	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activeDot(curSlide);
	};

	const init = function () {
		goToSlide(0);
		activeDot(0);
	};

	init();

	// Event Handlers
	btnLeft.addEventListener("click", prevSlide);
	btnRight.addEventListener("click", nextSlide);

	document.addEventListener("keydown", function (e) {
		if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});

	dotContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activeDot(slide);
		}
	});
};
slider();

///////////////////////////////////////////////////////////////////
// Lifecycle DOM events
window.addEventListener("DOMContentLoaded", function (e) {
	// when html and JS is loaded
	console.log("HTML parsed and DOM tree built");
});

window.addEventListener("load", function (e) {
	console.log("Page fully loaded");
});

// window.addEventListener("beforeunload", function (e) {
// 	// just before the site is closed
// 	e.preventDefault();
// });

///////////////////////////////////////////////////////////////////
/*
// Selecting Elements.
console.log(document.documentElement); // To style on whole page :
console.log(document.head);
console.log(document.body);

// select first element tha t matches this class
const header = document.querySelector(".header");

// select all the element that matches this class
const allSections = document.querySelectorAll(".section");

document.getElementById("section--1");

const allButtons = document.getElementsByTagName("button"); // gives an HTML collection not a nodelist
// An HTML collection updates the changes in DOM instantly unlike

// Creating and inserting elements:
// .insertAdjacentHTML;

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
	'We use cookies for improvememnt functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.after(message);
// header.before(message);

document
	.querySelector(".btn--close-cookie")
	.addEventListener("click", function () {
		// DOM traversing
		// message.parentElement.removeChild(message);
		message.remove();
	});

// Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "103%";

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
	Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// for customm css properties(variable)
// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.className);
console.log(logo.src);
logo.alt = "Beautiful minimalist logo";
console.log(logo.alt);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("company"));

console.log(logo.src);
console.log(logo.getAttribute("src"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "i");
logo.classList.remove("c");
logo.classList.toggle("i");
logo.classList.contains("i");

// overwrites all the classes, so we don't use it.
// logo.className = "k";

// Events and Event Handlers
// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
// 	alert("addEventListener: Great! yoou are reading the heading :D");

// 	h1.removeEventListener("mouseenter", alertH1); // to listen to an event only once
// };
// h1.addEventListener("mouseenter", alertH1);

// to listen to an event only once
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 9000);

// this one overwrites the previous functions so we don't use it.
// h1.onmouseenter = function (e) {
// 	alert("addEventListener: Great! you are reading the heading :D");
// };

// generating random color
// const randomInt = (min, max) =>
// 	Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
// 	`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // Event Bubbling
// document.querySelector(".nav__link").addEventListener("click", function (e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log("Link", e.target, e.currentTarget);
// 	console.log(e.currentTarget === this);

// 	// stopping event propogation
// 	// e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log("CONtainer", e.target);
// });

// document.querySelector(".nav").addEventListener(
// 	"click",
// 	function (e) {
// 		this.style.backgroundColor = randomColor();
// 		console.log("NAV  ", e.target);
// 	}
// 	// true // this third parameter enables event handling in capturing phase, is false by default
// );
*/

///////////////////////////////////////////////////////////////////
// DOM Traversing
// const h1 = document.querySelector("h1");
// // Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // Going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)"; //selecting itself

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
// 	if (el !== h1) {
// 		el.style.transform = "scale(0.5)";
// 	}
// });
