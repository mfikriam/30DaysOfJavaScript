// Exercises: Level 1
console.log('===================Exercises Level 1===================');

// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div. 
//    - Even numbers background is green
//    - Odd numbers background is yellow
//    - Prime numbers background is red

// Centering Content
const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.fontFamily = 'Roboto';

// Modifying Header
const h1 = body.querySelector('h1');
const h2 = body.querySelector('h2');
const h3 = body.querySelector('h3');
h1.style.marginBottom = '0';
h2.style.fontWeight = 'normal';
h2.style.textDecoration = 'underline';
h2.style.marginTop = '0';
h2.style.marginBottom = '0';
h3.style.fontWeight = 'normal';
h3.style.textDecoration = 'underline';
h3.style.marginTop = '0';

// Check Prime Number
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Adding Numbers with their class
const wrapper = body.querySelector('.wrapper');
for (let i = 0; i < 102; i++) {
  const number = document.createElement('div');
  number.textContent = i;
  if (i % 2 === 0) {
    number.classList.add('even');
  } else if (isPrime(i)) {
    number.classList.add('prime');
  } else {
    number.classList.add('odd');
  }

  wrapper.appendChild(number);
}

// Add Colors
const primeList = wrapper.querySelectorAll('.prime');
const evenList = wrapper.querySelectorAll('.even');
const oddList = wrapper.querySelectorAll('.odd');
const red = '#f25c54';
const green = '#6a994e';
const yellow = '#ffd60a';
primeList.forEach((num) => num.style.background = red);
evenList.forEach((num) => num.style.background = green);
oddList.forEach((num) => num.style.background = yellow);

// Modify Numbers Style
const numbers = wrapper.querySelectorAll('div');
const width = 100 / 8;
numbers.forEach((num) => {
  num.style.color = 'white';
  num.style.fontSize = '28px';
  num.style.padding = '15px';
  num.style.margin = '5px';
  num.style.width = `${width}%`;

  num.style.display = 'flex';
  num.style.alignItems = 'center';
  num.style.justifyContent = 'center';
});

// Organize Numbers Box Position
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';

console.log(width);
console.log(wrapper);