/* //LMS
firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()*/

//Solution
const firstName = 'John';
const age= 35;
const hobby = 'Coding';

const logTwice= (parameter) => {
    console.log(parameter)
    console.log(parameter)
}

function logHobby() {
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

logHobby()

//the code didn't work because it missed const at the top, it had syntax errors
//the arrow function on line 22 logTwice missed parameter that can be used
//renamed 'hobby' to logHobby to avoid conflict with a hobby variable
//changed the name to firstName 
//called the logHobby function to execute the code