// Exercise: Level 1
console.log('===================Exercise Level 1===================');

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Muhammad'
let lastName = 'Fikri'
let country = 'Indonesia'
let city = 'Makassar'
let age = 24
let isMarried = false
let year = 2023

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10

console.log('10' == 10);

// 3. Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10);

// 4. Boolean value is either true or false.

console.log("\n[Number 4]");

//    4.1. Write three JavaScript statement which provide truthy value.

let x = 5
if (x > 0) {
    console.log("x is truthy")
}

let y = "hello"
if (y) {
    console.log("y is truthy");
}

let z = {}
if (z) {
    console.log("z is truthy");
}

//    4.2. Write three JavaScript statement which provide falsy value.

x = 0
if (!x) {
    console.log("x is falsy")
}

y = ""
if (!y) {
    console.log("y is falsy")
}

let zet
if (!zet) {
    console.log("zet is falsy")
}

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    5.1. 4 > 3      true
//    5.2. 4 >= 3     true
//    5.3. 4 < 3      false
//    5.4. 4 <= 3     false
//    5.5. 4 == 4     true
//    5.6. 4 === 4    true
//    5.7. 4 != 4     false
//    5.8. 4 !== 4    false
//    5.9. 4 != '4'   false
//    5.10. 4 == '4'  true
//    5.11. 4 === '4' false
//    5.12. Find the length of python and jargon and make a falsy comparison statement.

console.log("\n[Number 5]");
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3 );
console.log(4 == 4 );
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    6.1. 4 > 3 && 10 < 12     true
//    6.2. 4 > 3 && 10 > 12     false
//    6.3. 4 > 3 || 10 < 12     true
//    6.4. 4 > 3 || 10 > 12     true
//    6.5. !(4 > 3)             false
//    6.6. !(4 < 3)             true
//    6.7. !(false)             true
//    6.8. !(4 > 3 && 10 < 12)  false
//    6.9. !(4 > 3 && 10 > 12)  true
//    6.10. !(4 === '4')        true
//    6.11. There is no 'on' in both dragon and python  false

console.log("\n[Number 6]");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!'dragon'.includes('on') && !'python'.includes('on'));

// 7. Use the Date object to do the following activities
//    7.1. What is the year today?
//    7.2. What is the month today as a number?
//    7.3. What is the date today?
//    7.4. What is the day today as a number?
//    7.5. What is the hours now?
//    7.6. What is the minutes now?
//    7.7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log("\n[Number 7]");
const now = new Date()
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// Exercise: Level 2
console.log('\n');
console.log('===================Exercise Level 2===================');

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
    ```sh
    Enter base: 20
    Enter height: 10
    The area of the triangle is 100
    ```
*/

// let base = parseFloat(prompt('Enter base:'))
// let height = parseFloat(prompt('Enter height:'))
// let area = 0.5 * base * height

// console.log(`Enter base: ${base}`);
// console.log(`Enter height: ${height}`);
// console.log(`The area of the triangle is ${area}`);


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
    ```sh
    Enter side a: 5
    Enter side b: 4
    Enter side c: 3
    The perimeter of the triangle is 12
    ```
*/

// let side_a = parseInt(prompt('Enter side a:'))
// let side_b = parseInt(prompt('Enter side b:'))
// let side_c = parseInt(prompt('Enter side c:'))
// perimeter = side_a + side_b + side_c

// console.log(`Enter side a: ${side_a}`);
// console.log(`Enter side b: ${side_b}`);
// console.log(`Enter side c: ${side_c}`);
// console.log(`The perimeter of the triangle is ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = parseFloat(prompt('Enter length:'))
// let width = parseFloat(prompt('Enter width:'))
// let area = length * width
// perimeter = 2 * (length + width)

// console.log(`Enter length: ${length}`);
// console.log(`Enter width: ${width}`);
// console.log(`The area of the rectangle is ${area}`);
// console.log(`The perimeter of the rectangle is ${perimeter}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = 3.14
// let r = parseFloat(prompt('Enter radius:'))
// area = pi * r * r
// let circumference = 2 * pi * r
// console.log(`The area of the circle is ${area}`);
// console.log(`The circumference of the circle is ${circumference}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

console.log("\n[Number 5]");
let slope1 = 2;
let yIntercept = -2;
let xIntercept = -yIntercept/slope1;
console.log(`The slope of the line is: ${slope1}`);
console.log(`The x-intercept of the line is: (${xIntercept},0)`);
console.log(`The y-intercept of the line is: (0,${yIntercept})`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

console.log("\n[Number 6]");
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(`The slope between the points (2, 2) and (6,10) is: ${slope2}`);

// 7. Compare the slope of above two questions.

console.log("\n[Number 7]");
console.log(slope1 === slope2);

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

console.log("\n[Number 8]");
x = 2;
y = x*x + 6*x + 9;
console.log(`The value of y when x is ${x} is: ${y}`);

x = 3;
y = x*x + 6*x + 9;
console.log(`The value of y when x is ${x} is: ${y}`);

x = 4;
y = x*x + 6*x + 9;
console.log(`The value of y when x is ${x} is: ${y}`);

for (let x = -10; x <= 10; x++) {
    let y = x*x + 6*x + 9;
    if(y === 0) {
        console.log(`The value of x that makes y equal to 0 is: ${x}`);
        break;
    }
}

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*
    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```
*/

console.log("\n[Number 9]");

// let hours = parseInt(prompt('Enter hours:'))
// let rate = parseInt(prompt('Enter rate per hour:'))
// let earning = rate * hours

// console.log(`Enter hours: ${hours}`);
// console.log(`Enter rate per hour: ${rate}`);
// console.log(`Your weekly earning is ${earning}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

console.log("\n[Number 10]");
console.log(('Muhammad Fikri'.length > 7) ? 'long' : 'short');

// 11. Compare your first name length and your family name length and you should get this output.
/*
    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```
*/

console.log("\n[Number 11]");
firstName = 'Muhammad'
lastName = 'Mujhar'

console.log(`Your first name, ${firstName} is ${(firstName.length > lastName.length) ? 'longer' : 'shorter'} than your family name, ${lastName}`);

// 12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
/*
    ```js
    let myAge = 250
    let yourAge = 25
    ```

    ```sh
    I am 225 years older than you.
    ```
*/

console.log("\n[Number 12]");
let myAge = 100
let yourAge = 25

console.log(`I am ${Math.abs(myAge - yourAge)} years ${(myAge > yourAge) ? 'older' : 'younger'} than you.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
    ```sh
    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```
*/

console.log("\n[Number 13]");
// let birth_year = parseInt(prompt('Enter birth year:'))
// age = now.getFullYear() - birth_year
// if (age >= 18) {
//     console.log(`You are ${age}. You are old enough to drive.`);
// } else {
//     console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
// }

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/*
    ```sh
    Enter number of years you live: 100
    You lived 3153600000 seconds.
    ```
*/

console.log("\n[Number 14]");
// age = parseInt(prompt('Enter number of years you live:'))
// let age_in_seconds = age * 365 * 24 * 60 * 60;
// console.log(`Enter number of years you live: ${age}`);
// console.log(`You lived ${age_in_seconds} seconds.`);
// console.log(`You have ${ (100 * 365 * 24 * 60 * 60) - age_in_seconds} seconds left.`);

// 15. Create a human readable time format using the Date time object
//    15.1. YYYY-MM-DD HH:mm
//    15.2. DD-MM-YYYY HH:mm
//    15.3. DD/MM/YYYY HH:mm

console.log("\n[Number 15]");
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

// Exercise: Level 3
console.log('\n');
console.log('===================Exercise Level 3===================');

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1.1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let years = now.getFullYear()
let months = (now.getMonth() + 1).toString().padStart(2, '0')
let date = now.getDate().toString().padStart(2, '0')
let hours = now.getHours().toString().padStart(2, '0')
let minutes = now.getMinutes().toString().padStart(2, '0')
console.log(`${years}-${months}-${date} ${hours}:${minutes}`);