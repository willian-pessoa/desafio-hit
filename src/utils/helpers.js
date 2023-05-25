const data = require("../data/data.json")

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

export const formatDate = (inputDate) => {
  /*
    receive date object, return string format DD/MM/YYYY
  */
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date
    .toString()
    .padStart(2, '0');

  month = month
    .toString()
    .padStart(2, '0');

  return `${date}/${month}/${year}`;
}