//From LMS
/*const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo {
	name = leoName + leoSurname
	balance = leoBalance
	access id = 47afb389-8014-4d0b-aff3-e40203d2107f
	age = 24
	address {
		number = leoNumber
		street = leoStreet
		postal-code = leoPostal
	}
}

const sarah {
	name = saraName + saraSurname
	age = 62
	access id = 6b279ae5-5657-4240-80e9-23f6b635f7a8
	balance = sarahBalance
	address {
		number = sarahNumber
		street = sarahStreet
		postal-code = sarahPostal
	}

console.log(leo, leo[address][postal-code])
console.log(sarah, sarah[address][postal-code])*/

//My Solution
const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo= {
	name: leoName,
	balance: parseInt(leoBalance*-1),
	accessId:'47afb389-8014-4d0b-aff3-e40203d2107f',
	age : 24,
	address: {   
		leoNumber,
		leoStreet,
		leoPostal,
	}
}

const sarah= {
	Name : `${(sarahName).trim()} ${sarahSurname}`,
	Balance: parseInt(sarahBalance*-1),
	AccessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	Age : 62,
	Address: {
		sarahNumber,
		sarahStreet,
		sarahPostal,
	}
}

console.log(`Name:${leo.name}\nBalance:R${leo.balance}\nAge:${leo.age}\nAccessId:${leo.accessId}\n\nAddress: {\n Number:${leo.address.leoNumber}\n Street: ${leo.address.leoStreet}\n Postal:${leo.address.leoPostal}}`)
console.log(sarah)