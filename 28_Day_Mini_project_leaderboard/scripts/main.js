// Generate Formated Date
const generateDate = () => {
  const dateStyle = { month: "short", day: "numeric", year: "numeric" };
  const timeStyle = { hour: '2-digit', minute: '2-digit', hour12: false };
  const date = new Date();
  const dateString =
    date.toLocaleDateString("en", dateStyle)
    + ' '
    + date.toLocaleTimeString("en", timeStyle);
  return dateString;
}

// Player Class
class Player {
  constructor(firstName, lastName, country, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.score = score;
    this.date = generateDate();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  add5() {
    if (this.score >= 95) {
      this.score = 100;
    } else {
      this.score += 5;
    }
  }

  subtract5() {
    if (this.score <= 5) {
      this.score = 0;
    } else {
      this.score -= 5;
    }
  }
}

// Global Variables
const body = document.body;
const playerWrapper = body.querySelector('.player-wrapper');
const btnAddPlayer = body.querySelector('#add-player');
const message = body.querySelector('.message');
const firstNameInput = body.querySelector('#first-name');
const lastNameInput = body.querySelector('#last-name');
const countryInput = body.querySelector('#country');
const scoreInput = body.querySelector('#score');

// Array Player
const players_array = [];
const player1 = new Player('Martha', 'Yohanes', 'Finland', 85);
const player2 = new Player('David', 'Smith', 'United Kingdom', 80);
const player3 = new Player('John', 'Smith', 'USA', 90);
players_array.push(player1);
players_array.push(player2);
players_array.push(player3);

// Sort Players
const sortPlayers = () => {
  players_array.sort((a, b) => b.score - a.score);
}

// Render Player List
function renderPlayerList() {
  sortPlayers();
  playerWrapper.innerHTML = '';
  players_array.forEach((player, index) => {
    const div = document.createElement('div');
    div.classList.add('player');
    // div.setAttribute('id', `player-${index}`);
    div.innerHTML = `
      <div class="name-date-wrapper">
        <div class="name">${player.getFullName()}</div>
        <div class="date">${player.date}</div>
      </div>
      <div class="country">${player.country}</div>
      <div class="score">${player.score}</div>
      <div class="btn-wrapper">
        <button class="delete">Del</button>
        <button class="add5">+5</button>
        <button class="subtract5">-5</button>
      </div>
    `;

    // Btn Add
    const btnAdd5 = div.querySelector('.add5');
    btnAdd5.addEventListener('click', () => {
      players_array[index].add5();
      renderPlayerList();
    });

    // Btn Subtract
    const btnSubtract5 = div.querySelector('.subtract5');
    btnSubtract5.addEventListener('click', () => {
      players_array[index].subtract5();
      renderPlayerList();
    });

    // Btn Delete
    const btnDelete = div.querySelector('.delete');
    btnDelete.addEventListener('click', () => {
      players_array.splice(index, 1);
      renderPlayerList();
    });

    playerWrapper.append(div);
  });
}

const addPlayer = () => {
  const firstNameText = firstNameInput.value.trim();
  const lastNameText = lastNameInput.value.trim();
  const countryText = countryInput.value.trim();
  const scoreText = scoreInput.value.trim();
  if (firstNameText === ''
    || lastNameText === ''
    || countryText === ''
    || scoreText === ''
  ) {
    message.textContent = 'All fields are required';
    return;
  }

  if (isNaN(Number(scoreText))) {
    message.textContent = 'Score value must be a number';
    return;
  }

  const scoreNumber = Number.parseInt(scoreText);
  const newPlayer = new Player(firstNameText, lastNameText, countryText, scoreNumber);
  players_array.push(newPlayer);

  // Reset Input value
  firstNameInput.value = '';
  lastNameInput.value = '';
  countryInput.value = '';
  scoreInput.value = '';

  message.textContent = '';
  renderPlayerList();
}

// Starts
btnAddPlayer.addEventListener('click', addPlayer);
message.textContent = '';
renderPlayerList();
