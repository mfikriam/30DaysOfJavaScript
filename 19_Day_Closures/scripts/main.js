// Exercises: Level 1
console.log('===================Exercises Level 1===================');

// 1. Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction
}

let testFunc = outerFunction()

console.log(testFunc());
console.log(testFunc());
console.log(testFunc());

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

// 1. Create a closure which has three inner functions
function operator() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    function square() {
        count *= count;
        return count;
    }

    return {
        plusOne: plusOne,
        minusOne: minusOne,
        square: square,
    }
}

const testClosure = operator()

console.log(testClosure.plusOne());
console.log(testClosure.plusOne());
console.log(testClosure.plusOne());
console.log(testClosure.minusOne());
console.log(testClosure.square());

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = (first, last) => {
    let firstName = first;
    let lastName = last;
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        return incomes.reduce((acc, item) => acc += item.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((acc, item) => acc += item.amount, 0);
    }

    function accountInfo() {
        console.log(`Name		  : ${firstName} ${lastName}`);
        console.log(`Total Incomes : Rp${totalIncome()}`);
        console.log(`Total Expenses: Rp${totalExpense()}`);
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    function accountBalance() {
        console.log(`[${firstName} ${lastName}'s Account Balance]`);
        console.log(`> Incomes:`);
        for (const item of incomes) {
            console.log(`  - ${item.amount} (${item.description})`);
        }
        console.log(`  Total Expenses = ${totalIncome()}`);
        console.log(`> Expenses:`);
        for (const item of expenses) {
            console.log(`  - ${item.amount} (${item.description})`);
        }
        console.log(`  Total Expenses = ${totalExpense()}`);
        console.log(`Balance: Rp${totalIncome() - totalExpense()}`);
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance,
    }
}

const account = personAccount('Muhammad', 'Fikri');
account.addIncome(5000000, 'Monthly Salary')
account.addIncome(1000000, 'Freelance Work')
account.addIncome(500000, 'Investment Income')
account.addExpense(1500000, 'Rent')
account.addExpense(1000000, 'Groceries')
account.addExpense(500000, 'Transportation')
account.accountBalance()
console.log('\n');
account.accountInfo()