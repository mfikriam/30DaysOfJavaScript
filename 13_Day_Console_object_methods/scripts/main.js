// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
// 1.  Display the countries array as a table
console.table(countries_data)

console.log("\n[Number 2]");
// 2.  Display the countries object as a table
countries_data.forEach(item => {
    item.languages = item.languages.join(', ')
    console.table(item)
})

console.log("\n[Number 3]");
// 3.  Use console.group() to group logs
countries_data.forEach(item => {
    console.group(item.name)
    console.log(item)
    console.groupEnd()
})

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. 10 > 2 \* 10 use console.assert()
console.assert(10 > (2 * 10), 'ten is greater that 2 multiply ten')
console.assert(10 > (2 / 10), 'ten is greater that 2 divide ten')

console.log("\n[Number 2]");
// 2. Write a warning message using console.warn()
console.warn('This is a warning. Be panic!')

console.log("\n[Number 3]");
// 3. Write an error message using console.error()
console.error('This is how you make error.')

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Check the speed difference among the following loops: while, for, for of, forEach

console.time('Speed of Loop While')
let i = 0
while (i < countries_data.length) {
    i += 1
}
console.timeEnd('Speed of Loop While')

console.time('Speed of Loop For')
for (let i = 0; i < countries_data.length; i++) {

}
console.timeEnd('Speed of Loop For')

console.time('Speed of Loop For Of')
i = 0
for (const country of countries_data) {
    i += 1
}
console.timeEnd('Speed of Loop For Of')

console.time('Speed of Loop forEach')
i = 0
countries_data.forEach(element => {
    i += 1
});
console.timeEnd('Speed of Loop forEach')