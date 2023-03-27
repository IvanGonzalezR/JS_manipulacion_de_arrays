const items = [ 1, 3, 2, 3, 3, 10, 5, 7, 7 ];

const initialValue = {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
}
const itemsObject = items.reduce((obj, current) => {
  // if (!obj[ current ]) { //si no lo encuenta
  //   obj[ current ] = 1;
  // } else {
  //   obj[ current ] = obj[ current ] += 1;
  // }

  if (current >= 1 && current <= 5) {
    obj[ '1-5' ] = obj[ '1-5' ] + 1;
  } else if (current >= 6 && current <= 8) {
    obj[ '6-8' ] = obj[ '6-8' ] + 1;
  } else if (current >= 9 && current <= 10) {
    obj[ '9-10' ] = obj[ '9-10' ] + 1;
  }
  return obj;
}, initialValue);

console.log(itemsObject);