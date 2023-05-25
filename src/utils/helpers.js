const data = require("../data/data.json")

const COLORS = ["#faebd7", "#f0c284", "#fdf5e6"]

export const dataToTicketsTable = () => {
  /*
  Process data to return a array of object 
  {
    id: number,
    status: string,
    createdAt: date,
    contact: string,
  }
  */
  let tickets = []

  data.tickets.forEach(({ id, status, createdAt, contact }) => {
    let tempTicket = { id, status, createdAt, contact: contact.name }
    tickets.push(tempTicket)
  })

  return tickets
}

export const dataToPieChart = () => {
  /*
 Process data to return a array of object 
 {
   id: string,
   value: number,
   label: string,
   color: string,
 }
 */
  let mapTickets = {}

  data.tickets.forEach(({ status }) => {
    if (mapTickets[status]) {
      mapTickets[status]++
    } else {
      mapTickets[status] = 1
    }
  })

  return Object.entries(mapTickets).map(([key, value], idx) => {
    return {
      id: key,
      label: key,
      value: value,
      color: COLORS[idx],
    }
  })
}

export const formatDate = (inputDate) => {
  /*
    receive date object, return string format DD/MM/YYYY às HH:MM
  */
  let date, month, year, hour, minute;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();
  hour = inputDate.getHours();
  minute = inputDate.getMinutes();

  date = date
    .toString()
    .padStart(2, '0');

  month = month
    .toString()
    .padStart(2, '0');

  hour = hour
    .toString()
    .padStart(2, '0');

  minute = minute
    .toString()
    .padStart(2, '0');

  return `${date}/${month}/${year} às ${hour}:${minute}`;
}