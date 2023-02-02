// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
const constants = [2.72, 3.14, 9.81, 37, 100]
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

console.log("\n[Number 2]");
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor);

console.log("\n[Number 3]");
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
// 3. Destructure the rectangle object by its properties or keys.
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
]

console.log("\n[Number 1]");
// 1. Iterate through the users array and get all the keys of the object using destructuring
users.forEach(user => {
    console.log({...user});
})

console.log("\n[Number 2]");
// 2. Find the persons who have less than two skills
const findTwoSkilledPerson = (users) => {
    users.forEach(user => {
        let { skills } = user
        if (skills.length < 2) {
            console.log(user);
        }
    })
}

findTwoSkilledPerson(users)

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of countries_data) {
    console.log(`> ${name}`);
    console.log(`  Capital: ${capital}`);
    console.log(`  Population: ${population}`);
    console.log(`  Languages: ${languages.join(', ')}`);
}

console.log("\n[Number 2]");
// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
/*
    ```js
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    console.log(name, skills, jsScore, reactScore)
    ```

    ```sh
    David (4) ["HTM", "CSS", "JS", "React"] 90 95
    ```
*/
let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student
let [ , , jsScore, reactScore] = scores
console.log(name, skills, jsScore, reactScore)

// 3. Write a function called *convertArrayToObject* which can convert the array to a structure object.
/*
    ```js
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ]

    console.log(convertArrayToObject(students))
    [
        {
            name: 'David',
            skills: ['HTM','CSS','JS','React'],
            scores: [98,85,90,95]
        },
        {
            name: 'John',
            skills: ['HTM','CSS','JS','React'],
            scores: [85, 80,85,80]
        }
    ]
    ```
*/
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (students) => {
    const arr = []
    for ([ name, skills, scores ] of students) {
        const obj = {}
        obj.name = name
        obj.skills = skills
        obj.scores = scores
        arr.push(obj)
    }
    return arr
}

console.log(convertArrayToObject(students))

console.log("\n[Number 4]");
// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
/*
The copied object output should look like this:

```js
{
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
        ],
        backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
        ],
        dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
        ],
        dataScience: ['Python','R','D3.js','SQL']
    }
}
```
*/

student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const copiedStudent = { 
    ...student, 
    skills: { 
        ...student.skills, 
        frontEnd: [...student.skills.frontEnd],
        backEnd: [...student.skills.backEnd],
        dataBase: [...student.skills.dataBase],
        dataScience: [...student.skills.dataScience]
    } 
}
// - Add Bootstrap with level 8 to the front end skill sets
copiedStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
// - Add Express with level 9 to the back end skill sets
copiedStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
// - Add SQL with level 8 to the data base skill sets
copiedStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
// - Add SQL without level to the data science skill sets
copiedStudent.skills.dataScience.push('SQL')

console.log('Student');
console.log(student);
console.log('Copied Student');
console.log(copiedStudent);