const body = document.body;

const header = body.querySelector('header');
const h2 = header.querySelector('h2');
const subtitle = header.querySelector('.subtitle');

const main = body.querySelector('main');
const wrapper = main.querySelector('.wrapper');
const graphButtons = main.querySelector('.graph-buttons');
const btnPopulation = main.querySelector('.population');
const btnLanguages = main.querySelector('.languages');
const graphTitle = main.querySelector('.graph-title');
const graphs = main.querySelector('.graphs');

// Find n Most Spoken Languages
const findMostSpokenLanguages = (countries_data, n) => {
  const languages = countries_data.reduce((acc, country) => [...acc, ...country.languages], []);
  uniqueLanguages = new Set(languages);
  const objLanguages = []; // {name: 'English', count: 99}
  uniqueLanguages.forEach(lang => {
    objLanguages.push(
      {
        name: lang,
        count: languages.filter(item => item === lang).length,
      },
    );
  });
  return objLanguages.sort((a, b) => b.count - a.count).slice(0, n);
}
const languages = findMostSpokenLanguages(countries_data, 10);

// Find n Most Populated Countries
const findMostPopulatedCountries = (countries_data, n) => {
  filteredCountries = countries_data
    .sort((a, b) => b.population - a.population)
    .map(country => {
      return { name: country.name, population: country.population };
    });
  return filteredCountries.slice(0, n);
}
const countries = findMostPopulatedCountries(countries_data, 10);
console.log(countries);

// Void Show Languages
const showLanguages = () => {
  graphTitle.textContent = '10 Most Spoken languages in the world';
  graphs.innerHTML = '';
  languages.forEach((lang) => {
    let id = lang.name.toLowerCase();
    id = id.replace(/[()]/g, ''); // remove parenthesis
    id = id.replace(/[\s]/g, '-'); // replace blank space with dash
    graphs.innerHTML += `
      <div class="graph-wrapper" id="stat-${id}">
        <div class="subject">${lang.name}</div>
        <div class="bar-wrapper">
          <div class="bar" style="width: ${lang.count}%;">
            &nbsp;
          </div>
        </div>
        <div class="count">${lang.count}</div>
      </div>
    `;
  });
}

// Void Show Populations
const showPopulations = () => {
  graphTitle.textContent = '10 Most populated countries in the world';
  graphs.innerHTML = '';

  // Add World Population
  const worldPopulation = countries_data.reduce((acc, country) => acc += country.population, 0);
  graphs.innerHTML += `
    <div class="graph-wrapper" id="stat-world">
      <div class="subject">World</div>
      <div class="bar-wrapper">
          <div class="bar" style="width: 100%;">
            &nbsp;
          </div>
        </div>
      <div class="count">${worldPopulation.toLocaleString('en-US')}</div>
    </div>
  `;

  countries.forEach((country) => {
    let id = country.name.toLowerCase();
    id = id.replace(/[()]/g, '');   // remove parenthesis
    id = id.replace(/[\s]/g, '-');  // replace blank space with dash
    const width = (country.population / worldPopulation) * 100;
    graphs.innerHTML += `
      <div class="graph-wrapper" id="stat-${id}">
        <div class="subject">${country.name}</div>
        <div class="bar-wrapper">
          <div class="bar" style="width: ${width}%;">
            &nbsp;
          </div>
        </div>
        <div class="count">${country.population.toLocaleString('en-US')}</div>
      </div>
    `;
  });
}

// Start
const totalCountries = countries_data.length;
subtitle.textContent = `Currently, we have ${totalCountries} countries`;
showLanguages();

// Add Event Listener
btnLanguages.addEventListener('click', () => showLanguages());
btnPopulation.addEventListener('click', () => showPopulations());