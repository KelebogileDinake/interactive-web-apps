/* //LMS
function add a, b => { a + b }

function multiply a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()*/

//solution
function add (a, b) {
    return a + b;
}

function multiply (add, c) {
    return add * c;
}

function internal() {
    const added = this.add(this.internal.a, this.internal.b);
	const multipied= this.multiply(added, this.internal.c)
	console.log(multiplied);
    return this
};  
   // this function reads the internal objects of both the examples 
   // the (this) attaches/call the function add thats above and in the backets it calls the interals
   // the return will simply multiply both the const added and multipied

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

