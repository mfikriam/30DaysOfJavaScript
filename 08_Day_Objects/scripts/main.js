// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
// 1. Create an empty object called dog
const dog = {}

console.log("\n[Number 2]");
// 2. Print the the dog object on the console
console.log(dog);

console.log("\n[Number 3]");
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
dog.name = 'Pochi'
dog.legs = 4
dog.color = 'gold'
dog.age = 7
dog.bark = function () {
    return 'woof woof'
}
console.log(dog);

console.log("\n[Number 4]");
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog['name'], dog['legs'], dog['color'], dog['age'], dog.bark());

console.log("\n[Number 5]");
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'labrador retrivier'
dog.getDogInfo = function () {
    return `${dog.name} is a ${dog.color} ${dog.breed} dog with ${dog.legs} legs. ${dog.name} is ${dog.age} years old. ${dog.name} likes to say ${dog.bark()}.`
}
console.log(dog.getDogInfo());

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

console.log("\n[Number 1]");
// 1. Find the person who has many skills in the users object.
let usersKeys = Object.keys(users)
const usersSkillsArr = usersKeys.map(user => {
    return { name: user, numSkills: users[user]['skills'].length }
})
usersSkillsArr.sort((a, b) => a.numSkills - b.numSkills)
console.log(usersSkillsArr[usersSkillsArr.length - 1].name);

console.log("\n[Number 2]");
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
const logged_in_users = usersKeys.reduce((accumulator, user) => {
    if (users[user]['isLoggedIn']) {
        return accumulator += 1
    }
    return accumulator
}, 0)
console.log(`Number of Users logged in: ${logged_in_users}`);

let users_points = usersKeys.reduce((accumulator, user) => {
    if (users[user]['points'] >= 50) {
        return accumulator += 1
    }
    return accumulator
}, 0)
console.log(`Number of Users having greater than equal to 50 points: ${users_points}`);

console.log("\n[Number 3]");
// 3. Find people who are MERN stack developer from the users object
const mern = ['MongoDB', 'Express', 'React', 'Node']
let mern_stack_developer = usersKeys.filter(user => {
    for (tech of mern) {
        if (!users[user]['skills'].includes(tech)) return false;
    }
    return true
})
console.log(mern_stack_developer);

console.log("\n[Number 4]");
// 4. Set your name in the users object without modifying the original users object
const my_self = {
    Fikri: {
        email: 'fikri@fikri.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 24,
        isLoggedIn: true,
        points: 75
    }
}
const newUsersObject = Object.assign(my_self, users);
console.log(users);
console.log(newUsersObject);

console.log("\n[Number 5]");
// 5. Get all keys or properties of users object
console.log(Object.keys(users));

console.log("\n[Number 6]");
// 6. Get all the values of users object
console.log(Object.values(users));

console.log("\n[Number 7]");
// 7. Use the countries object to print a country name, capital, populations and languages.
let i = 0
countries.forEach(e => {
    console.log(`[${++i}] ${e.name} * ${e.capital} * ${e.population} People * ${e.languages.join(', ')}`);
});

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'Muhammad',
    lastName: 'Fikri',
    incomes: [],
    expenses: [],
    totalIncome: function () {
        return this.incomes.reduce((acc, item) => acc += item.amount, 0);
    },
    totalExpense: function () {
        return this.expenses.reduce((acc, item) => acc += item.amount, 0);
    },
    addIncome: function (amount, desc) {
        this.incomes.push({ amount: amount, description: desc });
    },
    addExpense: function (amount, desc) {
        this.expenses.push({ 'amount': amount, 'description': desc });
    },
    accountBalance: function () {
        console.log(`[${this.firstName} ${this.lastName}'s Account Balance]`);
        console.log(`> Incomes:`);
        for (const item of this.incomes) {
            console.log(`  - ${item.amount} (${item.description})`);
        }
        console.log(`  Total Expenses = ${this.totalIncome()}`);
        console.log(`> Expenses:`);
        for (const item of this.expenses) {
            console.log(`  - ${item.amount} (${item.description})`);
        }
        console.log(`  Total Expenses = ${this.totalExpense()}`);
        console.log(`Balance: Rp${this.totalIncome() - this.totalExpense()}`);
    }
}

personAccount.addIncome(5000000, 'Monthly Salary')
personAccount.addIncome(1000000, 'Freelance Work')
personAccount.addIncome(500000, 'Investment Income')
personAccount.addExpense(1500000, 'Rent')
personAccount.addExpense(1000000, 'Groceries')
personAccount.addExpense(500000, 'Transportation')
personAccount.accountBalance()

console.log("\n[Number 2]");
// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const usersObject = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

//   Imagine you are getting the above users collection from a MongoDB database.
console.log("\n[Number 2a]");
//     a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
const signUp = (username, email, password) => {
    // '08/01/2020 9:45 AM'
    if (usersObject.every(user => user.username !== username)) {
        const currentDate = new Date();
        const dateFormat = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            localeMatcher: 'best fit',
            type: 'time'
        };
        const generatedId = () => {
            const possibleChars = "abcdefghijklmnopqrstuvwxyz0123456789";
            const number_of_char = 6;
            let id = '';
            while (id === '') {
                id = '';
                for (let i = 0; i < number_of_char; i++) {
                    const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                    id += randomChar;
                }
                if (usersObject.some(user => user._id === id)) {
                    id = '';
                }
            }
            return id
        }
        usersObject.push(
            {
                _id: generatedId(),
                username: username,
                email: email,
                password: password,
                createdAt: currentDate.toLocaleString("en-US", dateFormat),
                isLoggedIn: false
            }
        );
        return `You have been registered.`
    }
    return `${username} already have account.`;
}
console.log(usersObject);
console.log(signUp('Fikri', 'fikri@gmail.com', '12345'));
console.log(usersObject);

console.log("\n[Number 2b]");
//     b. Create a function called signIn which allows user to sign in to the application  
const signIn = (username, password) => {
    const user = usersObject.find(user => user.username === username);
    if (user) {
        if (user.password === password) {
            return user;
        }
    }
    return false;
}
console.log(signIn('Fikri', '12345'));
console.log(signIn('fikri', '123'));

console.log("\n[Number 3]");
// 3. The products array has three elements and each of them has six properties.
console.log("\n[Number 3a]");
//     a. Create a function called rateProduct which rates the product
const rateProduct = (user, rating, product_id) => {
    const product = products.find(item => item._id === product_id);
    if (product) {
        product.ratings.push(
            {
                userId: user._id,
                rate: rating
            }
        );
        return product;
    }
    return false;
}
let user = signIn('Fikri', '12345');
console.log(rateProduct(user, 3.5, 'aegfal'));

console.log("\n[Number 3b]");
//     b. Create a function called averageRating which calculate the average rating of a product  
const averageRating = (product_id) => {
    const product = products.find(item => item._id === product_id);
    if (product) {
        let ratingsSum = product.ratings.reduce((acc, item) => acc += item.rate, 0);
        return ratingsSum / product.ratings.length;
    }
    return false;
}
console.log(averageRating('aegfal'));

console.log("\n[Number 4]");
// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (user, product_id) => {
    const product = products.find(item => item._id === product_id);
    if (product) {
        checkLike = product.likes.includes(user._id);
        if (checkLike) {
            let index = product.likes.indexOf(user._id);
            product.likes.splice(index, 1);
            return 'remove like';
        } else {
            product.likes.push(user._id);
            return 'liked';
        }
    }
    return false;
}

console.log(likeProduct(user, 'hedfcg'));
console.log(likeProduct(user, 'hedfcg'));
// console.log(products[2]);