// Exercises: Level 1
console.log('===================Exercises Level 1===================');

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

console.log("\n[Number 1]");
// 1. Change skills array to JSON using JSON.stringify()
let jsonString = JSON.stringify(skills)
console.log(jsonString);

console.log("\n[Number 2]");
// 2. Stringify the age variable
jsonString = JSON.stringify(age)
console.log(jsonString);

console.log("\n[Number 3]");
// 3. Stringify the isMarried variable
jsonString = JSON.stringify(isMarried)
console.log(jsonString);

console.log("\n[Number 4]");
// 4. Stringify the student object
jsonString = JSON.stringify(student)
console.log(jsonString);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Stringify the students object with only firstName, lastName and skills properties
jsonString = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log(jsonString);

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

console.log("\n[Number 1]");
// 1. Parse the *txt* JSON to object.
let obj = JSON.parse(txt)
console.table(obj);

console.log("\n[Number 2]");
// 2. Find the user who has many skills from the variable stored in *txt*.
const numSkill = 5
obj = JSON.parse(txt, (key, value) => {
    if (key !== "skills" || value.length >= numSkill) {
        return value
    }
    return undefined
})

console.table(obj);