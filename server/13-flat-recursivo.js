const matriz = [
  [ 1, 2, 3 ],
  4,
  [ 5, 6, 7, [ 8, 9 ] ],
  10,
  [ 1, 2, [ 3, [ 4 ] ] ]
];

function flatRecursivo(array) {
  let newArray = [];
  if (typeof array != 'object') {
    return array;
  } else {
    array.map(elem => {
      newArray = newArray.concat(flatRecursivo(elem));
    });
  }
  return newArray;
};

console.log(
  flatRecursivo(matriz)
);
