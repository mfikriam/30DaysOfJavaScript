const body = document.body;

const header = body.querySelector('header');
const h1 = header.querySelector('h1');
const inputMass = header.querySelector('#mass');
const select = header.querySelector('select');
const btn = header.querySelector('button');

const main = body.querySelector('main');
const flexContainer = main.querySelector('.flex-container');
const flexItem = main.querySelectorAll('.flex-item');
const image = main.querySelector('.image');
const planetImage = main.querySelector('.planet-image');
const description = main.querySelector('.description');

const planets = [
  ['mercury', 3.70],
  ['venus', 8.90],
  ['earth', 9.80],
  ['moon', 1.60],
  ['mars', 3.70],
  ['jupiter', 23.10],
  ['saturn', 9.00],
  ['uranus', 8.70],
  ['neptune', 11.00],
  ['pluto', 0.70],
];

const planetMap = new Map(planets);

// Start Up
description.style.display = 'none';
for (let planet of planetMap.keys()) {
  const option = `<option value='${planet}'>${planet.toUpperCase()}</option>`
  select.innerHTML += option;
}

// Add Event Listener to Button
btn.addEventListener('click', () => {
  if (inputMass.value === '') {
    image.style.display = 'none';
    description.textContent = 'Mass is required';
    description.style.display = 'block';
    return;
  }

  if (select.value === 'none') {
    image.style.display = 'none';
    description.textContent = 'You did not choose a planet yet';
    description.style.display = 'block';
    return;
  }

  planetImage.style.width = '90%';
  planetImage.src = `./images/${select.value}.png`;

  const mass = planetMap.get(select.value) * Number(inputMass.value);
  description.innerHTML = `
    <span class="text">The weight of the object on </span>
    <span class="planet-name">${select.value.toUpperCase()}</span>
    <div class="mass">${mass.toFixed(2)} N</div>
  `;

  image.style.display = 'block';
  description.style.display = 'block';
});

