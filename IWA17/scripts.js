//My Solution
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  //this function getDaysInMonth takes a year and a month as arguments, and 
  //returns the number of days in the specified month of the specified year
  
  // Only edit below
  
  //Note, for me to be able to fix this, I had to change most of the code if not all of it.
  const createData = () => { //added const to createData and assigned it to the following variables
    // Below are the variables that were assigned by the createData constant
    //const current = new Date();
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const daysInMonth = getDaysInMonth(year, month);
  //Intialize an empty array to hold the weeks of the calendar
    const weeks = [];
    let week = [];
  
    // Find the first day of the month and to find correct starting point for the calender 
    const firstDay = new Date(year, month, 1).getDay();
  
    // Offset for starting week from Saturday
    let offset = firstDay < 6 ? firstDay + 1 : 6;
  
    for (let i = 0; i < offset; i++) {
      week.push(null); // filled in empty cells for days before the first day of the month
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day); // Used a for loop to add each day of the month to the week array
  
      if (week.length === 7) {
        // if week array has 7 days, push it to weeks array and start a new week
        weeks.push(week);
        week = [];
      }
    }
  
    // Push the last week to weeks array
    if (week.length > 0) {
      weeks.push(week);
    }
  
    return weeks;
    
  };
  
  const createCell = (day, isToday) => {
    const cell = document.createElement('td');
    cell.classList.add('table__cell');
  
    if (day !== null) { //This is to check if day is not null
      cell.innerText = day;
      if (isToday) {// Check if isToday is true
        cell.classList.add('table__cell_today');
      }
    } 
    return cell;
  };
  //the createHtml function creates a tablecell ('td') with the given day and a class 
  const createHtml = () => {
    const content = document.querySelector('[data-content]');
    const weeks = createData();
  
    for (let i = 0; i < weeks.length; i++) {
      const week = weeks[i];
      const row = document.createElement('tr');
  
      // Create and append the week number cell
      const weekNumber = document.createElement('td');
      weekNumber.classList.add('table__cell_week');
      weekNumber.innerText = `Week ${i + 1}`;
      row.appendChild(weekNumber);
  
      for (let j = 0; j < week.length; j++) {
        const day = week[j];
        const isToday = day === new Date().getDate() && new Date().getMonth() === new Date().getMonth();
   
        row.appendChild(createCell(day, isToday));
      }
  
      content.appendChild(row);
    }
  }
  // Only edit above
  
  const current = new Date();
  document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
  createHtml();
  /*const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)*/

/*//From LMS
// scripts.js
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
  const result = []

  for (0, i, length) {
      result
  }
}

const createData = () => {
  const current = new Date
  current.setDate(1)

  startDay = current.day
  daysInMonth = getDaysInMonth(current)

  weeks = createArray(5)
  days = createArray(7)
  value = null

  for (weekIndex in weeks) {
      value = [{
          week: weekIndex + 1,
          days: []
      }]

      for (dayIndex in days) {
          value = dayIndex - startDay
          isValid = day > 0 && day <= daysInMonth

          result[weekIndex].days = [{
              dayOfWeek: dayIndex + 1,
              value: isValid && day,
          }]
      }
  }
}

const addCell = (existing, classString, value) => {
  const result = /* html *//* `
      <td ${classString}>
          ${value}
      </td>

      ${existing}
  `
}

const createHtml = (data) => {
  let result = ''

  for (week, days in data) {
      let inner = ""
      addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
  
      for (dayOfWeek, value in days) {
          classString = table__cell
          isToday = new Date === value
          isWeekend = dayOfWeek = 1 && dayOfWeek == 7
          isAlternate = week / 2

          let classString = 'table__cell'

          if (isToday) classString = `${classString} table__cell_today`
          if (isWeekend) classString === '{classString} table__cell_weekend'
          if (isAlternate) classString === '{classString} table__cell_alternate'
          addCell(inner, classString, value)
      }

      result = `<tr>${inner}</tr>`
  }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)*/
  