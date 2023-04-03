//From LMS
/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null*/

//My Solution
// I have const the x3
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0' // don't see the need of include it

let shipping= null // for the total at the end to make sense
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
} else console.log (FREE_WARNING); // when selected NK the message shouldn't protrai but it does


if (shipping === 0 && customers !== '1') {
	console.log(FREE_WARNING);
}// why did we add this one because I don't see the need

if(location !== 'NK') {
	console.log('price', currency, totalCost + shipping);
}
// the location being 'NK' because the North Korea the is no shipping in North Korea and RSA and NAM





