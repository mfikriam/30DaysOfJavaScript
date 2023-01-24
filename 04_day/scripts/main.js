// Exercise: Level 1
console.log('===================Exercise Level 1===================');

console.log("\n[Number 1]");
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.
/*
    ```sh
    Enter your age: 30
    You are old enough to drive.

    Enter your age:15
    You are left with 3 years to drive.
    ```
*/

// let age = parseInt(prompt("Enter your age:"))
let age = 24
console.log(`Enter your age: ${age}`);
if (age >= 18) {
    console.log(`You are old enough to drive.`);
} else {
    console.log(`You are left with ${18 - age} years to drive.`);
}

console.log("\n[Number 2]");
// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
```sh
Enter your age: 30
You are 5 years older than me.
```
*/

let myAge = 25
// let yourAge = parseInt(prompt('Enter your age:'))
let yourAge = 24
let diff = Math.abs(myAge - yourAge)
console.log(`Enter your age: ${yourAge}`);
if (myAge < yourAge) {
    console.log(`You are ${diff} years older than me.`);
} else {
    console.log(`I'm ${diff} years older than you.`);
}

console.log("\n[Number 3]");
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//     - using if else
//     - ternary operator.
/*
    ```js
        let a = 4
        let b = 3
    ```

    ```sh
        4 is greater than 3
    ```
*/

let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

a > b ? console.log('a is greater than b') : console.log('a is less than b');

console.log("\n[Number 4]");
// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```
*/

// let number = parseInt(prompt('Enter a number:'))
let number = 17
number % 2 === 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`);

// Exercise: Level 2
console.log('\n');
console.log('===================Exercise Level 2===================');

console.log("\n[Number 1]");
// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let scores = 75
let grades
switch (true) {
    case scores >= 80 && scores <= 100:
        grades = 'A'
        break;
    case scores >= 70 && scores <= 89:
        grades = 'B'
        break;
    case scores >= 60 && scores <= 69:
        grades = 'C'
        break;
    case scores >= 50 && scores <= 59:
        grades = 'D'
        break;
    case scores >= 0 && scores <= 49:
        grades = 'F'
        break;
    default:
        break;
}

console.log(`Your grade is ${grades} and your score is ${scores}`);

console.log("\n[Number 2]");
// 2. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

// let month = prompt('Enter months:').toLowerCase()
let month = 'january'
switch (true) {
    case month == 'september' || month == 'october' || month == 'november':
        console.log(`The season of ${month} is Autumn`);
        break;
    case month == 'december' || month == 'january' || month == 'february':
        console.log(`The season of ${month} is Winter`);
        break;
    case month == 'march' || month == 'april' || month == 'may':
        console.log(`The season of ${month} is Spring`);
        break;
    case month == 'june' || month == 'july' || month == 'august':
        console.log(`The season of ${month} is Summer`);
        break;
    default:
        console.log(`${month} is not a month`);
        break;
}

console.log("\n[Number 3]");
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
/*
```sh
    What is the day today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```
*/

// let day = prompt('What is the day today?').toLowerCase()
let day = 'friday'
console.log(`What is the day today? ${day}`);
switch (true) {
    case day == 'saturday' || day == 'sunday':
        console.log(`${day} is a weekend.`);
        break;
    case day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday':
        console.log(`${day} is a working day.`);
        break;
    default:
        console.log(`${day} is not a day.`);
        break;
}

// Exercise: Level 3
console.log('\n');
console.log('===================Exercise Level 3===================');

console.log("\n[Number 1]");
// 1. Write a program which tells the number of days in a month.
/*
```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
```
*/

// month = prompt('Enter a month:').toLowerCase()
month = 'FEBRUary'.toLowerCase()
console.log(`Enter a month: ${month}`);
let numbers
switch (true) {
    case month == 'january':
    case month == 'march':
    case month == 'may':
    case month == 'july':
    case month == 'august':
    case month == 'october':
    case month == 'desember':
        numbers = 31
        break;
    case month == 'april':
    case month == 'june':
    case month == 'september':
    case month == 'november':
        numbers = 30
        break;
    case month == 'february':
        numbers = 28
        break;
    default:
        numbers = 0
}

if (numbers == 0) {
    console.log(`${month} is invalid month.`);
} else {
    console.log(`${month} has ${numbers} days.`);
}

console.log("\n[Number 2]");
// 2. Write a program which tells the number of days in a month, now consider leap year.

// month = prompt('Enter a month:').toLowerCase()
month = 'FEBRUARY'.toLowerCase()
year = '2024'
console.log(`Enter a month: ${month}`);
switch (true) {
    case month == 'january':
    case month == 'march':
    case month == 'may':
    case month == 'july':
    case month == 'august':
    case month == 'october':
    case month == 'desember':
        numbers = 31
        break;
    case month == 'april':
    case month == 'june':
    case month == 'september':
    case month == 'november':
        numbers = 30
        break;
    case month == 'february':
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    numbers = 29
                } else {
                    numbers = 28
                }
            } else {
                numbers = 29
            }
        } else {
            numbers = 28
        }
        break;
    default:
        numbers = 0
}

if (numbers == 0) {
    console.log(`${month} is invalid month.`);
} else {
    console.log(`${month} has ${numbers} days`);
}

if (numbers === 28) {
    console.log(`${year} is not a leap year`);
} else if (numbers === 29) {
    console.log(`${year} is a leap year`);
}