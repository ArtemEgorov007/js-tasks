document.addEventListener("DOMContentLoaded", () => {
	//function
	//Практическое занятие 6.1
	// const sumNumber = (a, b) => {
	// 	return a + b;
	// };

	// console.log(sumNumber(4, 5));

	// const val1 = 10;
	// const val2 = 20;

	// function numSum(a, b) {
	// 	let sum = a + b;
	// 	console.log(sum);
	// }

	// const result = numSum(val1, val2);
	// console.log(result);

	//Практическое занятие 6.2

	// const descriptions = ["This is a description of item 1", "This is a description of item 2", "This is a description of item 3"];

	// function retName() {
	// 	let you = prompt("What's your name? ");
	// 	let inddesc = Math.floor(Math.random() * descriptions.length);
	//     return descriptions[inddesc] + '' + you;
	// }

	// console.log(retName());

	//Практическое занятие 6.3
	// let val1 = 50;
	// let val2 = 30;
	// let ter = "+";

	// const terSum = (a, b, str) => {
	// 	if (str === "-") {
	// 		return a - b;
	// 	} else {
	// 		return a + b;
	// 	}
	// };

	// console.log(terSum(val1, val2, ter));
	//youtoube test
	function createElement(tag, id, text) {
		const element = document.createElement(tag);
		element.id = id;
		element.innerText = text;
		return element;
	}

	const element = createElement("div", "header1", "Hello, World!");
	document.body.append(element);
});
