//Global Stage
let year= 2050 //Changed the date to year because the is a date which is month
let status= 'student' //change the colons into equal sign, to declear the variable
let count = 0

if (year = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4 //removed let inside the {} because it is globally decleared it.

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
console.log('The total holidays is:', count)