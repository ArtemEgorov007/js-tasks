//task 01
//while
// let nr1 = 0;
// let nr2 = 0;
// let temp;
// fibonacciArray = [];

// while (fibonacciArray.length < 25) {
// 	fibonacciArray.push(nr1);
// 	temp = nr1 + nr2;
// 	nr1 = nr2;
// 	nr2 = temp;
// }

// console.log(fibonacciArray);

//task 2
//while
let maxGame = 5;
let random = Math.floor(Math.random() * maxGame) + 1;
console.log(random);
let correct = false;

while (!correct) {
	let question = prompt("от 1 до 5? ", " ");
	question = Number(question);
	if (question === random) {
		correct = true;
		console.log("вы угадали! " + random);
	} else if (question < random) {
		console.log("близко почти наша цифра " + random);
	} else {
		console.log("повторите!");
	}
	break;
}
