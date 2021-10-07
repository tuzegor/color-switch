
import refs from './refs.js'
const {start, stop, body} = refs;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

let intID = null;
  
start.addEventListener('click', startChangeColor)
stop.addEventListener('click', stopChangeColor)

function startChangeColor () {
    intID = setInterval(()=>{
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        console.log(body.style.backgroundColor);
        start.disabled = true
    },1000)


}

function stopChangeColor () {
    clearInterval(intID)
    start.disabled = false
}

