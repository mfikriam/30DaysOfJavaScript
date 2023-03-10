// Exercise: Level 1
console.log('===================Exercise Level 1===================');

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'

// 2. Print the string on the browser console using console.log()

console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()

console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(3, 4));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substring(3, 21));

// 8. Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method

console.log(challenge.split());

// 10. Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(11));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('a'));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

console.log(' 30 Days Of JavaScript '.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('30 Days'));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('Script'));

// 23. Use match() method to find all the a???s in 30 Days Of JavaScript

console.log(challenge.match(/a/g));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

console.log('30 Days of'.concat(' ' + 'JavaScript'));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));


// Exercise: Level 2
console.log('\n===================Exercise Level 2===================');

// 1. Using console.log() print out the following statement:
/*
    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
*/

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:
/*
    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
*/

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof parseInt('10') == typeof 10);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(Math.round(parseFloat('9.8')) == 10);

// 5. Check if 'on' is found in both python and jargon

console.log('python'.includes('on') && 'jargon'.includes('on'));

// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.

console.log('_I hope this course is not full of jargon_'.includes('_jargon_'));

// 7. Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 101));

// 8. Generate a random number between 50 and 100 inclusively.

console.log(Math.floor(Math.random() * 51) + 50);

// 9. Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random() * 256));

// 10. Access the 'JavaScript' string characters using a random number.

console.log('JavaScript'.charAt(Math.floor(Math.random() * 'JavaScript'.length)));

// 11. Use console.log() and escape characters to print the following pattern.

//     ```js
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
//     ```

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let sentence = 'You cannot end a sentence with because because because is a conjunction'
let phrase = 'because because because'
console.log(sentence.substr(sentence.indexOf(phrase), phrase.length));

// Exercise: Level 3
console.log('\n===================Exercise Level 3===================');

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.

sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence.match(/love/gi).length);

// 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/g).length);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
/*
    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```
*/

sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence);
sentence = sentence.replace(/[^a-zA-Z .]/g, '')
console.log(sentence);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers = text.match(/\d+/g)
let salary = parseInt(numbers[0]), bonus = parseInt(numbers[1]), courses = parseInt(numbers[2])
let annual_income = salary * 12 + bonus + courses * 12
console.log(annual_income);
