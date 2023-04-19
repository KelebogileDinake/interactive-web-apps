/*//LMS
let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const = logCalc () => { 
    const isString = typeof calculated = 'numerical-string' 
    const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
    calculated === calculatedAsNumber + 1 
}

const = calcUser () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const = checkUser () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()*/

//My Solution
let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'string' //checking if calculated is a string
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated  //Here we say if calculated is a string we convert it into a number and store the number in a calculatedAsNumber
    calculated = calculatedAsNumber + 1  // so according to how I understand it increased by 3.. how..?
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) user= 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

// the lines of code calls the logCalc() and do the if statements according to calculated number

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}


//here we define a function checkUser() and use the boolean saying if user is truthy and state is requesting as per the code above
//the output should console.log user: user (3)

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

//the code didnt work becuase it had a lot of syntax errors 