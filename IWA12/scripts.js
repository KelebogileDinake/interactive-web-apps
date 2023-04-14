/*//From LMS
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'*/

/*//My Solution
const STATUS_MAP= {
    shelf:{
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved:{
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue:{
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut:{
        color:'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};


// Edit below line 

const books= document.querySelectorAll('[id^="book"]');

books.forEach(book => {
    const status = book.querySelector('.status');
    const reserve= book.querySelector('.reserve');
    const checkout = book.querySelector('.checkout');
    const checkin= book.querySelector('.checkin');

    const statusValue = status.innerText.toLowerCase().trim();

    status.style.color= STATUS_MAP[statusValue].color;
    reserve.disabled= !STATUS_MAP[statusValue].canReserve;
    checkout.disabled= !STATUS_MAP[statusValue].canCheckout;
    checkin.disabled= !STATUS_MAP[statusValue].canCheckIn;
});

const buttons= document.querySelectorAll('button');
const statuses= document.querySelectorAll('.status');
const book= document.querySelectorAll('[id^="book');

books.forEach((book, index) => {
    const status = statuses [index];
    const reserveButton = buttons[index*3];
    const checkoutButton = buttons[index *3+1];
    const checkinButton = buttons[index *3+2];

    const bookStatus = STATUS_MAP[status.textContent.toLowerCase()];

    status.style.color= bookStatus.color;

    reserveButton.disabled= !bookStatus.canReserve;
    checkoutButton.disabled= !bookStatus.canCheckout;
    checkinButton.disabled= !book.Status.canCheckIn;
// });*/

/*//Solution
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};
const books = document.querySelectorAll('[id^="book"]');
books.forEach(book => {
  const status = book.querySelector('.status');
  const reserve = book.querySelector('.reserve');
  const checkout = book.querySelector('.checkout');
  const checkin = book.querySelector('.checkin');
  const statusValue = status.innerText.toLowerCase().trim();
  status.style.color = STATUS_MAP[statusValue].color;
  reserve.disabled = !STATUS_MAP[statusValue].canReserve;
  checkout.disabled = !STATUS_MAP[statusValue].canCheckout;
  checkin.disabled = !STATUS_MAP[statusValue].canCheckIn;
});

const buttons = document.querySelectorAll('button');
const statuses = document.querySelectorAll('.status');
const books = document.querySelectorAll('[id^="book"]');
books.forEach((book, index) => {
  const status = statuses[index];
  const reserveButton = buttons[index * 3];
  const checkoutButton = buttons[index * 3 + 1];
  const checkinButton = buttons[index * 3 + 2];
  const bookStatus = STATUS_MAP[status.textContent.toLowerCase()];
  status.style.color = bookStatus.color;
  reserveButton.disabled = !bookStatus.canReserve;
  checkoutButton.disabled = !bookStatus.canCheckout;
  checkinButton.disabled = !bookStatus.canCheckIn;
})*/

//my solution
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

const book1 = document.querySelector("#book1");
const status1 = book1.querySelector("#status");
const reserve1 = book1.querySelector(".reserve");
const checkout1 = book1.querySelector(".checkout");
const checkin1 = book1.querySelector(".checkin");

const status1a = status1.textContent;
checkin1.style.color = "black"

if(status1a in STATUS_MAP){
    status1.style.color = STATUS_MAP[status1a].color;
    reserve1.disabled = !STATUS_MAP[status1a].color;
    checkout1.disabled = !STATUS_MAP[status1a].color;
    checkin1.disabled = !STATUS_MAP[status1a].color;
} else{
    reserve1.disabled = true;
    checkout1.disabled = true;
    checkin1.disabled = true;
}

const book2 = document.querySelector("#book2");
const status2 = book2.querySelector(".status");
const reserve2 = book2





