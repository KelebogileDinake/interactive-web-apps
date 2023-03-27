const MAX_NUMBER= 10
const MIN_NUMBER= -10



const number= document.querySelector('[data-key="number"]')
const add = document.querySelector('[data-key="add"]')
const subtract= document.querySelector('[data-key="subtract"]')


// inside subtractHandler located a new memory called newValue
// addHandler newValue

const subtractHandler = () => {
    const newValue= parseInt( number.value) -1
    number.value= newValue;
} 

const addHandler= () => {
    const newValue= parseInt( number.value) +1
    number.value= newValue;
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)