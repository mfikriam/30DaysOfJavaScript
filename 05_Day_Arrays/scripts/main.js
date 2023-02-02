// Exercise: Level 1
console.log('===================Exercise Level 1===================');

console.log("\n[Number 1-4]");
// 1. Declare an _empty_ array;
const emptyArr = Array()
console.log(emptyArr);

// 2. Declare an array with more than 5 number of elements
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);

// 3. Find the length of your array
console.log(arr.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(arr[0], arr[parseInt(arr.length / 2)], arr[arr.length - 1]);

console.log("\n[Number 5]");
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
const mixedDataTypes = [1, 'Satu', true, {}, 5n, 19.2]
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

console.log("\n[Number 6-13]");
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using _console.log()_
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length /2)], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
console.log(itCompanies.join(', '));

// 11. Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(', ')} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
itCompanies.includes('Facebook') ? console.log(itCompanies[itCompanies.indexOf('Facebook')]) : console.log(`company is not found`);
itCompanies.includes('facebook') ? console.log(itCompanies[itCompanies.indexOf('Facebook')]) : console.log(`company is not found`);

console.log("\n[Number 18]");
// 14. Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = []
for (let index = 0; index < itCompanies.length; index++) {
    if (itCompanies[index].match(/o/g) !== null) {
        if (itCompanies[index].match(/o/g).length > 1) {
            filteredCompanies.push(itCompanies[index])
        }
    }
}
console.log(filteredCompanies.join(', '));

// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort().join(', '));

// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse().join(', '));

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

console.log("\n[Number 19]");
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.join(', '));
let middle = parseInt(itCompanies.length / 2)
console.log(itCompanies.slice(middle, middle + 1));

console.log("\n[Number 20-23]");
// 20. Remove the first IT company from the array
console.log(itCompanies.join(', '));
itCompanies.splice(0, 1)
console.log(itCompanies.join(', '));

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(middle - 1, 1)
console.log(itCompanies.join(', '));

// 22. Remove the last IT company from the array
itCompanies.splice(itCompanies.length - 1, 1)
console.log(itCompanies.join(', '));

// 23. Remove all IT companies
itCompanies.splice('')
console.log(itCompanies);

// Exercise: Level 2
console.log('\n');
console.log('===================Exercise Level 2===================');

console.log("\n[Number 1]");
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);

console.log("\n[Number 2]");
// 2. First remove all the punctuations and change the string to array and count the number of words in the array
/*
    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13
    ```
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
text = text.replace(/[^\w\s]/gi, '')
console.log(text.split(' '));

console.log("\n[Number 3]");
// 3. In the following shopping cart add, remove, edit items
/*
    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
!shoppingCart.includes('Meat') ? shoppingCart.unshift('Meat') : '';
console.log(shoppingCart);
// - add Sugar at the end of you shopping cart if it has not been already added
!shoppingCart.includes('Sugar') ? shoppingCart.push('Sugar') : '';
console.log(shoppingCart);
// - remove 'Honey' if you are allergic to honey
shoppingCart.includes('Honey') ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) : '';
console.log(shoppingCart);
// - modify Tea to 'Green Tea'
shoppingCart.includes('Tea') ? shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea' : '';
console.log(shoppingCart);

console.log("\n[Number 4]");
// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia');

console.log("\n[Number 5]");
// 5. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
console.log(webTechs);

console.log("\n[Number 6]");
// 6. Concatenate the following two variables and store it in a fullStack variable.
/*
    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3
console.log('\n');
console.log('===================Exercise Level 3===================');

console.log("\n[Number 1]");
// 1. The following is an array of 10 students ages:
/*
    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages);
//     - Sort the array and find the min and max age
ages.sort()
console.log(ages);
let min = ages[0]
let max = ages[ages.length - 1]
console.log(`Min = ${min}, Max = ${max}`);
//     - Find the median age(one middle item or two middle items divided by two)
if (ages.length % 2 === 0) {
    let mid1 = ages[ages.length / 2 - 1]
    let mid2 = ages[ages.length / 2]
    console.log((mid1 + mid2) /  2);
} else {
    console.log(ages[parseInt(ages.length / 2)]);
}
//     - Find the average age(all items divided by number of items)
let sum = 0
for (let index = 0; index < ages.length; index++) {
    sum += ages[index];
}
let average = sum / ages.length
console.log(`Average age = ${average}`);
//     - Find the range of the ages(max minus min)
console.log(`Range of the ages = ${max - min}`);
//     - Compare the value of (min - average) and (max - average), use _abs()_ method
let minDiff = Math.abs(min - average)
let maxDiff = Math.abs(max - average)
console.log(minDiff, maxDiff);
if (minDiff > maxDiff) {
    console.log("The minimum age is farther from the average than the maximum age.");
} else if (maxDiff > minDiff) {
    console.log("The maximum age is farther from the average than the minimum age.");
} else {
    console.log("The minimum and maximum ages are the same distance from the average.");
}

console.log("\n[Number 2]");
// 2.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
console.log(countries.slice(0, 10));

console.log("\n[Number 3]");
// 3. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
if (countries.length % 2 === 0) {
    mid1 = countries[countries.length / 2 - 1]
    mid2 = countries[countries.length / 2]
    console.log(`Midle countries is ${mid1} and ${mid2}`);
} else {
    console.log(`Midle country is ${countries[parseInt(countries.length / 2)]}`);
}

console.log("\n[Number 3]");
// 4. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.
let arr1
let arr2
middle = parseInt(countries.length / 2)
if (countries.length % 2 === 0) {
    arr1 = countries.slice(0, middle)
    arr2 = countries.slice(middle)
} else {
    arr1 = countries.slice(0, middle + 1)
    arr2 = countries.slice(middle + 1)
}
console.log("First Half = ", arr1);
console.log("Second Half = ", arr2);