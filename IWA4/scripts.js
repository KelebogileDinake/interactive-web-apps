//Global Stage
const year = 2050 //Changed the date to year because the is a date which is month
const status = 'student' //change the colons into equal sign, to declear the variable
// coach Ben change them to const because nje
let count = 0

if (year === 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4 //removed let inside the {} because I have globally decleared it.

	if (status === "student") {
		console.log('June', 'Youth Day')
		count = count + 1
	}

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (status === "parent") {
		console.log(date, 'Christmas Day')
		count = count + 1
	}

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status) //the results here are determined by the status seleted at the global
console.log('The year is:', year)
console.log('The total holidays is:', count) // the total count will be 9 and the status selected will determine if xmas or youth day is included
/*
//LMS
const date: 2050
const status: 'student'
const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day'
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)*/