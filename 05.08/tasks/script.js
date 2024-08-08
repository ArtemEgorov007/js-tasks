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
// function createElement(tag, id, text) {
// 	const element = document.createElement(tag);
// 	element.id = id;
// 	element.innerText = text;
// 	return element;
// }

// const element = createElement("div", "header1", "Hello, World!");

// document.addEventListener("DOMContentLoaded", () => {
// 	document.body.append(element);
// });

// let meta = ["online", "offline", "rip", "walk"];

// const getUserName = () => {
// 	let name = prompt("you name ?");
// 	let randomStatusName = Math.floor(Math.random() * meta.length);
// 	return name + ' ' + meta[randomStatusName];
// };

// console.log(getUserName());
// Практическое занятие 6.3
// let arr1 = 15;
// let arr2 = 10;
// let resins = "+";

// const setParamArr = (x, y, res) => {
// 	if (res === "-") {
// 		return x - y;
// 	} else {
// 		return x + y;
// 	}
// };

// console.log(setParamArr(arr1, arr2, resins));
// Практическое занятие 6.4
// 1. Создайте пустой массив для хранения значений, которые будут рассчи-
// таны в цикле.
// 2. Создайте цикл, который выполняется десять раз, каждый раз увеличивая
// счетчик на 1 и генерируя два значения на каждой итерации. Чтобы полу-
// чить первое значение, умножьте значение счетчика на 5. Чтобы получить
// второе значение, умножьте значение счетчика само на себя.
// 3. Создайте функцию, которая возвращает значение двух параметров, пере-
// данных в функцию при ее вызове. Сложите значения и верните результат.
// 4. Внутри цикла вызовите функцию вычисления, передав в нее два значения
// в качестве аргументов и сохранив возвращенный результат в переменной
// ответа.
// 5. Не выходя из цикла, по мере его прохождения помещайте значения
// результатов в массив.
// 6. После завершения цикла выведите массив на экран.
// 7. Вы должны увидеть значения [0, 6, 14, 24, 36, 50, 66, 84, 104, 126].

const myArr = [];

for (let i = 0; i < 10; i++) {
	let count = i * 5;
	let count2 = i * i;
	let res = setParamArr(count, count2, "+");
	myArr.push(res);
}
console.log(myArr);
function setParamArr(x, y, res) {
	if (res === "-") {
		return x - y;
	} else {
		return x + y;
	}
}
