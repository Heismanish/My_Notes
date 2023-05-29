// Exporting module
console.log("exporting module");

// Blocking code
// console.log("Start fetching users");
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finish fetching");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
	cart.push({ product, quantity });
	console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 12;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
	cart.push({ product, quantity });
	console.log(`${quantity} ${product} added to cart`);
}
