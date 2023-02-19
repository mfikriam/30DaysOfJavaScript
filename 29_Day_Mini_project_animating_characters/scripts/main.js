// Global Variabels
const body = document.body;
const div = body.querySelector('div');

// Random Hex Color Generator
const randomHexColor = () => {
  let hex_color = '#';
  for (let j = 0; j < 3; j++) {
    const randomHexa = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    hex_color += randomHexa.toUpperCase()
  };
  return hex_color;
}

const randomFontFamily = () => {
  const fontFamilyArray = ['Aldrich', 'Lato', 'Montserrat', 'Nunito', 'Oswald', 'Raleway', 'Raleway Dots', 'Roboto'];
  const randomIndex = Math.floor(Math.random() * fontFamilyArray.length);
  return fontFamilyArray[randomIndex];
}

// Change Background Color
setInterval(() => {
  body.style.backgroundColor = randomHexColor();
}, 2000);

// Add Text Array
const text = '30 Days of JavaScript Challenge 2020 Asabeneh Yetayeh';
const textArray = text.split('');
const spanTextArray = textArray.map((char) => {
  if (char !== ' ') {
    return `<span>${char}</span>`;
  }
  return char;
});
div.innerHTML = spanTextArray.join('');

// Change The Color of Each Character
const span = div.querySelectorAll('span');
setInterval(() => {
  span.forEach((letterNode) => {
    letterNode.style.color = randomHexColor();
  });
}, 2000);

// Change Font Family
setInterval(() => {
  div.style.fontFamily = randomFontFamily();
}, 2000);