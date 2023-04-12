/*//from LMS
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result*/

//My Solution
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let sarahNewBalance= sarahBalance*-1 //multiplied by -1 to make the amount positive
let leoNewBalance= leoBalance*-1


const leo = (`${leoName} ${(leoSurname).trim()} Owed R: ${leoNewBalance}`)
const sarah = (`${(sarahName).trim()} ${sarahSurname} Owed R:${sarahNewBalance.toFixed(2)}`) // used .trim to fix Sarah's name and also .toFixed(2) to round to decimal places
const total = "Total amount owed: R "
const owed = parseInt( leoNewBalance + sarahNewBalance)
const result = (`${leo} \n${sarah} \n \n${divider} \n${total} ${owed} \n${divider}`) //used /n to break a line
console.log(result)