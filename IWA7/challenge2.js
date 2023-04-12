//From LMS
//const nickname= "Timmy";
//const firstname = "Timothy";

//console.log("Good Morning, ${nickname} || {firstname}!")

/*//My Solution
const nickname = "Timmy";
const firstname= "Timothy"

console.log(`Good Morning!, ${nickname}, ${firstname}`)

//i fixed the code by add a $ next to a firstname and deleted 
//removed the string on console.log added the backlashes
//to select either a Timmy or Timothy i have to remove a name either of the 2 */

/*//Another Solution
const nickname= ' ' //Timmy
const firstname= ' ' //Timothy
 
const user= nickname || firstname // because we need to select between firstname and nickname

console.log(`Good Morning! ${user} `) //because I need to select between the nickname or user name

console.log(`Good Morning! ${nickname} || ${firstname}`)*/

//Coach's Recommendation
const nickname = ""; //Timmy
const firstname = "" //Timothy
//To get the name you want enter the name inside
console.log(`Good Morning!, ${nickname || firstname}`)