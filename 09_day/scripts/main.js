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