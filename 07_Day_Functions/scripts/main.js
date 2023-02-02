// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
// 1. Declare a function _fullName_ and it print out your full name.
function fullName() {
    console.log('Muhammad Fikri');
}
fullName()

console.log("\n[Number 2]");
// 2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
fullName('Muhammad', 'Fikri')

console.log("\n[Number 3]");
// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    let sum = a + b
    return sum
}
console.log(addNumbers(4, 5));

console.log("\n[Number 4]");
// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(4, 5));

console.log("\n[Number 5]");
// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(4, 5));

console.log("\n[Number 6]");
// 6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(3, 4, 5));

console.log("\n[Number 7]");
// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(3));

console.log("\n[Number 8]");
// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(3));

console.log("\n[Number 9]");
// 9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
function calculatesDensity(mass, volume) {
    let density = mass / volume
    return density
}
console.log(calculatesDensity(4, 5));

console.log("\n[Number 10]");
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
function calculatesSpeed(total_distance_km, time_taken_hours) {return total_distance_km / time_taken_hours}
console.log(calculatesSpeed(10, 2));

console.log("\n[Number 11]");
// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
const calculatesWeight = function(mass, gravity) {
    let weight = mass * gravity
    return weight
}
console.log(calculatesWeight(10, 6));

console.log("\n[Number 12]");
// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
const convertCelsiusToFahrenheit = function(temperature_celcius) {
    let temperature_fahrenheit = (temperature_celcius * 9 / 5) + 32
    return temperature_fahrenheit
}
console.log(convertCelsiusToFahrenheit(27));

console.log("\n[Number 13]");
// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more
const calculatesBMI = function(weight_kg, height_m) {
    let bmi = weight_kg / (height_m * height_m)
    let weight_groups = ''
    switch (true) {
        case bmi < 18.5:
            weight_groups = 'Underweight'
            break;
        case bmi < 24.9:
            weight_groups = 'Normal weight'
            break;
        case bmi < 29.9:
            weight_groups = 'Overweight'
            break;
        default:
            weight_groups = 'Obese'
            break;
    }
    return `Your BMI is ${bmi}. You are ${weight_groups}`
}
console.log(calculatesBMI(55, 1.6));

console.log("\n[Number 14]");
// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = function(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return 'Winter'
        case 3:
        case 4:
        case 5:
            return 'Spring'
        case 6:
        case 7:
        case 8:
            return 'Summer'
        case 9:
        case 10:
        case 11:
            return 'Autumn'
        default:
            return `${month} is invalid month`
    }
}
console.log(checkSeason(1));

console.log("\n[Number 15]");
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
/*
    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
*/
const findMax = function(a, b, c) {
    if (a >= b && a >= c) return a
    else if (b >= a && b >= c) return b
    else return c
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
const solveLinEquation = (a, b, c) => {
    if (a === 0 && b === 0) {
        if (c === 0) {
            return 'Infinite solutions'
        } else {
            return 'No Solution'
        }
    } else if (a === 0) {
        let root = -c / b
        return [root]
    } else if (b === 0) {
        let root = -c / a
        return [root]
    } else {
        let root = {x: -c / a, y: -c / b}
        return root
    }
}
console.log(solveLinEquation(1, -1, -2));

console.log("\n[Number 2]");
// 2. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.
/*
    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```
*/
const solveQuadratic = (...args) => {
    if (args.length === 0) return [0]
    const [a, b, c] = args
    const discriminant = b*b - 4*a*c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return [root1, root2]
    } else if (discriminant === 0) {
        const root = -b / (2 * a)
        return [root]
    } else {
        return []
    }
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

console.log("\n[Number 3]");
// 3. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
    arr.forEach(element => {
        console.log(element);
    });
}
printArray([1, 2, 3])

console.log("\n[Number 4]");
// 4. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.
/*
    ```sh
    showDateTime()
    08/01/2020 04:08
    ```
*/
const showDateTime = () => {
    const d = new Date()
    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const year = d.getFullYear()
    const hours = d.getHours().toString().padStart(2, '0')
    const minutes = d.getMinutes().toString().padStart(2, '0')
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}
showDateTime()

console.log("\n[Number 5]");
// 5. Declare a function name _swapValues_. This function swaps value of x to y.
/*
    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```
*/
const swapValues = (a, b) => {
    [a, b] = [b, a]
    return [a, b]
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

console.log("\n[Number 6]");
// 6. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```
*/
const reverseArray = (arr) => {
    const newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

console.log("\n[Number 7]");
// 7. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr) => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
console.log(capitalizeArray(['a', 'b', 'c', 'd', 'e']))

console.log("\n[Number 7]");
// 8. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
const addItem = (arr, item) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]
    }
    newArr[arr.length] = item
    return newArr
}
const arr = ['bag', 'shoes', 't-shirt']
console.log(arr);
console.log(addItem(arr, 'book'));

console.log("\n[Number 9]");
// 9. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
const removeItem = (arr, index) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === index) continue
        newArr.push(arr[i])
    }
    return newArr
}
console.log(arr);
console.log(removeItem(arr, 1));

console.log("\n[Number 10]");
// 10. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
    if (number < 0) return 'Error: numbers not a positive integer'
    else if (number === 0) return 0
    return number + sumOfNumbers(number - 1)
}
console.log(sumOfNumbers(-1));
console.log(sumOfNumbers(4));

console.log("\n[Number 11]");
// 11. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
    if (number < 0) return 'Error: numbers not a positive integer'
    else if (number === 0) return 0
    
    if (number % 2 === 0) return sumOfOdds(number - 1)
    else return number + sumOfOdds(number - 1)
}
console.log(sumOfOdds(-1));
console.log(sumOfOdds(10));

console.log("\n[Number 12]");
// 12. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
    if (number < 0) return 'Error: numbers not a positive integer'
    else if (number === 0) return 0
    
    if (number % 2 === 0) return number + sumOfEven(number - 1)
    else return sumOfEven(number - 1)
}
console.log(sumOfEven(-1));
console.log(sumOfEven(10));

console.log("\n[Number 13]");
// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
/*
    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```
*/
const evensAndOdds = (number) => {
    let evensNumber = 0
    let oddsNumber = 0
    for (let i = 0; i <= number; i++) {
        i % 2 === 0 ? evensNumber += 1 : oddsNumber += 1
    }
    console.log(`The number of odds are ${oddsNumber}.`);
    console.log(`The number of evens are ${evensNumber}.`);
}
evensAndOdds(100)

console.log("\n[Number 14]");
// 14. Write a function which takes any number of arguments and return the sum of the arguments
/*
    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```
*/
const sum = (...args) => {
    let total = 0
    for (const element of args) {
        total += element
    }
    return total
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

console.log("\n[Number 15]");
// 15. Write a function which generates a _randomUserIp_.
const randomUserIp = () => {
    let ip_address = ''
    for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * 256)
        ip_address += randomNum.toString()
        if (i !== 3) ip_address += '.'
    }
    return ip_address
}
console.log(randomUserIp());

console.log("\n[Number 16]");
// 16. Write a function which generates a _randomMacAddress_
const randomMacAddress = () => {
    let mac_address = ''
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 256)
        const hexNum = randomNum.toString(16).toUpperCase().padStart(2, '0')
        mac_address += hexNum
        if (i !== 5) mac_address += ':'
    }
    return mac_address
}
console.log(randomMacAddress());

console.log("\n[Number 17]");
// 17. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/*
    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```
*/
const randomHexaNumberGenerator = () => {
    let hexa = '#'
    let n = Math.floor(Math.random() * 10) + 1
    console.log(n);
    for (let i = 0; i < n; i++) {
        const randomNum = Math.floor(Math.random() * 16)
        const hexNum = randomNum.toString(16)
        hexa += hexNum
    }
    return hexa
}
console.log(randomHexaNumberGenerator());

console.log("\n[Number 18]");
// 18. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.
/*
    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```
*/
const userIdGenerator = (number_of_char = 7, number_of_id = 1) => {
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < number_of_id; i++) {
        let id = ''
        for (let j = 0; j < number_of_char; j++) {
            const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
            id += randomChar
        }
        console.log(id);
    }
}
// console.log(userIdGenerator());
userIdGenerator()

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```
*/
const userIdGeneratedByUser = () => {
    number_of_char = prompt('Enter number of characters:')
    number_of_id = prompt('Enter number of ids:')
    userIdGenerator(number_of_char, number_of_id)
}
// userIdGeneratedByUser()

console.log("\n[Number 2]");
// 2. Write a function name _rgbColorGenerator_ and it generates rgb colors.
/*
    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```
*/
const rgbColorGenerator = () => {
    let rgb = []
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 256)
        rgb.push(randomNumber)
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}
console.log(rgbColorGenerator());

console.log("\n[Number 3]");
// 3. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = (number_of_hexacolors = 1) => {
    let arr = []
    for (let i = 0; i < number_of_hexacolors; i++) {
        let hex_color = '#'
        for (let j = 0; j < 3; j++) {
            const randomHexa = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
            hex_color += randomHexa.toUpperCase()
        }
        arr.push(hex_color)
    }
    return arr
}
console.log(arrayOfHexaColors(3));

console.log("\n[Number 4]");
// 4. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
const arrayOfRgbColors = (number_of_rgbcolors = 1) => {
    let arr = []
    for (let i = 0; i < number_of_rgbcolors; i++) {
        arr.push(rgbColorGenerator())
    }
    return arr
}
console.log(arrayOfRgbColors(3));

console.log("\n[Number 5]");
// 5. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hexa_color) => {
    console.log(hexa_color);
    let hexa = [hexa_color.slice(1, 3), hexa_color.slice(3, 5), hexa_color.slice(5, 7)]
    hexa = hexa.map(x => parseInt(x, 16))
    return `rgb(${hexa[0]},${hexa[1]},${hexa[2]})`
}
console.log(convertHexaToRgb(arrayOfHexaColors().toString()));

console.log("\n[Number 6]");
// 6. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = (rgb_color) => {
    console.log(rgb_color);
    let cleaned_rgb = rgb_color.replace(/rgb\(|\)/gi, '')
    let hex = cleaned_rgb.split(',')
    hex = hex.map(x => parseInt(x).toString(16).padStart(2, '0').toUpperCase())
    return `#${hex.join('')}`
}
console.log(convertRgbToHexa(rgbColorGenerator()));

console.log("\n[Number 7]");
// 7. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.
/*
    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```
*/
const generateColors = (type, num) => {
    if (type === 'hexa') {
        if (num === 1) {
            return arrayOfHexaColors(num).toString()
        } else if (num >= 1) {
            return arrayOfHexaColors(num)
        }
        return []
    } else if (type === 'rgb') {
        if (num === 1) {
            return arrayOfRgbColors(num).toString()
        } else if (num >= 1) {
            return arrayOfRgbColors(num)
        }
        return []
    } else {
        return 'Invalid Type of Colors'
    }
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

console.log("\n[Number 8]");
// 8. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

console.log("\n[Number 9]");
// 9. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
const factorial = num => num === 1 ? 1 : num * factorial(num - 1)
console.log(factorial(5));

console.log("\n[Number 10]");
// 10. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
const isEmpty = (parameter) => {
    if (parameter === undefined || parameter === null) return true
    if (typeof parameter === "string" && parameter.trim() === "") return true
    if (typeof parameter === 'object' && Object.keys(parameter).length === 0) return true
    if (Array.isArray(parameter) && parameter.length === 0) return true
    return false
}
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(""));
console.log(isEmpty(0));
console.log(isEmpty(null));
console.log(isEmpty());

console.log("\n[Number 11]");
// 11. Call your function _sum_, it takes any number of arguments and it returns the sum.
const calculateSum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0)
} 
console.log(calculateSum(1, 2, 3, 4, 5));
console.log(calculateSum(1, 2, 3));
console.log(calculateSum());

console.log("\n[Number 12]");
// 12. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
const sumOfArrayItems = (arr) => {
    if (arr.every(item => typeof item === 'number')) {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }
    return 'array items are not a number'
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
console.log(sumOfArrayItems([1, 2, 3]));
console.log(sumOfArrayItems([1, 2, 'three', true]));

console.log("\n[Number 13]");
// 13. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const averageOfArrayItems = (arr) => {
    if (arr.every(item => typeof item === 'number')) {
        return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
    }
    return 'array items are not a number'
}
console.log(averageOfArrayItems([1, 2, 3, 4, 5]));
console.log(averageOfArrayItems([1, 2, 3]));
console.log(averageOfArrayItems([1, 2, 'three', true]));

console.log("\n[Number 14]");
// 14. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
/*
    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
    'Not Found'
    ```
*/
const modifyArray = (arr) => {
    let n = 5
    if (arr.length >= 5) {
        arr[n - 1] = arr[n - 1].toUpperCase()
        return arr
    } else {
        return 'Not Found'
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

console.log("\n[Number 15]");
// 15. Write a function called _isPrime_, which checks if a number is prime number.
const isPrime = num => (num > 1 && (num % 2 === 0 || num % 3 === 0 || num % 5 === 0))
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(17));

console.log("\n[Number 16]");
// 16. Write a functions which checks if all items are unique in the array.
const isUniqueArray = (arr) => {
    for (const item of arr) {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) count += 1
        }
        if (count > 1) return false
    }
    return true
}
console.log(isUniqueArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(isUniqueArray(['Avocado', 'Mango', 'Potato','Mango']));
console.log(isUniqueArray([1, 2, 3, 4, 5]));
console.log(isUniqueArray([1, 2, 3, 1, 5]));

console.log("\n[Number 17]");
// 17. Write a function which checks if all the items of the array are the same data type.
const isSameDataTypeArray = (arr) => {
    let data_type = typeof arr[0]
    for (const item of arr) {
        if (typeof item !== data_type) return false
    }
    return true
}
console.log(isSameDataTypeArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(isSameDataTypeArray(['Avocado', 'Tomato', 1, 2, 3]));
console.log(isSameDataTypeArray([1, 2, 3, 1, 5]));
console.log(isSameDataTypeArray([1, 2, 3, 1, [5, 2]]));

console.log("\n[Number 18]");
// 18. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
const isValidVariable = (variable) => {
    const regex = /[^A-Za-z0-9\$\_]/g
    return variable.match(regex) === null
}
console.log(isValidVariable('_tryNew'));
console.log(isValidVariable('some body'));

console.log("\n[Number 19]");
// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
/*
    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```
*/
const sevenRandomNumbers = () => {
    let arr = []
    while (arr.length !== 7) {
        let random_number = Math.floor(Math.random() * 10)
        if (!arr.includes(random_number)) arr.push(random_number)
    }
    return arr
}
console.log(sevenRandomNumbers());

console.log("\n[Number 20]");
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const reverseCountries = (arr) => {
    let new_array = []
    arr.forEach(item => new_array.push(item));

    let reversed_array = []
    new_array.forEach(item => reversed_array.unshift(item));

    return reversed_array
}

const countries_arr = [
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
console.log(countries_arr.join(', '));
console.log(reverseCountries(countries_arr).join(', '));
console.log(countries_arr.join(', '));