// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// addToCart("Bread", 10);
// console.log(price, tq);

console.log("importing module");
/*
// import everything form shoppingCart module as an object
// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart("bread", 19);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(price);

import add from "./shoppingCart.js";
add("pizza", 2);

// Top-level await: stops the execution
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log('Something')

const getLastPost = async function () {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	console.log(data);

	return { title: data.at(-1).title, text: data.at(-1).body };
};

// gives a promisie because the value isn't fetched by the time this function is called
const lastPost = getLastPost();
console.log(lastPost);

// not clean
// lastPost.then((last) => console.log(last));

// instead we use top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/************************************************************/
//Module Pattern:
// const ShoppingCart2 = (function () {
// 	const cart = [];
// 	const shippingCost = 10;
// 	const totalPrice = 237;
// 	const totalQuantity = 23;

// 	const addToCart = function (product, quantity) {
// 		cart.push({ product, quantity });
// 		console.log(`${quantity} ${product} added to cart`);
// 	};

// 	const orderStock = function (product, quantity) {
// 		console.log(`${quantity} ${product} ordered from supplier`);
// 	};

// 	return {
// 		addToCart,
// 		cart,
// 		totalPrice,
// 		totalQuantity,
// 	};
// })();

// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("oranges", 6);
// // not accessible
// // ShoppingCart2.orderStock("apple", 3);
// console.log(ShoppingCart2.shippingCost);

/************************************************************/
// Common JS
// Export
// export.addToCart = function (product, quantity) {
//     		cart.push({ product, quantity });
//     		console.log(`${quantity} ${product} added to cart`);
//     	};

// Import
// const {addToCart} = require('./shoppingCart.js');
