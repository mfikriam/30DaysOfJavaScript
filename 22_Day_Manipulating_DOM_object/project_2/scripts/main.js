// Exercises: Level 2
console.log('===================Exercises Level 2===================');

// 1. Use the countries array to display all the countries.See the design

// Centering Header
const header = document.querySelector('header');
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.alignItems = 'center';
header.style.justifyContent = 'center';
header.style.fontFamily = 'Roboto';

// Add Total Country
const totalCountries = header.querySelector('#total-countries');
totalCountries.textContent = `Total Number of countries: ${countries.length}`;

// Modifying Header
const h2 = header.querySelector('h2');
const h3 = header.querySelectorAll('h3');
const h4 = header.querySelector('h4');
h2.style.marginBottom = '0';
h2.textContent = h2.textContent.toUpperCase();
h2.style.fontSize = '36px';
h2.style.letterSpacing = '10px';
h4.style.margin = '0';
h3.forEach((header) => {
  header.style.margin = '0';
  header.style.fontWeight = 'normal';
  header.style.fontSize = '12px';
});

// Add Countries
const container = document.querySelector('.countries-container');
const wrapper = container.querySelector('.countries-wrapper');
countries.forEach((country) => {
  const div = document.createElement('div');
  div.textContent = country.toUpperCase();
  div.style.fontFamily = 'Roboto';
  div.style.textAlign = 'center';
  div.classList.add('country');
  wrapper.appendChild(div);
});

// Modify Node Countries
const countriesNodes = wrapper.querySelectorAll('.country');
const width = 100 / 8;
countriesNodes.forEach((country) => {
  country.style.fontSize = '12px';
  country.style.padding = '15px';
  country.style.margin = '5px';
  country.style.width = `${width}%`;
  country.style.height = `100px`;
  country.style.boxShadow = '1px 1px 5px lightgray';

  country.style.display = 'flex';
  country.style.alignItems = 'center';
  country.style.justifyContent = 'center';
});

// Centering Countries Box
container.style.padding = '10%';
// container.style.display = 'flex';
// container.style.justifyContent = 'center';

// Organize Countries Box Position
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';

console.log(countries);