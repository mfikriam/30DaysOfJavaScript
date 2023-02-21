// Global Variable
const body = document.body;
const countriesContainer = body.querySelector('.countries-container');
const searchNode = body.querySelector('input[id="search"]');
const subtitleNode = body.querySelector('.subtitle');
const searchCriteriaNode = body.querySelector('.search-criteria');
const btnSortByName = body.querySelector('button[id="name"]');
const btnSortByCapital = body.querySelector('button[id="capital"]');
const btnSortByPopulation = body.querySelector('button[id="population"]');

// Render Countries List
const renderCountriesList = (countriesArray) => {
  countriesContainer.innerHTML = '';
  countriesArray.forEach((country) => {
    countriesContainer.innerHTML += `
      <div class="country-wrapper">
        <img src="${country.flag}" alt="${country.name}-flag">
        <h5 class="country-name">${country.name}</h5>
        <div class="country-description">
          ${(country.capital !== undefined) ? `<p><b>Capital:</b> ${country.capital}</p>` : ''}
          <p>
            <b>${country.languages.length === 1 ? 'Language' : 'Languages'}:</b> ${country.languages.join(', ')}
          </p>
          <p><b>Population:</b> ${country.population.toLocaleString('en-US')}</p>
        </div>
      </div>
    `;
  });
}

// Show Countries
const showCountries = ({
  sortByName = false,
  sortByCapital = false,
  sortByPopulation = false,
}) => {
  if (sortByName) {
    if (sortByName === 'ASC') {
      countries.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0
      });
    }

    if (sortByName === 'DESC') {
      countries.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0
      });
    }
  }

  if (sortByCapital) {
    if (sortByCapital === 'ASC') {
      countries.sort((a, b) => {
        if (a.capital < b.capital) return -1;
        if (a.capital > b.capital) return 1;
        return 0
      });
    }

    if (sortByCapital === 'DESC') {
      countries.sort((a, b) => {
        if (a.capital < b.capital) return 1;
        if (a.capital > b.capital) return -1;
        return 0
      });
    }
  }

  if (sortByPopulation) {
    if (sortByPopulation === 'ASC') {
      countries.sort((a, b) => a.population - b.population);
    }

    if (sortByPopulation === 'DESC') {
      countries.sort((a, b) => b.population - a.population);
    }
  }

  // Contains Word
  searchCriteriaNode.textContent = '';
  const searchText = searchNode.value.toLowerCase();
  if (searchText === '') {
    renderCountriesList(countries);
  } else {
    const filteredCountries = countries.filter((country) => {
      const name = country.name.toLowerCase();
      const languages = country.languages.join(' ').toLowerCase();
      if (country.capital !== undefined) {
        const capital = country.capital.toLowerCase();
        return name.includes(searchText) || capital.includes(searchText) || languages.includes(searchText);
      }
      return name.includes(searchText) || languages.includes(searchText);
    });

    searchCriteriaNode.textContent = `${filteredCountries.length} countries satisfied the search criteria`;
    renderCountriesList(filteredCountries);
  }
}

// Search Input Event Listener
searchNode.addEventListener('input', () => {
  showCountries({});
});

// Reset Other Button
const resetOtherButton = (btn) => {
  const btnNodeArray = [btnSortByName, btnSortByCapital, btnSortByPopulation];
  btnNodeArray.forEach((btnNode) => {
    if (btnNode !== btn) {
      btnNode.classList.remove('active');
      btnNode.innerHTML = btnNode.getAttribute('id');
    }
  });
};

// Button Sort By Name Event Listener
btnSortByName.addEventListener('click', () => {
  resetOtherButton(btnSortByName);
  if (btnSortByName.classList.contains('active')) {
    // ASC
    showCountries({ sortByName: 'ASC' });
    btnSortByName.innerHTML = `name <i class="fas fa-sort-alpha-down"></i>`;
  } else {
    // DESC
    showCountries({ sortByName: 'DESC' });
    btnSortByName.innerHTML = `name <i class="fas fa-sort-alpha-up"></i>`;
  }
  btnSortByName.classList.toggle('active');
});

// Button Sort By Capital Event Listener
btnSortByCapital.addEventListener('click', () => {
  resetOtherButton(btnSortByCapital);
  if (btnSortByCapital.classList.contains('active')) {
    // ASC
    showCountries({ sortByCapital: 'ASC' });
    btnSortByCapital.innerHTML = `capital <i class="fas fa-sort-alpha-down"></i>`;
  } else {
    // DESC
    showCountries({ sortByCapital: 'DESC' });
    btnSortByCapital.innerHTML = `capital <i class="fas fa-sort-alpha-up"></i>`;
  }
  btnSortByCapital.classList.toggle('active');
});

// Button Sort By Population Event Listener
btnSortByPopulation.addEventListener('click', () => {
  resetOtherButton(btnSortByPopulation);
  if (btnSortByPopulation.classList.contains('active')) {
    // ASC
    showCountries({ sortByPopulation: 'ASC' });
    btnSortByPopulation.innerHTML = `population <i class="fas fa-sort-alpha-down"></i>`;
  } else {
    // DESC
    showCountries({ sortByPopulation: 'DESC' });
    btnSortByPopulation.innerHTML = `population <i class="fas fa-sort-alpha-up"></i>`;
  }
  btnSortByPopulation.classList.toggle('active');
});

// Starts
subtitleNode.textContent = `Currently, we have ${countries.length} countries`;
showCountries({ sortByName: 'ASC' });
// console.log(btnSortByName);