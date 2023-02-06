// Exercises: Level 1
console.log('===================Exercises Level 1===================');

// 1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Muhammad')
localStorage.setItem('lastName', 'Fikri')
localStorage.setItem('age', 24)
localStorage.setItem('country', 'Indonesia')
localStorage.setItem('city', 'Makassar')
console.log(localStorage);

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'Billie',
    lastName: 'Jean',
    age: 20,
    skills: ['catfish', 'drinking'],
    country: 'California'
}
const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJSON)
console.log(localStorage.getItem('student'));

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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
    accountInfo: function () {
        console.log(`Name		  : ${this.firstName} ${this.lastName}`);
        console.log(`Total Incomes : Rp${this.totalIncome()}`);
        console.log(`Total Expenses: Rp${this.totalExpense()}`);
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
const personAccountKeys = ['totalIncome', 'totalExpense', 'accountInfo', 'addIncome', 'addExpense', 'accountBalance']
const personAccountJSON = JSON.stringify(personAccount, (key, value) => {
    if (personAccountKeys.includes(key)) {
        return personAccount[key].toString();
    }
    return value
}, 4)
localStorage.setItem('personAccount', personAccountJSON)
console.log(localStorage.getItem('personAccount'));