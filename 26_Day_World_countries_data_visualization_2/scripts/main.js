// Add Total Country
const body = document.body;
const totalCountries = body.querySelector('h4');
totalCountries.textContent = `Total Number of countries: ${countries.length}`;

// GLobal Node
const countriesWrapper = body.querySelector('.countries-wrapper');
const h3 = body.querySelector('h3');

// Add Countries
const addContries = (countriesArray) => {
  countriesWrapper.innerHTML = '';

  // Add Countries
  countriesArray.forEach((country) => {
    const div = document.createElement('div');
    div.textContent = country;
    div.classList.add('country');
    countriesWrapper.append(div);
  });
}

// Show Countries
const showCountries = ({ sort = false, start = false, contains = false }) => {
  h3.innerHTML = '';

  if (sort) {
    if (sort === 'ASC') {
      // SORT ASC
      const filtedCountries = countries.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
      });
      addContries(filtedCountries);
    }

    if (sort === 'DESC') {
      // SORT DESC
      const filtedCountries = countries.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0
      });
      addContries(filtedCountries);
    }
  }

  if (start) {
    // START WITH
    const startLC = start.toLowerCase();
    const filtedCountries = countries.filter((country) => country.toLowerCase().startsWith(startLC));
    addContries(filtedCountries);

    h3.innerHTML = `
      Countries start with 
      <span class="letters">${start}</span> are 
      <span class="count">${filtedCountries.length}</span>.
    `;
  }

  if (contains) {
    // COINTAINS WORD
    const containsLC = contains.toLowerCase();
    const filtedCountries = countries.filter((country) => country.toLowerCase().includes(containsLC));
    addContries(filtedCountries);

    h3.innerHTML = `
      Countries containing 
      <span class="letters">${contains}</span> are 
      <span class="count">${filtedCountries.length}</span>.
    `;
  }
};

// Buttons
const btnStartingWord = body.querySelector('#starting-word');
const btnAnyWord = body.querySelector('#any-word');
const btnSort = body.querySelector('#sorting');

// Input
const searchInput = body.querySelector('input[type="text"]');

// Button Starting Word Event Listener
btnStartingWord.addEventListener('click', () => {
  if (!btnStartingWord.classList.contains('active')) {
    btnAnyWord.classList.remove('active');

    const searchText = searchInput.value;
    showCountries({ start: searchText });
  }

  btnStartingWord.classList.toggle('active');
});


// Button Any Word Event Listener
btnAnyWord.addEventListener('click', () => {
  if (!btnAnyWord.classList.contains('active')) {
    btnStartingWord.classList.remove('active');

    const searchText = searchInput.value;
    showCountries({ contains: searchText });
  }

  btnAnyWord.classList.toggle('active');
});

// Button Sort Event Listener
btnSort.addEventListener('click', () => {
  const searchText = searchInput.value;
  if (searchText === '') {
    if (!btnSort.classList.contains('active')) {
      showCountries({ sort: 'DESC' });
      btnSort.textContent = 'DESC';
    } else {
      showCountries({ sort: 'ASC' });
      btnSort.textContent = 'ASC';
    }
  } else {
    if (!btnSort.classList.contains('active')) {
      if (btnStartingWord.classList.contains('active')) {
        showCountries({ start: searchText, sort: 'DESC' });
      } else if (btnAnyWord.classList.contains('active')) {
        showCountries({ contains: searchText, sort: 'DESC' });
      } else {
        showCountries({ contains: searchText, sort: 'DESC' });
      }
      btnSort.textContent = 'DESC';
    } else {
      if (btnStartingWord.classList.contains('active')) {
        showCountries({ start: searchText, sort: 'ASC' });
      } else if (btnAnyWord.classList.contains('active')) {
        showCountries({ contains: searchText, sort: 'ASC' });
      } else {
        showCountries({ contains: searchText, sort: 'ASC' });
      }
      btnSort.textContent = 'ASC';
    }
  }

  btnSort.classList.toggle('active');
});

// Input Event Listener
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value;

  if (searchText === '') {
    if (btnSort.classList.contains('active')) {
      showCountries({ sort: 'DESC' });
    } else {
      showCountries({ sort: 'ASC' });
    }
  } else {
    if (btnStartingWord.classList.contains('active')) {
      showCountries({ start: searchText });
    } else if (btnAnyWord.classList.contains('active')) {
      showCountries({ contains: searchText });
    } else {
      showCountries({ contains: searchText });
    }
  }
});

// Starts
showCountries({ sort: 'ASC' });

// console.log(countries);