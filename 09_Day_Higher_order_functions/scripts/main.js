// Exercises: Level 1
console.log('===================Exercises Level 1===================');

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

console.log("\n[Number 1]");
// 1. Explain the difference between **_forEach, map, filter, and reduce_**.
console.log('> forEach()');
console.log('This method is used to iterate over an array and execute a function for each element in the array. It doesn\'t return a new array and does not modifity the original array.');
console.log('Syntax: array.forEach(function(currentValue, index, array){...});');

console.log('> map()');
console.log('This method is used to create a new array by transforming each element in the original array. It returns a new array with the same length as the original array');
console.log('Syntax: const newArray = array.map(function(currentValue, index, array){...});');

console.log('> filter()');
console.log('This method is used to create array a new array with all elements that pass the test implemented by the provided function. It returns a new array with fewer elements that the original array.');
console.log('Syntax: const newArray = array.filter(function(currentValue, index, array){...});');

console.log('> reduce()');
console.log('This method is used to reduce the elements of an array to a single value by applying a function that accumulates the values. It returns a single value.');
console.log('Syntax: const value = array.reduce(function(accumulator, currentValue, currentIndex, array){...}, initialValue);');

console.log("\n[Number 2]");
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
let arr = [1, 2, 3, 4, 5];

console.log('> forEach()');
let callback = (item, index, array) => {
    console.log(`[${index}] ${item} - ${array[index]}`);
}
arr.forEach(callback);

console.log('> map()');
callback = (item, index, array) => {
    return item * array[index];
}
let newArr = arr.map(callback);
console.log(newArr);

console.log('> filter()');
callback = (item, index, array) => {
    return item + array[index] >= 5;
}
newArr = arr.filter(callback);
console.log(newArr);

console.log('> reduce()');
callback = (acc, item, index, array) => {
    return acc += item / array[index];
}
let value = arr.reduce(callback, 0);
console.log(value);

console.log("\n[Number 3]");
// 3. Use **_forEach_** to console.log each country in the countries array.
countries.forEach(item => console.log(item));

console.log("\n[Number 4]");
// 4. Use **_forEach_** to console.log each name in the names array.
names.forEach(element => console.log(element));

console.log("\n[Number 5]");
// 5. Use **_forEach_** to console.log each number in the numbers array.
numbers.forEach(item => console.log(item));

console.log("\n[Number 6]");
// 6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
newArr = countries.map(item => item.toUpperCase());
console.log(newArr);

console.log("\n[Number 7]");
// 7. Use **_map_** to create an array of countries length from countries array.
newArr = countries.map(item => item.length);
console.log(newArr);

console.log("\n[Number 8]");
// 8. Use **_map_** to create a new array by changing each number to square in the numbers array
newArr = numbers.map(item => item ** 2);
console.log(newArr);

console.log("\n[Number 9]");
// 9. Use **_map_** to change to each name to uppercase in the names array
newArr = names.map(item => item.toUpperCase());
console.log(newArr);

console.log("\n[Number 10]");
// 10. Use **_map_** to map the products array to its corresponding prices.
newArr = products.map(item => item.price);
console.log(newArr);

console.log("\n[Number 11]");
// 11. Use **_filter_** to filter out countries containing **_land_**.
newArr = countries.filter(item => item.toLowerCase().includes('land'));
console.log(newArr);

console.log("\n[Number 12]");
// 12. Use **_filter_** to filter out countries having six character.
newArr = countries.filter(item => item.length === 6);
console.log(newArr);

console.log("\n[Number 13]");
// 13. Use **_filter_** to filter out countries containing six letters and more in the country array.
newArr = countries.filter(item => item.length >= 6);
console.log(newArr);

console.log("\n[Number 14]");
// 14. Use **_filter_** to filter out country start with 'E';
newArr = countries.filter(item => item[0] === 'E');
console.log(newArr);

console.log("\n[Number 15]");
// 15. Use **_filter_** to filter out only prices with values.
newArr = products.filter(item => typeof item.price === 'number');
console.log(newArr);

console.log("\n[Number 16]");
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
    return arr.filter(item => typeof item === 'string');
}
console.log(getStringLists(['1', 2, '3', '4', 'Five', true, {}]));

console.log("\n[Number 17]");
// 17. Use **_reduce_** to sum all the numbers in the numbers array.
value = numbers.reduce((acc, item) => acc += item, 0);
console.log(value);

console.log("\n[Number 18]");
// 18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
callback = (acc, item, index, array) => {
    if (index !== array.length - 1) {
        return acc += `${item}, `;
    }
    return acc += `and ${item} are north European countries`;
}
value = countries.reduce(callback, '');
console.log(value);

console.log("\n[Number 19]");
// 19. Explain the difference between **_some_** and **_every_**
console.log('> some()');
console.log('This method is used to check if at least one element in an array meets a specified condition. It return a boolean value `true` if any element passes the test implemented by the provided function, and `false` otherwise.');
console.log('Syntax: const result = array.some(function(currentValue, index, array){...});');

console.log('> every()');
console.log('This method is used to check if all elements in an array meet a specified condition. It returns a boolean value true if all elements pass the test implemented by the provided function, and false otherwise.');
console.log('Syntax: const result = array.every(function(currentValue, index, array){...});');

console.log("\n[Number 20]");
// 20. Use **_some_** to check if some names' length greater than seven in names array
value = names.some(item => item.length > 7);
console.log(value);

console.log("\n[Number 21]");
// 21. Use **_every_** to check if all the countries contain the word land
value = countries.every(item => item.toLowerCase().includes('land'));
console.log(value);

console.log("\n[Number 22]");
// 22. Explain the difference between **_find_** and **_findIndex_**.
console.log('> find()');
console.log('This method is used to find the first element in an array that meets the specified condition and returns its value. If no element found, it returns `undefined`.');
console.log('Syntax: const result = array.find(function(currentValue, index, array){...});');

console.log('> findIndex()');
console.log('The findIndex() method is used to find the index of the first element in an array that meets a specified condition and returns its index. If no element is found, it returns -1.');
console.log('Syntax: const result = array.findIndex(function(currentValue, index, array){...});');

console.log("\n[Number 23]");
// 23. Use **_find_** to find the first country containing only six letters in the countries array
let result = countries.find(item => item.length === 6);
console.log(result);

console.log("\n[Number 24]");
// 24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
result = countries.findIndex(item => item.length === 6);
console.log(result);

console.log("\n[Number 25]");
// 25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
result = countries.findIndex(item => item === 'Norway');
console.log(result);

console.log("\n[Number 26]");
// 26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.
result = countries.findIndex(item => item === 'Russia');
console.log(result);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
value = products
    .map(item => item.price)
    .filter(item => typeof item === 'number')
    .reduce((acc, item) => acc += item, 0);
console.log(`Total Price of Products: ${value}`);

console.log("\n[Number 2]");
// 2. Find the sum of price of products using only reduce reduce(callback))
value = products.reduce((acc, item) => {
    if (typeof item.price === 'number') {
        return acc += item.price
    }
    return acc;
}, 0);
console.log(`Sum of Products: ${value}`);

console.log("\n[Number 3]");
// 3. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries) => {
    const categories = [
        { name: 'land', value: [] },
        { name: 'ia', value: [] },
        { name: 'island', value: [] },
        { name: 'stan', value: [] }
    ]

    countries.forEach(country => {
        categories.forEach(category => {
            if (country.toLowerCase().includes(category.name)) {
                category['value'].push(country)
            }
        })
    });

    return categories;
}

console.log(categorizeCountries(countries));

console.log("\n[Number 4]");
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const numLetterInCountry = (countries) => {
    const arr = [
        // {
        //     letter: 'i',
        //     count: 1
        // }
    ]

    let arrayOfCountryFirstLetter = countries.map(country => country[0].toLowerCase());
    // Remove duplicate letter
    arrayOfCountryFirstLetter = arrayOfCountryFirstLetter.filter((letter, index) => {
        return arrayOfCountryFirstLetter.indexOf(letter) === index;
    });

    arrayOfCountryFirstLetter.forEach(letter => {
        let count = countries.reduce((acc, country) => {
            if (country[0].toLowerCase() === letter) {
                return acc += 1;
            }
            return acc;
        }, 0);

        arr.push({ letter: letter, count: count });
    });

    return arr;
}
console.log(numLetterInCountry(countries));

console.log("\n[Number 5]");
// 5. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = (countries) => {
    return countries.filter((item, index) => index < 10).map(item => item.name);
}
console.log(getFirstTenCountries(countries_data));

console.log("\n[Number 6]");
// 6. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
const etLastTenCountries = (countries) => {
    return countries
        .filter((item, index) => (index >= countries.length - 10) && (index < countries.length))
        .map(item => item.name)
}
console.log(etLastTenCountries(countries_data));

console.log("\n[Number 7]");
// 7. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
console.log(numLetterInCountry(countries_data.map(item => item.name)));

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
console.log('Sorted By Name');
const sortedCountriesDataByName = countries_data
    .map((item) => item)
    .sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
console.log(sortedCountriesDataByName.map(item => item.name).join(', '));

console.log('Sorted By Capital');
const sortedCountriesDataByCapital = countries_data
    .map((item) => item)
    .sort((a, b) => {
        if (a.capital < b.capital) {
            return -1;
        }
        if (a.capital > b.capital) {
            return 1;
        }
        return 0;
    });
console.log(sortedCountriesDataByCapital.map(item => item.capital).join(', '));

console.log('Sorted By Population');
const sortedCountriesDataByPopulation = countries_data
    .map((item) => item)
    .sort((a, b) => b.population - a.population);
console.log(sortedCountriesDataByPopulation);

console.log("\n[Number 2]");
// 2. \*\*\* Find the 10 most spoken languages:
/*
    ````js
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))
    [
        {country: 'English',count:91},
        {country: 'French',count:45},
        {country: 'Arabic',count:25},
        {country: 'Spanish',count:24},
        {country:'Russian',count:9},
        {country:'Portuguese', count:9},
        {country:'Dutch',count:8},
        {country:'German',count:7},
        {country:'Chinese',count:5},
        {country:'Swahili',count:4}
    ]

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
    [
        {country: 'English',count: 91},
        {country: 'French',count: 45},
        {country: 'Arabic',count: 25},
    ]

    ````
*/
const mostSpokenLanguages = (countries, n) => {
    
    const countSpokenLanguages = (countries) => {
        // Get all spoken languages of all countries
        const arraySpokenLanguages = countries.reduce((acc, item) => [...acc, ...item.languages], [])
        // Remove duplicate languages
        const uniqueArraySpokenLanguages = arraySpokenLanguages.filter((item, index) => {
            return arraySpokenLanguages.indexOf(item) === index;
        });
        // Create array of object spoken languages
        const arrayOfObjectSL = uniqueArraySpokenLanguages.map(language => {
            return { country: language, count: 0 }
        })
        // Counting
        arrayOfObjectSL.forEach(obj => {
            obj.count = arraySpokenLanguages.reduce((acc, item) => {
                if (item === obj.country) {
                    return acc += 1
                }
                return acc
            }, 0)
        })
        // Sort By Count
        arrayOfObjectSL.sort((a, b) => b.count - a.count)

        return arrayOfObjectSL
    }

    return countSpokenLanguages(countries).slice(0, n)
}

console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));

console.log("\n[Number 3]");
// 3. \*\*\* Use countries_data.js file create a function which create the ten most populated countries
/*
    ````js
    console.log(mostPopulatedCountries(countries, 10))
    [
        {country: 'China', population: 1377422166},
        {country: 'India', population: 1295210000},
        {country: 'United States of America', population: 323947000},
        {country: 'Indonesia', population: 258705000},
        {country: 'Brazil', population: 206135893},
        {country: 'Pakistan', population: 194125062},
        {country: 'Nigeria', population: 186988000},
        {country: 'Bangladesh', population: 161006790},
        {country: 'Russian Federation', population: 146599183},
        {country: 'Japan', population: 126960000}
    ]

    console.log(mostPopulatedCountries(countries, 3))
    [
        {country: 'China', population: 1377422166},
        {country: 'India', population: 1295210000},
        {country: 'United States of America', population: 323947000}
    ]
    ````
*/
const mostPopulatedCountries = (countries, n) => {
    // Sorting By Population
    const sortedCountry = countries
        .map(item => {
            return { country: item.name, population: item.population}
        })
        .sort((a, b) => b.population - a.population)
    return sortedCountry.slice(0, n)
}

console.log(mostPopulatedCountries(countries_data, 10))
console.log(mostPopulatedCountries(countries_data, 3))

console.log("\n[Number 4]");
// 4. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
/*
    ```js
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range() // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ```

    ```sh
    console.log(statistics.describe())
    Count: 25
    Sum:  744
    Min:  24
    Max:  38
    Range:  14
    Mean:  30
    Median:  29
    Mode:  (26, 5)
    Variance:  17.5
    Standard Deviation:  4.2
    Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ```
*/
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: function() {
        return ages.length
    },
    sum: function() {
        return ages.reduce((acc, num) => acc += num, 0)
    },
    min: function() {
        return ages.reduce((acc, num) => {
            if (acc > num) {
                return num
            }
            return acc
        })
    },
    max: function() {
        return ages.reduce((acc, num) => {
            if (acc < num) {
                return num
            }
            return acc
        })
    },
    range: function() {
        return this.max() - this.min()
    },
    mean: function() {
        return this.sum() / ages.length
    },
    median: function() {
        // Sorted ASC
        const sortedAges = ages.map(item => item).sort();
        const middleIndex = Math.floor(sortedAges.length / 2);
        if (sortedAges.length % 2 === 0) {
            return (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
        } else {
            return sortedAges[middleIndex];
        }
    },
    mode: function() {
        // Remove duplicate value
        const uniqueAges = ages.filter((item, index) => ages.indexOf(item) === index);
        // Create array of object ages
        const arrayOfObjectAges = uniqueAges.map(age => {
            return { mode: age, count: 0 }
        })
        // Counting
        arrayOfObjectAges.forEach(obj => {
            obj.count = ages.reduce((acc, item) => {
                if (item === obj.mode) {
                    return acc += 1
                }
                return acc
            }, 0)
        })
        // Sort By Count
        arrayOfObjectAges.sort((a, b) => b.count - a.count)

        return arrayOfObjectAges[0]
    },
    var: function() {
        // Calculate the mean of the array.
        // Subtract the mean from each element in the array.
        // Square each difference and store the result in a new array.
        const squaredSubtractedAges = ages.map(age => (this.mean() - age) ** 2)
        // Calculate the mean of the new array of squared differences.
        const sum = squaredSubtractedAges.reduce((acc, num) => acc += num, 0)
        // The result is the variance.
        return sum / squaredSubtractedAges.length
    },
    std: function() {
        // Find the mean of the data set
        // Find the difference between each data point and the mean
        // Square the differences and find their average
        // Take the square root of the result
        return Math.sqrt(this.var())
    },
    freqDist: function() {
        const frequency = {}
        ages.forEach(age => {
            frequency[age] = frequency[age] + 1 || 1;
        })

        const result = []
        for (const key in frequency) {
            result.push([frequency[key], parseInt(key)])
        }

        return result.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0])
    },
    describe: function() {
        console.log(`Count: ${this.count()}`);
        console.log(`Sum: ${this.sum()}`);
        console.log(`Min: ${this.min()}`);
        console.log(`Max: ${this.max()}`);
        console.log(`Range: ${this.range()}`);
        console.log(`Mean: ${this.mean()}`);
        console.log(`Median: ${this.median()}`);
        console.log(`Mode: (${this.mode().mode}, ${this.mode().count})`);
        console.log(`Variance: ${this.var().toFixed(1)}`);
        console.log(`Standard Deviation: ${this.std().toFixed(1)}`);
        console.log(`Frequency Distribution: [${this.freqDist().map(item => `(${(item[0] * 4).toFixed(1)}, ${item[1]})`).join(', ')}]`);
    }
}

statistics.describe()
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]