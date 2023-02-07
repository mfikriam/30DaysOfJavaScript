const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1
// console.log('===================Exercises Level 1===================');

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(country => {
//             console.group(country.name)
//             console.log(`Capital: ${country.capital}`)
//             console.log(`Language(s): ${country.languages.map(lang => lang.name).join(', ')}`)
//             console.log(`Population: ${country.population}`)
//             console.log(`Area: ${country.area}`)
//             console.groupEnd()
//         });
//     })
//     .catch(error => console.error(error))

// Exercises: Level 2
// console.log('\n');
// console.log('===================Exercises Level 2===================');

// 1. Print out all the cat names in to catNames variable.
const fetchCatsName = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        console.log('\n');
        console.log('===================Exercises Level 2===================');
        catNames = cats.map(cat => cat.name)
        console.log(catNames.join(', '));
    } catch (err) {
        console.error(err);
    }
}

fetchCatsName()

// Exercises: Level 3
// console.log("\n");
// console.log('===================Exercises Level 3===================');

// console.log("\n[Number 1]");
// 1. Read the cats api and find the average weight of cat in metric unit.
const findCatsAverageWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        console.log("\n");
        console.log('===================Exercises Level 3===================');
        console.log("\n[Number 1]");
        const catWeightMetric = cats.map(cat => {
            const name = cat.name
            const weightNum = cat.weight.metric.match(/\d+/g)
            const weightAverage = (weightNum[0] + weightNum[1]) / 2
            return { name, weightAverage }
        })
        console.log(catWeightMetric);
    } catch (err) {
        console.error(err);
    }
}

findCatsAverageWeight()

// 2. Read the countries api and find out the 10 largest countries
const findTenLargestCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log("\n[Number 2]");
        filteredCountries = countries
            .sort((a, b) => b.population - a.population)
            .map(country => {
                return { name: country.name, population: country.population }
            })
            .slice(0, 10)
        console.log(filteredCountries);
    } catch (err) {
        console.error(err);
    }
}

findTenLargestCountries()

// 3. Read the countries api and count total number of languages in the world used as officials.
const countLanguages = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log("\n[Number 3]");
        const languages = countries.reduce((acc, country) => {
            const lang = country.languages.map(item => item.name)
            return [...acc, ...lang]
        }, [])
        uniqueLanguages = new Set(languages)
        const objLanguages = [] // {name: 'English', count: 99}
        uniqueLanguages.forEach(lang => {
            objLanguages.push(
                {
                    name: lang,
                    count: languages.filter(item => item === lang).length
                }
            )
        });
        objLanguages.sort((a, b) => b.count - a.count)
        console.log(objLanguages);
    } catch (err) {
        console.error(err);
    }
}

countLanguages()