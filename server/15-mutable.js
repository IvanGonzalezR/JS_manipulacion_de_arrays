const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
let myProducts2 = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔')
if (productIndex !== -1) {
  myProducts.push(products[ productIndex ]);
  myProducts2 = [ ...products ];
  myProducts2.splice(productIndex, 1)
  // products.splice(productIndex, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("myProducts2", myProducts2);
console.log("-".repeat(10));