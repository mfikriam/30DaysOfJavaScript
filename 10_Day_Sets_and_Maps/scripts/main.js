// Exercises: Level 1
console.log('===================Exercises Level 1===================');

const countries = ['Finland', 'Sweden', 'Norway']

console.log("\n[Number 1]");
// 1. create an empty set
const test = new Set()
console.log(test);

console.log("\n[Number 2]");
// 2. Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
    test.add(i)
}
console.log(test);

console.log("\n[Number 3]");
// 3. Remove an element from a set
test.delete(10)
console.log(test);

console.log("\n[Number 4]");
// 4. Clear a set
test.clear()
console.log(test);

console.log("\n[Number 5]");
// 5. Create a set of 5 string elements from array
const arrString = ['one', 'two', 'three', 'four', 'five']
const setString = new Set(arrString)
console.log(setString);

console.log("\n[Number 6]");
// 6. Create a map of countries and number of characters of a country
const mapCountries = new  Map()
countries.forEach(country => mapCountries.set(country, country.length))
console.log(mapCountries);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

console.log("\n[Number 1]");
// 1. Find a union b
const union = new Set([...a, ...b])
console.log(union);

console.log("\n[Number 2]");
// 2. Find a intersection b
const intersection = new Set(a.filter(num => b.includes(num)))
console.log(intersection);

console.log("\n[Number 3]");
// 3. Find a substract with b
const substract = new Set(a.filter(num => !b.includes(num)))
console.log(substract);

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. How many languages are there in the countries object file.
const languages = countries_data.reduce((acc, country) => [...acc, ...country.languages], [])
const uniqueLanguages = new Set(languages)
console.log(uniqueLanguages.size);

console.log("\n[Number 2]");
// 2. \*\*\* Use the countries data to find the 10 most spoken languages:
/*
    ```js
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))
    [
        { English: 91 },
        { French: 45 },
        { Arabic: 25 },
        { Spanish: 24 },
        { Russian: 9 },
        { Portuguese: 9 },
        { Dutch: 8 },
        { German: 7 },
        { Chinese: 5 },
        { Swahili: 4 },
        { Serbian: 4 }
    ]

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
    [
        {English:91},
        {French:45},
        {Arabic:25}
    ]
    ```
*/

const mostSpokenLanguages = (countries, n) => {
    const languagesArray = countries.reduce((acc, country) => [...acc, ...country.languages], [])
    const languageSet = new Set(languages)

    const mostSpokenLanguagesArray = []
    for (const language of languageSet) {
        const countLang = languagesArray.filter(item => item === language).length
        mostSpokenLanguagesArray.push({ [language]: countLang })
    }

    // Sorting
    mostSpokenLanguagesArray.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])

    return mostSpokenLanguagesArray.slice(0, n)
}

console.log(mostSpokenLanguages(countries_data, 10))
console.log(mostSpokenLanguages(countries_data, 3))

