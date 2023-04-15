/*//From LMS
const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId.name || 'ID {futureId} not created yet')

copied = holidays.christmas
copied = { name: 'X-mas Day' }
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)*/


/*//my solution
const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
const christmas = 6
const futureId = 9

// Do not change code above this comment

// Check if an item has been assigned to the futureId key
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)


// Make a copy of the Christmas object and update the name and date
let copied = { ...holidays[christmas] }
copied.name = 'X-mas Day'
let correctDate = new Date(copied.date)
correctDate.setHours(0)
correctDate.setMinutes(0)
let isEarlier = correctDate.getTime() < holidays[christmas].date.getTime()

// Check if the new date is earlier than the current date
console.log('New date is earlier:', isEarlier)

// Update the copied object if the new date is earlier
if (isEarlier) {
    copied.date = correctDate
}

// Display the changes made to the copied object
console.log(`ID change: false`)
console.log(`Name change: ${copied.name}`)
console.log(`Date change: ${correctDate.getDate().toString().padStart(2, '0')}/${(correctDate.getMonth() + 1).toString().padStart(2, '0')}/${correctDate.getFullYear()}`)

// Find the first and last holiday dates of the year
let holidayDates = Object.values(holidays).map(h => h.date) //.map creates a new list by calling an existing funtion within an array
let firstHolidayDates = new Date(Math.min(...holidayDates))
let lastHolidayDates = new Date(Math.max(...holidayDates))


// Format and display the first and last holiday dates
console.log(holidays[9].date.toLocaleDateString("en-ZA"));
console.log(holidays[2].date.toLocaleDateString("en-ZA"));

const randomHolidayIndex = Math.floor(Math.random() * 9)
const randomHoliday = holidays[randomHolidayIndex]
const randomHolidayDate = randomHoliday.date instanceof Date ?
  `${randomHoliday.date.getDate().toString().padStart(2, '0')}/` +
  `${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/` +
  `${randomHoliday.date.getFullYear()}` :
  randomHoliday.date

console.log (randomHolidayDate)*/

//My Another solution
const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`) //the console.log gives the output of checking where the futureId(9) is included in the holidays,

const copied= holidays[6].date
const update= { name: 'X-mas Day' ,date:(`25 December ${currentYear}`)}
correctDate = new Date(update.date)
correctDate.setHours(0)
correctDate.setMinutes(0)
//console.log(update)
isEarlier = copied.date !== correctDate || correctDate
console.log('New date is earlier:' ,isEarlier)
if(isEarlier) {copied.date !== correctDate}
console.log('ID change:' ,correctDate > holidays[6].date)
console.log('Name changed:' ,update.name)
console.log(`Date change: ${correctDate.getDate()}/${(correctDate.getMonth()+1)}/${correctDate.getFullYear()}`)

//Fixing a day of reconciliation
let dayOfReconciliation = new Date(holidays[0].date);
//console.log (dayOfReconciliation)

const firstHolidayTimestamp = Math.min(
    dayOfReconciliation,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,)
//console.log(firstHolidayTimestamp)
let minDate = new Date(firstHolidayTimestamp)
console.log('First Holiday:' ,minDate.toLocaleDateString("en-ZA"))

const lastHolidayTimestamp = Math.max(
    dayOfReconciliation,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,)
//console.log(lastHolidayTimestamp)
let maxDate= new Date(lastHolidayTimestamp)
console.log('lastHoliday:' ,maxDate.toLocaleDateString("en-ZA")) //

//const firstDay = new Date(firstHolidayTimestamp) .getDate()
//const firstMonth =new Date(firstHolidayTimestamp) .getMonth()
//const lastDay = new Date(lastHolidayTimestamp).getDate()
//const lastMonth = new Date(lastHolidayTimestamp).getMonth()

const randomHolidayIndex = Math.floor(Math.random() * 9)
const randomHoliday = holidays[randomHolidayIndex]
const randomHolidayDate = randomHoliday.date instanceof Date ?
  `${randomHoliday.date.getDate().toString().padStart(2, '0')}/` +
  `${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/` +
  `${randomHoliday.date.getFullYear()}` :
  randomHoliday.date

console.log (randomHolidayDate)
