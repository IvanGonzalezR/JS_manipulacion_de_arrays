const elements = [ 'fire', 'air', 'water' ];

console.log(
  elements.join(', ')
);

const title = 'Curso de manipulacion de Arrays';
const titleSplitted = title.split(' ');
console.log(titleSplitted);
const titleUrl = titleSplitted.join('-').toLowerCase();
console.log(titleUrl);
