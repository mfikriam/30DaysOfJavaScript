class Person {
	constructor(firstName, lastName, age, country, city) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
		this.country = country
		this.city = city
		this.score = 0
		this.skills = []
	}
	getFullName() {
		const fullName = this.firstName + ' ' + this.lastName
		return fullName
	}
	get getScore() {
		return this.score
	}
	get getSkills() {
		return this.skills
	}
	set setScore(score) {
		this.score += score
	}
	set setSkill(skill) {
		this.skills.push(skill)
	}
	getPersonInfo() {
		let fullName = this.getFullName()
		let skills =
			this.skills.length > 0 &&
			this.skills.slice(0, this.skills.length - 1).join(', ') +
			` and ${this.skills[this.skills.length - 1]}`

		let formattedSkills = skills ? `He knows ${skills}` : ''

		let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
		console.log(this)
		return info
	}
	static favoriteSkill() {
		const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
		const index = Math.floor(Math.random() * skills.length)
		console.log('hi')
		return skills[index]
	}
}

// console.log(Person.favoriteSkill())

class Student extends Person {
	constructor(firstName, lastName, age, country, city, gender) {
		super(firstName, lastName, age, country, city)
		this.gender = gender
	}

	saySomething() {
		console.log('I am a child of the person class')
	}
	getPersonInfo() {
		let fullName = this.getFullName()
		let skills =
			this.skills.length > 0 &&
			this.skills.slice(0, this.skills.length - 1).join(', ') +
			` and ${this.skills[this.skills.length - 1]}`

		let formattedSkills = skills ? `He knows ${skills}` : ''
		let pronoun = this.gender == 'Male' ? 'He' : 'She'

		let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
		console.log(this)
		return info
	}
}

const s1 = new Student(
	'Asabeneh',
	'Yetayeh',
	250,
	'Finland',
	'Helsinki',
	'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

// console.log(s1)
// console.log(s2)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())

// Exercises: Level 1
console.log('===================Exercises Level 1===================');

console.log("\n[Number 1]");
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
	constructor(name, age, color, legs) {
		this.name = name
		this.age = age
		this.color = color
		this.legs = legs
	}

	getName() {
		return this.name
	}
}

const animal = new Animal('Yotsu', 2, 'black', 4)
console.log(animal);
console.log(animal.getName());

console.log("\n[Number 2]");
// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs)
		this.breed = breed
	}

	bark() {
		console.log('woof woof');
	}
}

class Cat extends Animal {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs)
		this.breed = breed
	}

	meow() {
		console.log('miauwwww');
	}
}

const dog = new Dog('Baol', 4, 'white', 4, 'pitbull')
const cat = new Cat('Swift', 2, 'orange', 4, 'persian')

console.log(dog);
dog.bark()
console.log(cat);
cat.meow()

// Exercises: Level 2
console.log('\n');
console.log('===================Exercises Level 2===================');

console.log("\n[Number 1]");
// 1. Override the method you create in Animal class
class Bird extends Animal {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs)
		this.breed = breed
	}

	chirp() {
		console.log('ckckckck');
	}

	getName() {
		return `Bird's name: ${this.name}`
	}
}

const bird = new Bird('Lisa', 1, 'red', 2, 'sparrow')
console.log(bird);
bird.chirp()
console.log(bird.getName());

// Exercises: Level 3
console.log('\n');
console.log('===================Exercises Level 3===================');

console.log("\n[Number 1]");
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
/*
	```JS
	ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

	console.log('Count:', statistics.count()) // 25
	console.log('Sum: ', statistics.sum()) // 744
	console.log('Min: ', statistics.min()) // 24
	console.log('Max: ', statistics.max()) // 38
	console.log('Range: ', statistics.range() // 14
	console.log('Mean: ', statistics.mean()) // 30
	console.log('Median: ',statistics.median()) // 29
	console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
	console.log('Variance: ',statistics.var()) // 17.5
	console.log('Standard Deviation: ', statistics.std()) // 4.2
	console.log('Variance: ',statistics.var()) // 17.5
	console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
	```

	```sh
	// you output should look like this
	console.log(statistics.describe())
	Count: 25
	Sum:  744
	Min:  24
	Max:  38
	Range:  14
	Mean:  30
	Median:  29
	Mode:  (26, 5)
	Variance:  17.5
	Standard Deviation:  4.2
	Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
	```
*/

class Statictics {
	constructor(data) {
		this.data = data
	}

	count() {
		return this.data.length
	}

	sum() {
		return this.data.reduce((acc, num) => acc += num, 0)
	}

	min() {
		return this.data.reduce((acc, num) => {
			if (acc > num) {
				return num
			}
			return acc
		})
	}

	max() {
		return this.data.reduce((acc, num) => {
			if (acc < num) {
				return num
			}
			return acc
		})
	}

	range() {
		return this.max() - this.min()
	}

	mean() {
		return (this.sum() / this.data.length).toFixed(0)
	}

	median() {
		// Sorted ASC
		const sortedData = this.data.map(item => item).sort();
		const middleIndex = Math.floor(sortedData.length / 2);
		if (sortedData.length % 2 === 0) {
			return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
		} else {
			return sortedData[middleIndex];
		}
	}

	mode() {
		// Remove duplicate value
		const uniqueData = this.data.filter((item, index) => ages.indexOf(item) === index);
		// Create array of object data
		const arrayOfObjectData = uniqueData.map(age => {
			return { mode: age, count: 0 }
		})
		// Counting
		arrayOfObjectData.forEach(obj => {
			obj.count = this.data.reduce((acc, item) => {
				if (item === obj.mode) {
					return acc += 1
				}
				return acc
			}, 0)
		})
		// Sort By Count DESC
		arrayOfObjectData.sort((a, b) => b.count - a.count)

		return arrayOfObjectData[0]
	}

	var() {
		// Calculate the mean of the array.
		// Subtract the mean from each element in the array.
		// Square each difference and store the result in a new array.
		const squaredSubtractedData = this.data.map(age => (this.mean() - age) ** 2)
		// Calculate the mean of the new array of squared differences.
		const sum = squaredSubtractedData.reduce((acc, num) => acc += num, 0)
		// The result is the variance.
		return (sum / squaredSubtractedData.length).toFixed(1)
	}

	std() {
		// Find the mean of the data set
		// Find the difference between each data point and the mean
		// Square the differences and find their average
		// Take the square root of the result
		return Math.sqrt(this.var()).toFixed(1)
	}

	freqDist() {
		const frequency = {}
		this.data.forEach(item => {
			frequency[item] = frequency[item] + 1 || 1;
		})

		const result = []
		for (const key in frequency) {
			result.push([parseFloat(frequency[key] * 4).toFixed(1), parseInt(key)])
		}

		return result.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0])
	}

	describe() {
		console.log(`Count: ${this.count()}`);
		console.log(`Sum: ${this.sum()}`);
		console.log(`Min: ${this.min()}`);
		console.log(`Max: ${this.max()}`);
		console.log(`Range: ${this.range()}`);
		console.log(`Mean: ${this.mean()}`);
		console.log(`Median: ${this.median()}`);
		console.log(`Mode: (${this.mode().mode}, ${this.mode().count})`);
		console.log(`Variance: ${this.var()}`);
		console.log(`Standard Deviation: ${this.std()}`);
		console.log(`Frequency Distribution: [${this.freqDist().map(item => `(${item[0]}, ${item[1]})`).join(', ')}]`);
	}
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statictics(ages)

statistics.describe()

console.log("\n[Number 2]");
// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
		this.incomes = []
		this.expenses = []
	}

	totalIncome() {
		return this.incomes.reduce((acc, item) => acc += item.amount, 0);
	}

	totalExpense() {
		return this.expenses.reduce((acc, item) => acc += item.amount, 0);
	}

	accountInfo() {
		console.log(`Name		  : ${this.firstName} ${this.lastName}`);
		console.log(`Total Incomes : Rp${this.totalIncome()}`);
		console.log(`Total Expenses: Rp${this.totalExpense()}`);
	}

	addIncome(amount, description) {
		this.incomes.push({ amount, description });
	}

	addExpense(amount, description) {
		this.expenses.push({ amount, description });
	}

	accountBalance() {
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

const myself = new PersonAccount('Muhammad', 'Fikri')

myself.addIncome(5000000, 'Monthly Salary')
myself.addIncome(1000000, 'Freelance Work')
myself.addIncome(500000, 'Investment Income')
myself.addExpense(1500000, 'Rent')
myself.addExpense(1000000, 'Groceries')
myself.addExpense(500000, 'Transportation')
myself.accountBalance()
console.log('\n');
myself.accountInfo()