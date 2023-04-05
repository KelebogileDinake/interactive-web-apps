//From LMS
/*const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)*/

//My solution
const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

//Only change below this line

//const primaryValid = typeof number == primaryPhone
//const secondaryValid = typeof secondaryPhone == 'string' // only changed and use the type of secondaryPhone as it is a globe const and decleared it a string because it is a string

const primaryValid = !Number.isNaN(parseInt(primaryPhone))
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone))

console.log('Primary phone is valid numerical string:' , primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)

//Olebogeng solution
//const secondaryValid typeof number parseInt(primaryPhone) === primaryPhone
