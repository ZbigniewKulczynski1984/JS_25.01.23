let name = 'Aga';
let states = 50;

// variable nine is assigned the addition of 5 and 4
const nine = 5 + 4;

function sayHello() {
	console.log('Hello World');
}

sayHello();

function checkAge(name, age) {
	if (age < 21) {
		console.log(`Sorry ${name}, you aren't old enough to view this page!!!`);
	}
}

checkAge('Aga', 21);
checkAge('Goga', 27);
checkAge('Zbig', 38);
checkAge('Karol', 37);

const veggies = ["celery", 'broccoli', 'cauliflower', 'carrots', 'green beans']

for(i=0; i < veggies.length; i++){
    console.log(veggies[i]);
}

const users = [
    {name: "Will", age: 23}, {name: "Ben", age: 22}, {name: "Alex", age: 20}, 
    {name: "Gabi", age: 2}, {name: "Elisa", age: 1}   
];