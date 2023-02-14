// Exercises: Level 1
console.log('===================Exercises Level 1===================');

// 1. Generating numbers and marking evens, odds and prime numbers with three different colors.

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

// Generate Numbers
const generateNumbers = (wrapper, num) => {
  // Adding Numbers with their class
  wrapper.innerHTML = '';
  for (let i = 0; i < num; i++) {
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
  primeList.forEach((num) => num.style.background = red);
  evenList.forEach((num) => num.style.background = green);
  oddList.forEach((num) => num.style.background = yellow);

  // Modify Numbers Style
  const numbers = wrapper.querySelectorAll('div');
  const width = 100 / 12;
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
}

// Number Validation
// const isNumber = (input, num) {

// }

// Colors
const red = '#f25c54';
const green = '#3da35d';
const yellow = '#ffd60a';

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
h1.style.color = green;
h1.style.marginBottom = '0';
h2.style.fontWeight = 'normal';
h2.style.textDecoration = 'underline';
h2.style.marginTop = '0';
h2.style.marginBottom = '0';
h3.style.fontWeight = 'normal';
h3.style.textDecoration = 'underline';
h3.style.marginTop = '0';

// Add Input Wrapper
const inputWrapper = document.createElement('div');
inputWrapper.classList.add('input-wrapper');
inputWrapper.style.marginBottom = '20px';
document.body.insertBefore(inputWrapper, h3.nextSibling);

// Add Error Message
const errorMsg = document.createElement('p');
// errorMsg.textContent = 'Input value must be a number';
// errorMsg.textContent = 'Enter number value to the input field to generate numbers';
errorMsg.classList.add('input-wrapper');
errorMsg.style.marginBottom = '5px';
errorMsg.style.fontSize = '14px';
errorMsg.style.color = red;
inputWrapper.append(errorMsg);
errorMsg.style.display = 'none';

// Add Input
const input = document.createElement('input');
input.type = 'text';
input.id = 'number';
input.placeholder = 'Generate more numbers';
input.style.marginRight = '20px';
input.style.fontSize = '18px';
input.style.width = '500px';
input.style.outlineColor = green;
input.style.padding = '5px 10px 5px 10px';
inputWrapper.append(input);

// Add Button
const btn = document.createElement('button');
btn.textContent = 'Generate numbers';
btn.style.fontSize = '18px';
btn.style.color = 'white';
btn.style.padding = '5px 10px 5px 10px';
btn.style.backgroundColor = green;
btn.style.borderColor = green;
inputWrapper.append(btn);

// Organize Numbers Box Position
const wrapper = body.querySelector('.wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'left';

// Create Button Event Listener
btn.addEventListener('click', () => {
  let num = input.value;
  // console.log(num);
  // console.log(Number(num));
  if (num === '') {
    errorMsg.textContent = 'Enter number value to the input field to generate numbers';
    errorMsg.style.display = 'block';
  } else {
    if (isNaN(Number(num))) {
      errorMsg.textContent = 'Input value must be a number';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
      num = Number.parseInt(num);
      generateNumbers(wrapper, num);
    }
  }
});

console.log(wrapper);