// Exercises: Level 1
console.log('===================Exercises Level 1===================');

const above_countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

console.log("\n[Number 1]");
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log('-Using For Loop-');
let str = ''
for (let i = 0; i <= 10; i++) {
    str += `${i} `
}
console.log(str);

console.log('-Using While Loop-');
str = ''
let i = 0
while (i <= 10) {
    str += `${i} `
    i++
}
console.log(str);

console.log('-Using Do While Loop-');
str = ''
i = 0
do {
    str += `${i} `
    i++
} while (i <= 10)
console.log(str);

console.log("\n[Number 2]");
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log('-Using For Loop-');
str = ''
for (let i = 10; i >= 0; i--) {
    str += `${i} `
}
console.log(str);

console.log('-Using While Loop-');
str = ''
i = 10
while (i >= 0) {
    str += `${i} `
    i--
}
console.log(str);

console.log('-Using Do While Loop-');
str = ''
i = 10
do {
    str += `${i} `
    i--
} while (i >= 0)
console.log(str);

console.log("\n[Number 3]");
// 3. Iterate 0 to n using for loop
let n = 11
str = ''
for (let i = 0; i < n; i++) {
    str += `${i} `
}
console.log(str);

console.log("\n[Number 4]");
// 4. Write a loop that makes the following pattern using console.log():
/*
    ```js
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ```
*/
n = 7
for (let i = 0; i < n; i++) {
    // str = ''
    // for (let j = 0; j < i + 1; j++) {
    //     str += '#'
    // }
    // console.log(str);
    str = new Array(i + 1).fill('#')
    console.log(str.join(''));
}

console.log("\n[Number 5]");
// 5. Use loop to print the following pattern:
/*
    ```sh
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
    ```
*/
n = 10
for (let i = 0; i <= n; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log("\n[Number 6]");
// 6. Using loop print the following pattern
/*
    ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
    ```
*/
n = 10
console.log(`i \t i^2 \t i^3`);
for (let i = 0; i <= n; i++) {
    console.log(`${i}\t ${i**2} \t${i**2 < 10 ? '\t' : ''} ${i**3}`);
}

console.log("\n[Number 7]");
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
str = ''
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) str += `${i} `
}
console.log(str);

console.log("\n[Number 8]");
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
str = ''
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) str += `${i} `
}
console.log(str);

console.log("\n[Number 9]");
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
str = ''
for (let i = 0; i <= 100; i++) {
    if (i > 1 && (i % 2 === 0 || i % 3 === 0 || i % 5 === 0)) str += `${i} `
}
console.log(str);

console.log("\n[Number 10]");
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*
    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```
*/
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

console.log("\n[Number 11]");
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*
    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```
*/
let sum_evens = 0
let sum_odds = 0
for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? sum_evens += i : sum_odds += i
}
console.log(`The sum of all evens from 0 to 100 is ${sum_evens}. And the sum of all odds from 0 to 100 is ${sum_odds}`);

console.log("\n[Number 12]");
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/*
    ```sh
    [2550, 2500]
    ```
*/
sum = [0, 0]
for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? sum[0] += i : sum[1] += i
}
console.log(sum);

console.log("\n[Number 13]");
// 13. Develop a small script which generate array of 5 random numbers
arr = []
n = 5
for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 5) + 1)
}
console.log(arr);

console.log("\n[Number 14]");
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
arr = []
n = 5
let random = 0
while (arr.length !== n) {
    random = Math.floor(Math.random() * 5) + 1
    if (!arr.includes(random)) arr.push(random)
}
console.log(arr);

console.log("\n[Number 15]");
// 15. Develop a small script which generate a six characters random id:
/*
    ```sh
    5j2khz
    ```
*/
str = ''
n = 6
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < n; i++) {
    str += characters[Math.floor(Math.random() * characters.length)]
}
console.log(str);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Develop a small script which generate any number of characters random id:
/*
    ```sh
    fe3jo1gl124g
    ```

    ```sh
    xkqci4utda1lmbelpkm03rba
    ```
*/
str = ''
n = Math.floor(Math.random() * 12) + 12
for (let i = 0; i < n; i++) {
    str += characters[Math.floor(Math.random() * characters.length)]
}
console.log(str);

console.log("\n[Number 2]");
// 2. Write a script which generates a random hexadecimal number.
/*
    ```sh
    '#ee33df'
    ```
*/
let hex = '#'
n = 6
let random_decimal = 0
for (let i = 0; i < n; i++) {
    random_decimal = Math.floor(Math.random() * 16)
    hex += random_decimal.toString(16)
}
console.log(hex);

console.log("\n[Number 3]");
// 3. Write a script which generates a random rgb color number.
/*
    ```sh
    rgb(240,180,80)
    ```
*/
let rgb = []
n = 3
for (let i = 0; i < n; i++) {
    random_decimal = Math.floor(Math.random() * 256)
    rgb.push(random_decimal)
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

console.log("\n[Number 4]");
// 4. Using the above countries array, create the following new array.
/*
    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```
*/
arr = []
for (let i = 0; i < above_countries.length; i++) {
    arr.push(above_countries[i].toUpperCase())
}
console.log(arr);

console.log("\n[Number 5]");
// 5. Using the above countries array, create an array for countries length'.
/*
    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```
*/
arr = []
for (let i = 0; i < above_countries.length; i++) {
    arr.push(above_countries[i].length)
}
console.log(arr);

console.log("\n[Number 6]");
// 6. Use the countries array to create the following array of arrays:
/*
    ```sh
    [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
    ]
    ```
*/
arr = []
for (const country of above_countries) {
    arr.push([country, country.slice(0, 3).toUpperCase(), country.length])
}
console.log(arr);

console.log("\n[Number 7]");
// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
/*
    ```sh
    ['Finland','Ireland', 'Iceland']
    ```
*/
arr = []
for (const country of above_countries) {
    if (country.includes('land')) arr.push(country)
}
arr.length !== 0 ? console.log(arr) : console.log('All these countries are without land');

console.log("\n[Number 8]");
// 8. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
/*
    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```
*/
arr = []
for (const country of above_countries) {
    if (country.endsWith('ia')) arr.push(country)
}
arr.length !== 0 ? console.log(arr) : console.log('These are countries ends without ia');

console.log("\n[Number 9]");
// 9. Using the above countries array, find the country containing the biggest number of characters.
/*
    ```sh
    Ethiopia
    ```
*/
str = ''
for (const country of above_countries) {
    if (country.length > str.length) str = country
}
console.log(str);

console.log("\n[Number 10]");
// 10. Using the above countries array, find the country containing only 5 characters.
/*
    ```sh
    ['Japan', 'Kenya']
    ```
*/
arr = []
for (const country of above_countries) {
    if (country.length === 5) arr.push(country)
}
console.log(arr);

console.log("\n[Number 10]");
// 11. Find the longest word in the webTechs array
str = ''
for (const tech of webTechs) {
    if (tech.length > str.length) str = tech
}
console.log(str);

console.log("\n[Number 12]");
// 12. Use the webTechs array to create the following array of arrays:
/*
    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```
*/
arr = []
for (const tech of webTechs) {
    arr.push([tech, tech.length])
}
console.log(arr);

console.log("\n[Number 13]");
// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
str = ''
for (const stack of mernStack) {
    str += stack[0].toUpperCase()
}
console.log(str);

console.log("\n[Number 14]");
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const tech of webTechs) {
    console.log(tech);
}

console.log("\n[Number 15]");
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
arr = []
for (const fruit of fruits) {
    arr.unshift(fruit)
}
fruits = arr
console.log(fruits);

console.log("\n[Number 16]");
// 16. Print all the elements of array as shown below.
/*
    ```js
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    ````

    ```sh
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB
    ```
*/

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (x of fullStack) {
    for (y of x) {
        console.log(y.toUpperCase());
    }
}

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Copy countries array(Avoid mutation)
const copiedCountries = [...countries]
console.log(copiedCountries);

console.log("\n[Number 2]");
// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = copiedCountries.sort()
console.log(sortedCountries);

console.log("\n[Number 3]");
// 3. Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

console.log("\n[Number 4]");
// 4. Extract all the countries contain the word 'land' from the [countries array] and print it as array
arr = []
for (const country of countries) {
    if (country.includes('land')) arr.push(country)
}
console.log(arr);

console.log("\n[Number 5]");
// 5. Find the country containing the hightest number of characters in the [countries array]
str = ''
for (const country of countries) {
    if (country.length > str.length) str = country
}
console.log(str);

console.log("\n[Number 6]");
// 6. Extract all the countries contain the word 'land' from the [countries array] and print it as array
console.log(countries.filter(country => country.includes('land')));

console.log("\n[Number 7]");
// 7. Extract all the countries containing only four characters from the [countries array] and print it as array
console.log(countries.filter(country => country.length === 4));

console.log("\n[Number 8]");
// 8. Extract all the countries containing two or more words from the [countries array] and print it as array
console.log(countries.filter(country => country.split(' ').length >= 2));

console.log("\n[Number 9]");
// 9. Reverse the [countries array] and capitalize each country and stored it as an array
const reversedCountries = countries.reverse().map(country => country.toUpperCase())
console.log(reversedCountries);
