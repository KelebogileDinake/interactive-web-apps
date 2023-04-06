//from LMS
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let sarahNewBalance= sarahBalance*-1
let leoNewBalance= leoBalance*-1


const owed = parseInt( leoNewBalance + sarahNewBalance)
const leo = (`${leoName} ${(leoSurname).trim()} Owed R: ${leoNewBalance}`)
const sarah = (`${(sarahName).trim()} ${sarahSurname} Owed R:${sarahNewBalance.toFixed(2)}`)
const total = "Total amount owed: R "
const result = (`${leo} \n${sarah} \n \n${divider} \n${total} ${owed} \n${divider}`)

console.log(result)