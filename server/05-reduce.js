const totals = [ 1, 2, 3, 4 ];

const sumTotals = totals.reduce((accum, current) => {
  return accum += current
}, 0);

console.log(sumTotals);