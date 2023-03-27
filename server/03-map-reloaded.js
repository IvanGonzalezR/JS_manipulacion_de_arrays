const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

//Esto MODIFICA el arreglo original aunque MAP sea inmutable
// const orders2 = orders.map(item => {
//   item.tax = 0.19;
//   return item;
// });

//Esto NO MODIFICA el arreglo original 
const orders3 = orders.map(item => {
  return {
    ...item,
    tax: 0.19
  };
});

const orders4 = orders.filter(item => item.delivered && item.total >= 100)

const searchByCustomerName = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
}

// console.log(orders);
// console.log(orders3);
// console.log(orders4);
console.log(searchByCustomerName('Nico'));
