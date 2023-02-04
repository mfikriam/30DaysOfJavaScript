// Exercises: Level 1
console.log("===================Exercises Level 1===================");

try {
    let lastName = 'Fikri';
    let fullName = firstName + '' + lastName;
} catch (err) {
    console.log('Name of the error:', err.name);
    console.log('Error message:', err.message);
} finally {
    console.log('In any case I will be executed.');
}
