import _ from 'lodash';
import * as decolo from './decolo';
import './style.scss'
import jpg1 from './1.png'


// console.log(decolo.name)
// console.log(decolo.run())

var pic = document.createElement('img')
pic.src = jpg1
    // console.log(jpg1)
document.body.appendChild(pic)


function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    return element
}
// debugger
document.body.appendChild(component())
var button = document.createElement('button')
button.innerText = 'submit'
document.body.appendChild(button)