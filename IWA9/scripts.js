/*//From the LMS content
const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance)*/

//My solution
const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%', 
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    smallRoom: 200,
    largeRoom: 300,
    smallApartment: 400,
    largeApartment: 800,
    smallHouse: 1200,
    largeHouse: 2400,
} //Wrote the rooms and apartments in camelCasing and removed the strings

// You can change below however you want

// What I say basically is if the apartment is large 
//first calculate the tax to be in decimals, parseInt becuse the tax is string and divide by 100 to be in decimals
//multiplied the salary with a tax as decimal and minus salary to get the remaining balance after taking out the tax
//next step minus the expenses from the remaining salary after tax
if(size && lodging) {
    const taxAsDecimal = parseInt(`${tax[913]}`)/100 
    const startingAfterTax = salary - (salary*taxAsDecimal)
    const balance =startingAfterTax - (expenses.transport + expenses.food + rent.largeApartment)
    console.log('R' ,balance.toFixed(2)) // the console.log is inside because the output needs to read inside the curly brackets
}

