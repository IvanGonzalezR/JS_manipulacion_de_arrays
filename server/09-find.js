const numbers = [ 1, 30, 49, 29, 10, 13 ];

console.log(
  numbers.find(elem => elem == 30)
  // numbers.find(elem => elem == 31) //undefined
);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

console.log(
  products.find(elem => elem.id == '🥞')
);
console.log(
  products.findIndex(elem => elem.id == '🥞') //devuelve el indice
);