//From LMS

const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let shipping= null
let currency= 'R'
let location = 'NK' // here we choose a different contry to get the message from that country


// define the items and calculate the cost 
let shoes = 300 *1
let toys = 100 * 5
let shirts= 150 * 2 // deleted the none selected added *2 to get R300
let batteries = 70
let pens= 5 * 20 // deleted the none selected added 20
let totalCost = shoes + toys + shirts + batteries + pens;

if (location === 'RSA') { shipping === 400 && currency === 'R' }

if (location === 'NAM') { shipping === 600 && currency === '$'}
else if(location === 'other') {shipping === 800 && currency ===$}

if(location = 'NK') { console.log(BANNED_WARNIN)}

if (shoes + batteries + pens + shirts > 1000 && location !==NK) {
	if (location=== 'RSA' || (location === 'NAM' && customers < 2) ){ shipping = 0 || calcShipping}
} else console.log (FREE_WARNING);


if (shipping === 0 && customers !== '1') {
	console.log(FREE_WARNING);
}

if(location !== 'NK') {
	console.log('price', currency, totalCost + shipping);
}





