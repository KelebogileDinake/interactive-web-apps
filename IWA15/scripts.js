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
/*// I extract the list of numbers from the data object abd assign them to 3 variables
const firstLine = data.lists[0][1]
const secondLine = data.lists[1][1]
const thirdLine = data.lists[2][1]*/

const {
	lists: [
		[,first],
		[,second],
		[,third],
	]
} = data

const result = []

const extractBiggest = () => {
	
	if (firstLine.length === 0) {
		return secondLine.length === 0 ? thirdLine.pop() : thirdLine.pop();
	}

	if (secondLine.length === 0) {
		return firstLine.length === 0 ? thirdLine.pop() : firstLine.pop();
	}
	
	if(thirdLine.length === 0) {
	return firstLine.length === 0 ? thirdLine.pop() : firstLine.pop();
}
const firstLast = first.at(-1)
	const secondLast = second.at(-1)
	const thirdLast = third.at(-1)

/*if (firstLine[firstLine.length -1] >= secondLine[secondLine.length - 1] && firstLine[ firstLine.length - 1] >= thirdLine[thirdLine.length - 1]) {
	return firstLine.pop();
}
 
if(secondLine[secondLine.length - 1] >= data.lists[2][1][data.lists[2][1].length - 1] && data.lists[1][1][data.lists[1][1].length - 1] >= data.lists[0][1][data.lists[0][1].length - 1]) {
	return data.lists[1][1].pop();
}
if (data.lists[2][1][data.lists[2][1].length -1] >= data.lists[0][1][data.lists[0][1].length -1] && data.lists[2][1][data.lists[2][1].length -1] >= data.lists[1][1][data.lists[1][1].length -1]) {
	return data.lists[2][1].pop();
}*/
}

 /*//Longer solution
 const extractBiggest =() => {
	if(firstLine.length === 0) {
		if(secondLine.length === 0) {
			return thirdLine.pop();
		}else {
			return secondLine.pop();
		}
    }
	if(secondLine.length === 0){
		if(thirdLine.length === 0) {
			if(thirdLine.length === 0){
				return firstLine.pop()
			} else{ 
				return thirdLine.pop()
			}
		}
	}
	if(thirdLine.length === 0){
		if(firstLine.length === 0){
			if(secondLine.length === 0){
				return secondLine .pop()
			} else {
				return firstLine.pop()
			}
		}
	}

	if(firstLine[firstLine.length -1] >= secondLine[secondLine.length -1]&& firstLine[firstLine.length -1] >= thirdLine[thirdLine.length -1]){
		if(firstLine.length=== 0){
			return thirdLine.pop()
		} else {
			return firstLine.pop()
		}
	} else if (secondLine[secondLine.length -1] >= firstLine[firstLine.length -1] && secondLine[secondLine.length -1] >= thirdLine[thirdLine.length -1]){
		if(secondLine.length === 0){
			return thirdLine.pop();
		} else {
			return secondLine.pop()
		}
	}else{
		if (thirdLine.length === 0){
			if(firstLine.length === 0) {
				return secondLine.pop();
			} else{
				return firstLine.pop();
			} 
		}
		else {
			return thirdLine.pop();
		}
	}
 }*/
	
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
