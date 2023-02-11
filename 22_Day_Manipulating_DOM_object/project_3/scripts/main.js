// Exercises: Level 3
console.log('===================Exercises Level 3===================');

console.log(asabenehChallenges2020)

// Centering Content
const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.fontFamily = 'Roboto';

// Random Hex Color Generator
const randomHexColor = () => {
  let hex_color = '#';
  for (let j = 0; j < 3; j++) {
    const randomHexa = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
    hex_color += randomHexa.toUpperCase()
  };
  return hex_color;
}

// Adding Header 1
const h1 = document.createElement('h1');
h1.innerHTML = `
  ${asabenehChallenges2020.challengeTitle} in 
  <span>${asabenehChallenges2020.challengeYear}</span>
`;
h1.style.fontWeight = '450';
wrapper.appendChild(h1);

// Add style to word '2000'
const word2000 = h1.querySelector('span');
word2000.style.fontSize = '50px';
setInterval(() => word2000.style.color = randomHexColor(), 1000);

// Adding Header 2
const h2 = document.createElement('h2');
h2.innerHTML = asabenehChallenges2020.challengeSubtitle;
h2.style.fontWeight = 'normal';
h2.style.textDecoration = 'underline';
wrapper.appendChild(h2);

// Adding Date
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
wrapper.appendChild(date);

// Adding List Challanges
const ul = document.createElement('ul');
const challenges = asabenehChallenges2020.challenges;
challenges.forEach(({ name, topics, status, githubUrl }) => {
  const li = document.createElement('li');
  const listChallengeTitle = name.split(' ').slice(3).join(' ');
  const link = githubUrl ? `href='${githubUrl}'` : '';
  li.innerHTML = `
    <span class='left-aligned'>
      <a ${link}>${name}</a>
    </span>

    <span class='center-aligned'>
      <details>
        <summary>${listChallengeTitle}</summary>
        <p>&nbsp;</p>
        ${topics.map((topic) => `<p>${topic}</p>`).join('')}
      </details>
    </span>

    <span class='right-aligned'>${status}</span>
  `;

  if (status === 'Done') {
    li.classList.add('done');
  }
  if (status === 'Ongoing') {
    li.classList.add('ongoing');
  }
  if (status === 'Coming') {
    li.classList.add('coming');
  }
  ul.appendChild(li);
});
wrapper.appendChild(ul);

// Modify List Color
const doneList = ul.querySelectorAll('.done');
const ongoingList = ul.querySelectorAll('.ongoing');
const comingList = ul.querySelectorAll('.coming');
const red = '#f25c54';
const green = '#6a994e';
const yellow = '#ffd60a';
doneList.forEach((item) => item.style.background = green);
ongoingList.forEach((item) => item.style.background = yellow);
comingList.forEach((item) => item.style.background = red);

// Modify List Box
ul.style.listStyle = 'none';
ul.style.fontSize = '14px';
const list = ul.querySelectorAll('li');
const width = h1.offsetWidth;

list.forEach((item) => {
  item.style.padding = '15px';
  item.style.marginTop = '2px';
  item.style.marginBottom = '2px';
  item.style.width = `${width}px`;
  item.style.display = 'flex';
  item.style.flexDirection = 'row';
  item.style.justifyContent = 'space-between';
});

// Modify List Align
const leftAligned = ul.querySelectorAll('.left-aligned');
const centerAligned = ul.querySelectorAll('.center-aligned');
const righAligned = ul.querySelectorAll('.right-aligned');
leftAligned.forEach((text) => {
  text.style.textAlign = 'left';
  text.style.width = '50%';
});
centerAligned.forEach((text) => {
  text.style.textAlign = 'left';
  text.style.width = '30%';
});
righAligned.forEach((text) => {
  text.style.textAlign = 'right';
  text.style.width = '20%';
});

// Modify Paragraph
const paragraphsListNode = ul.querySelectorAll('p');
paragraphsListNode.forEach((text) => {
  text.style.margin = '0';
});

// Adding Author's Name
const author = asabenehChallenges2020.author;
const authorNameNode = document.createElement('h2');
authorNameNode.textContent = author.firstName + ' ' + author.lastName;
authorNameNode.style.marginTop = '0';
wrapper.appendChild(authorNameNode);

// Adding Author's Name Social Links
const authorSocialLinksNode = document.createElement('h2');
authorSocialLinksNode.classList.add('social-links')
author.socialLinks.forEach(({ fontawesomeIcon, url }) => {
  authorSocialLinksNode.innerHTML += `<a href='${url}'>${fontawesomeIcon}</a>`;
});
wrapper.appendChild(authorSocialLinksNode);

// Modifying Author's Name Social Links
authorNameNode.style.marginBottom = '5px';
authorSocialLinksNode.style.marginTop = '0';
const fontAwesome = authorSocialLinksNode.querySelectorAll('i');
fontAwesome.forEach((icon) => {
  icon.style.color = 'black';
  icon.style.marginRight = '5px';
});

// Adding Author's Bio
const authorBioNode = document.createElement('p');
authorBioNode.textContent = author.bio;
authorBioNode.style.width = `${width}px`;
authorBioNode.style.textAlign = 'center';
wrapper.appendChild(authorBioNode);
