// General Variables
const authorTitles = asabenehChallenges2020.author.titles;
const technologies = asabenehChallenges2020.keywords;
const body = document.body;
const icon = body.querySelector('.icon');
const title = body.querySelector('.title');
const technologyNode = body.querySelector('.technology');

// Random Hex Color Generator
const randomHexColor = () => {
  let hex_color = '#';
  for (let j = 0; j < 3; j++) {
    const randomHexa = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    hex_color += randomHexa.toUpperCase()
  };
  return hex_color;
}

// Animation for Title
let index = 1;
setInterval(() => {
  icon.style.opacity = '0';
  title.style.opacity = '0';
  title.style.left = '-50px';

  icon.textContent = authorTitles[index][0];
  title.textContent = authorTitles[index][1];

  setTimeout(() => {
    title.style.opacity = '1';
  }, 500);

  setTimeout(() => {
    icon.style.opacity = '1';
    title.style.left = '0';
  }, 1000);

  if (index === authorTitles.length - 1) {
    index = 0
  } else {
    index += 1;
  }
}, 3000)


// Animation for Technologies
setInterval(() => {
  const random = Math.floor(Math.random() * technologies.length);
  const newTechnology = technologies[random];

  // Add fade out effect
  technologyNode.style.opacity = 0;

  // Wait for fade out to complete
  setTimeout(() => {
    // Change text content and color
    technologyNode.style.color = randomHexColor();
    technologyNode.textContent = newTechnology;

    // Add fade in effect
    technologyNode.style.opacity = 1;
  }, 1000);

}, 3000)

// Start
technologyNode.style.color = randomHexColor();
technologyNode.textContent = technologies[0];
// icon.textContent = authorTitles[0][0];
// title.textContent = authorTitles[0][1];