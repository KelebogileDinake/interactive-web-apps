/*//LMS Solution

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}

const result = []

const extractBiggest = () => {
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)*/

//My solution
//Multi-dimensional Array- nest one array within another array
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
// I exttract the list of numbers from the data object abd assign them to 3 variables
const firstLine = data.lists[0][1]
const secondLine = data.lists[1][1]
const thirdLine = data.lists[2][1]

const result = []

const extractBiggest = () => {
	if (data.lists[0][1].length === 0) {
		return data.lists[1][1].length === 0 ? data.lists[2][1].pop() : data.lists[1][1].pop();
	}

	if (data.lists[1][1].length === 0) {
		return data.lists[0][1].length === 0 ? data.lists[2][1].pop() : data.lists[0][1].pop();
	}
	
	if(thirdLine.length === 0) {
	return data.lists[0][1].length === 0 ? data.lists[2][1].pop() : data.lists[0][1].pop();
}
if (data.lists[0][1][data.lists[0][1].length -1] >= data.lists[1][1][data.lists[1][1].length - 1] && data.lists[0][1][ data.lists[0][1].length - 1] >= data.lists[2][1][data.lists[2][1].length - 1]) {
	return data.lists[0][1].pop();
}
 
if(data.lists[1][1][data.lists[1][1].length - 1] >= data.lists[2][1][data.lists[2][1].length - 1] && data.lists[1][1][data.lists[1][1].length - 1] >= data.lists[0][1][data.lists[0][1].length - 1]) {
	return data.lists[1][1].pop();
}

}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)