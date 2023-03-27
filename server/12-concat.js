const elements = [ 1, 1, 2, 2 ];
const otherElements = [ 3, 3, 4, 4 ];

console.log(
  elements.concat(otherElements)
);

const letters = 'Random text';
//DONT
console.log(
  [ ...letters ]
);
//DO
console.log(
  [].concat(letters)
);

//Para array con objetos
const myArray = [ 1, 2, { a: 'dsasd' } ];
const newArray = myArray.map(a => ({ ...a }));
console.log(newArray);