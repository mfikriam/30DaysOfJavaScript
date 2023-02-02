// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let result = text.match(pattern)
let [salary, bonus, courses] = result.map(item => parseInt(item))
console.log(`Monthly Salary  : ${salary} euro`);
console.log(`Annual Bonus    : ${bonus} euro`);
console.log(`Monthly Courses : ${courses} euro`);
console.log(`Total Annual Income : ${(salary * 12) + bonus + (courses * 12)} euro`);

console.log("\n[Number 2]");
// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
/*
    ```js
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12
    ```
*/
text = 'The position of some particles on the horizontal x-axis -1, 2, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
pattern = /-?\d+/g
result = text.match(pattern)
let points = result.map(item => parseInt(item))
let sortedPoints = [...points].sort((a, b) => a - b)
console.log(`points = [${points.join(', ')}]`);
console.log(`sortedPoints = [${sortedPoints.join(', ')}]`);
console.log(`distance = ${sortedPoints[sortedPoints.length - 1] - sortedPoints[0]}`);

console.log("\n[Number 3]");
// 3. Write a pattern which identify if a string is a valid JavaScript variable
/*
    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```
*/
const is_valid_variable = (variable) => {
    const pattern = /^\d|-/g
    const result = variable.search(pattern)
    console.log(result === -1);
}

is_valid_variable('first_name')
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Write a function called *tenMostFrequentWords* which get the ten most frequent word from a string?
/*
    ```js
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))
    ```

    ```sh
    [
        {word:'love', count:6},
        {word:'you', count:5},
        {word:'can', count:3},
        {word:'what', count:2},
        {word:'teaching', count:2},
        {word:'not', count:2},
        {word:'else', count:2},
        {word:'do', count:2},
        {word:'I', count:2},
        {word:'which', count:1},
        {word:'to', count:1},
        {word:'the', count:1},
        {word:'something', count:1},
        {word:'if', count:1},
        {word:'give', count:1},
        {word:'develop',count:1},
        {word:'capabilities',count:1},
        {word:'application', count:1},
        {word:'an',count:1},
        {word:'all',count:1},
        {word:'Python',count:1},
        {word:'If',count:1}
    ]
    ```

    ```js
    console.log(tenMostFrequentWords(paragraph, 10))
    ```

    ```sh
    [
        {word:'love', count:6},
        {word:'you', count:5},
        {word:'can', count:3},
        {word:'what', count:2},
        {word:'teaching', count:2},
        {word:'not', count:2},
        {word:'else', count:2},
        {word:'do', count:2},
        {word:'I', count:2},
        {word:'which', count:1}
    ]
    ```
*/

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const mostFrequentWords = (paragraph, n = -1) => {
    const words = paragraph.match(/\w+/g)
    const arr = []
    for (const word of (new Set(words))) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        const count = paragraph.match(regex).length
        arr.push({ word, count })
    }
    arr
        .sort((a, b) => {
            if (a.word < b.word) {
                return 1
            }
            if (a.word > b.word) {
                return -1
            }
            return 0
        })
        .sort((a, b) => b.count - a.count)
    
    if (n) return arr.slice(0, n)

    return arr
}

console.log(mostFrequentWords(paragraph))
console.log(mostFrequentWords(paragraph, 10))

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
/*
    ```js
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
    ```

    ```sh
    I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
    ```
*/
const cleanText = (sentence) => {
    const cleanedText = sentence.replace(/[^A-Za-z ]/g, '')
    return cleanedText
}

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

console.log(cleanText(sentence))

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
/*
    ```js
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
    ```
*/
const cleanedText = cleanText(sentence)
console.log(mostFrequentWords(cleanedText, 3))