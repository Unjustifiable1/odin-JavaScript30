// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log('Cardio #1\n');

const nineteen = people.some((person) => 2023 - person.year);

console.log(nineteen + '\n');


// Array.prototype.every() // is everyone 19 or older?
console.log('Cardio #2\n');

const allNineteen = people.every((person) => 19 <= (2023 - person.year));

console.log(allNineteen + '\n');

const notNineteen = people.filter((person) => 19 > (2023 - person.year));

console.table(notNineteen);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log('Cardio #3\n');

const findItem = comments.find((comment) => comment.id === 823423);

console.table(findItem);


// Array.prototype.findIndex()
// Find the comment with this ID
console.log('Cardio #4\n');

const whereItem = comments.findIndex((comment) => comment.id === 823423);

console.log("Comment is at index " + whereItem);


// delete the comment with the ID of 823423
console.log('Cardio #5\n');

console.log(comments);
comments.splice(whereItem, 2);
console.log(comments);