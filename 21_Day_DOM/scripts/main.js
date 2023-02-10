// Exercises: Level 3
console.log('==============Exercises Level 3: DOM: Mini project 1==============');

// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder.  Apply all the styles and functionality using JavaScript only.

//    - The year color is changing every 1 second
//    - The date and time background color is changing every on seconds
//    - Completed challenge has background green
//    - Ongoing challenge has background yellow
//    - Coming challenges have background red

// Centering Content
const wrapper = document.querySelector('div.wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.fontFamily = 'Roboto';

// Modify word '2000'
const title = wrapper.querySelector('h1');
const titleTextArray = title.textContent.split(' ')
let word = titleTextArray.pop();
// Add span tag to word '2000'
const customizedWord = `<span>${word}</span>`;
titleTextArray.push(customizedWord);
title.innerHTML = titleTextArray.join(' ');

// Random Hex Color Generator
const randomHexColor = () => {
  let hex_color = '#';
  for (let j = 0; j < 3; j++) {
    const randomHexa = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    hex_color += randomHexa.toUpperCase()
  };
  return hex_color;
}

// Add style to word '2000'
word = title.querySelector('span');
word.style.fontSize = '50px';
// let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
// let i = 0;
setInterval(() => {
  word.style.color = randomHexColor();
  // i = (i + 1) % colors.length;
}, 1000);

// Modify Subtitle
const subtitle = wrapper.querySelector('h2');
subtitle.style.fontWeight = 'normal';
subtitle.style.textDecoration = 'underline';

// Add Date
const date = document.createElement('p');
date.style.padding = '10px';
date.style.marginTop = '0';
date.style.marginBottom = '0';
const dateStyle = { month: "long", day: "numeric", year: "numeric" };
const timeStyle = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
setInterval(() => {
  const generateDate = new Date();
  const dateString =
    generateDate.toLocaleDateString("en", dateStyle)
    + ' '
    + generateDate.toLocaleTimeString("en", timeStyle);
  date.innerHTML = dateString;
  date.style.background = randomHexColor();
}, 1000);
wrapper.insertBefore(date, subtitle.nextSibling);

// Modify List
const ul = wrapper.querySelector('ul');
ul.style.listStyle = 'none';

const list = ul.querySelectorAll('li');
const width = title.offsetWidth;
list.forEach((item) => {
  if (item.innerText.includes('Done')) {
    item.style.background = '#6a994e';
  }
  if (item.innerText.includes('Ongoing')) {
    item.style.background = '#ffd60a';
  }
  if (item.innerText.includes('Coming')) {
    item.style.background = '#f25c54';
  }

  item.style.padding = '15px';
  item.style.marginTop = '2px';
  item.style.marginBottom = '2px';
  item.style.width = `${width}px`;

  console.log(item.innerText);
});