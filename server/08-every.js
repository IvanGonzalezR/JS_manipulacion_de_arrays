const numbers = [ 1, 30, 49, 29, 10, 13 ];

console.log(
  numbers.every(number => number <= 90)
);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

console.log(
  'admitido? ',
  team.every(player => player.age < 15) //que sean menores a 15 a;os
);