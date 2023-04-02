// nwabisa.js
//deleted the private and public and renamed them to const
export const firstname = "Nwabisa"
export const surname = "Gabe"
export const role = "CEO"
//exported everything to the scripts.js

// introduced const deleted the role 
const display= firstname + " " + surname;
document.querySelector('#nwabisa').innerText = display;