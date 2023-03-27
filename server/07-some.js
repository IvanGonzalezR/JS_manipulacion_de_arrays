const numbers = [ 1, 1, 3, 5 ];

console.log(
  numbers.some(item => item % 2 === 0)
);

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
console.log(
  orders.some(order => order.delivered)
);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 08),
  endDate: new Date(2021, 1, 1, 09, 30),
  title: "Cena 2",
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlapping = (newDate) => {
  return dates.some(appointment => {
    return areIntervalsOverlapping(
      //fechas del arreglo 
      { start: appointment.startDate, end: appointment.endDate },
      //fecha que se pretende
      { start: newDate.startDate, end: newDate.endDate }
    );
  })
}

console.log('is overlapping: ', isOverlapping(newAppointment));