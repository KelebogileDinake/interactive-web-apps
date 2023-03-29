/*import company
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message*/

//* Company and year needed to be in{} and .js at the end of configure.
import {company} from './configuration.js'
import { year } from './configuration.js'

const message= document.getElementById("footer")
message.innerText= company + " " + year 