"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
	const html = `  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
				+data.population / 1000000
			).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
				Object.values(data.languages)[0]
			}</p>
<p class="country__row"><span>💰</span>${
		Object.values(Object.values(data.currencies)[0])[0]
	}</p>

    </div>
  </article>`;
	countriesContainer.insertAdjacentHTML("beforeend", html);
	countriesContainer.style.opacity = 1;
};

const getJSON = async function (url, errorMsg = "Something went wrong") {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
	return await response.json();
};

///////////////////////////////////////
// const getCountryData = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);
// 		console.log(Object.values(data.languages)[0]);

// 		// console.log(data.languages[Object.keys(languages)[0]]);
// 		console.log(Object.values(Object.values(data.currencies)[0])[0]);

// 		const html = `  <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
// 				+data.population / 1000000
// 			).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${
// 				Object.values(data.languages)[0]
// 			}</p>
// <p class="country__row"><span>💰</span>${
// 			Object.values(Object.values(data.currencies)[0])[0]
// 		}</p>

//     </div>
//   </article>`;
// 		countriesContainer.insertAdjacentHTML("beforeend", html);
// 		countriesContainer.style.opacity = 1;
// 	});
// };

// getCountryData("usa");
// getCountryData("Japan");
// getCountryData(prompt("kajkjb"));

///////////////////////////////////////////////////////////////////////

// // Callback hell: call inside a call
// const getCountryAndNeighbour = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// render country 1
// 		renderCountry(data);

// 		// get neighbour country (2)
// 		const neighbour = data.borders;
// 		console.log(neighbour);
// 		if (!neighbour) return;

// 		// AJAX call country 2
// 		neighbour.forEach((element) => {
// 			const request2 = new XMLHttpRequest();
// 			request2.open("GET", `https://restcountries.com/v3.1/alpha/${element}`);
// 			request2.send();
// 			request2.addEventListener("load", function () {
// 				const [data2] = JSON.parse(this.responseText);
// 				console.log(data2);
// 				renderCountry(data2, "neighbour");
// 			});
// 		});
// 	});
// };

// getCountryAndNeighbour("Bharat");

/////////////////////////////////////////////////////////////////////////////////
// const getJSON = function (url, errorMsg = "Something went wrong") {
// 	fetch(url).then((response3) => {
// 		if (!response3.ok) throw new Error(`${errorMsg} ${response3.status}`);
// 		return response3.json();
// 	});
// };
// const getCountryData = function (country) {
// 	getJSON(`https://restcountries.com/v3.1/name/${country}`, "country not found")
// 		.then((data) => {
// 			renderCountry(data[0]);

// 			const neighbour = data[0].borders[0];

// 			if (!neighbour) throw new Error("No neighbouring country found");

// 			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// 		})
// 		.then((response) => response.json())
// 		.then((data) => renderCountry(data[0], "neighbour"))
// 		.catch((err) => {
// 			console.error(`${err} `);
// 			renderError(`Something went wrong ${err.message}. Try again!`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// btn.addEventListener("click", function () {
// 	getCountryData("australia");
// });

/////////////////////////////////////////////////////////////////////
// Promises and fetch API
// const getJSON = function (url, errorMsg = "Something went wrong") {
// 	fetch(url).then((response3) => {
// 		if (!response3.ok) throw new Error(`${errorMsg} ${response3.status}`);
// 		// console.log(response3.json());
// 		return response3.json();
// 	});
// };

// const getCountryData = function (country) {
// 	getJSON(`https://restcountries.com/v3.1/name/${country}`, "country not found")
// 		.then((data) => {
// 			renderCountry(data[0]);

// 			const neighbour = data[0].borders[0];

// 			if (!neighbour) throw new Error("No neighbouring country found");

// 			// Country 2
// 			return getJSON(
// 				`https://restcountries.com/v3.1/alpha/${neighbour}`,
// 				"No neighbour exists"
// 			);
// 		})
// 		.then((data) => renderCountry(data[0], "neighbour"))
// 		.catch((err) => {
// 			console.error(`${err} `);
// 			renderError(`Something went wrong ${err.message}. Try again!`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// btn.addEventListener("click", function () {
// 	getCountryData("australia");
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// const whereAmI = function (lat, lng) {
// 	fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// 		.then((request) => {
// 			if (!request.ok)
// 				throw new Error(`Problem with geocoding ${request.status}`);
// 			return request.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			console.log(`You are in ${data.city}, ${data.country}`);

// 			return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// 		})
// 		.then((response) => {
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data[0]))

// 		.catch((err) => {
// 			console.error(`Something went wrong ${err.message}`);
// 		});
// };

// whereAmI(-33.933, 18.474);

// Example of Event loop
// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0); // these timers are not gauranteed coz it depends upon the backgronud tasks.
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// console.log("Test end");

////////////////////////////////////////////////////////////////////////
// Building a Pormise
// const lotteryPromise = new Promise(function (resolve, reject) {
// 	console.log("Lotter draw is happening");
// 	setTimeout(function () {
// 		if (Math.random() >= 0.5) {
// 			resolve("You win"); // to set a promise fulfilled we use resolve
// 		} else {
// 			reject(new Error("You lost your money"));
// 		}
// 	}, 2000);
// });

// lotteryPromise
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// // Primosifying setTimeout - now the tasks won't go in callBack queue
// //  but in multitask queue instead
// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// wait(1)
// 	.then(() => {
// 		console.log("I waited for 1 seconds");
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log("I waited for 2 second ");
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log("I waited for 3 second ");
// 		return wait(1);
// 	})
// 	.then(() => console.log("I waited for 4 second"));

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

//////////////////////////////////////////////////////////////////////////////
// Promisifying geolocation API
// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		// navigator.geolocation.getCurrentPosition(
// 		// 	(position) => resolve(position),
// 		// 	(err) => reject(err)
// 		// );
// 		// resolve is the call back fucntion that will be called by position
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// getPosition().then((pos) => console.log(pos.coords));

// const whereAmI = function () {
// 	getPosition()
// 		.then((pos) => {
// 			const { latitude: lat, longitude: lng } = pos.coords;
// 			return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// 		})

// 		.then((request) => {
// 			if (!request.ok)
// 				throw new Error(`Problem with geocoding ${request.status}`);
// 			return request.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			console.log(`You are in ${data.city}, ${data.country}`);

// 			return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// 		})
// 		.then((response) => {
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data[0]))

// 		.catch((err) => {
// 			console.error(`Something went wrong ${err.message}`);
// 		});
// };

// btn.addEventListener("click", whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
 This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path.
  When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. 
  The fulfilled value should be the image element itself. 
  In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image 
(set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// const imgContainer = document.querySelector(".images");
// // document.createElement('img')
// const createImage = function (imgPath) {
// 	return new Promise(function (resolve, reject) {
// 		const img = document.createElement("img");
// 		img.src = imgPath;

// 		img.addEventListener("load", function () {
// 			imgContainer.append(img);
// 			resolve(img);
// 		});

// 		img.addEventListener("error", function () {
// 			reject(new Error("Image not found"));
// 		});
// 	});
// };
// let currentImage;
// createImage("img/img-1.jpg")
// 	.then((img) => {
// 		currentImage = img;
// 		console.log("Image 1 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImage.style.display = "none";
// 		return createImage("img/img-2.jpg");
// 	})
// 	.then((img) => {
// 		currentImage = img;
// 		console.log("Image 2 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImage.style.display = "none";
// 	})
// 	.catch((err) => console.log(err));
////////////////////////////////////////////////////////////////////////////
// Using Async_Await

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// const whereAmI = async function () {
// 	try {
// 		// Geolocation
// 		const pos = await getPosition();
// 		const { latitude: lat, longitude: lng } = pos.coords;

// 		// Reverse Geocoding
// 		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// 		if (!resGeo.ok) throw new Error("Problem getting location data");

// 		const dataGeo = await resGeo.json();

// 		// country data
// 		const res = await fetch(
// 			`https://restcountries.com/v3.1/name/${dataGeo.country}`
// 		);
// 		if (!res.ok) throw new Error("Problem getting location data");
// 		const [data] = await res.json();

// 		renderCountry(data);
// 	} catch (err) {
// 		console.error(err);
// 		renderError(`Something went wrong ${err.message}`);
// 	}
// };

// whereAmI()
// 	.then((city) => console.log(city))
// 	.catch((err) => console.log(`2: ${err.message}`))
// 	.finally(() => console.log(`3: Finshed getting location`));

// IIFE's
// (async function () {
// 	try {
// 		const city = await whereAmI();
// 		console.log(`2: ${city}`);
// 	} catch (err) {
// 		`2: ${err.message}`;
// 	}
// 	console.log(`3: Finished getting location`);
// })();

// try {
// 	let y = 1;
// 	const x = 2;
// 	x = 3;
// } catch (err) {
// 	alert(err.message);
// }

//////////////////////////////////////////////////////////////////////////
// Running Promimses in Parallel
const get3Countries = async function (c1, c2, c3) {
	try {
		// const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
		// const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
		// const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

		// console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

		const data = await Promise.all([
			getJSON(`https://restcountries.com/v3.1/name/${c1}`),
			getJSON(`https://restcountries.com/v3.1/name/${c2}`),
			getJSON(`https://restcountries.com/v3.1/name/${c3}`),
		]);
		console.log(data.map((d) => d[0].capital[0]));
		// console.log(data);
	} catch (err) {
		console.log(err);
	}
};
get3Countries("portugal", "canada", "tanzania");

// Promise.race - winning promise will be stored in an array
(async function () {
	const res = await Promise.race([
		getJSON(`https://restcountries.com/v3.1/name/italy`),
		getJSON(`https://restcountries.com/v3.1/name/israel`),
		getJSON(`https://restcountries.com/v3.1/name/egypt`),
	]);
	console.log(res);
})();

const timeOut = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error("request took too long!"));
		}, sec * 1000);
	});
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/egypt`), timeOut(1)])
	.then((res) => console.log(res[0]))
	.catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). 
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
