//task learn js
// let userName = prompt("Кто там?", "");

// if (userName === "Админ") {
// 	let pass = prompt("Пароль?", "");

// 	if (pass === "Я главный") {
// 		alert("Здравствуйте!");
// 	} else if (pass === "" || pass === null) {
// 		alert("Отменено");
// 	} else {
// 		alert("Неверный пароль");
// 	}
// } else if (userName === "" || userName === null) {
// 	alert("Отменено");
// } else {
// 	alert("Я вас не знаю");
// }
//task js bk 1
// const red = false;

// if (red) {
// 	console.log("true");

// 	if (!red) {
// 		console.log("true");
// 	} else {
// 		console.log("false");
// 	}
// } else {
// 	console.log("false");
// }
//task bk 2
// const id = "1234";
// let numId = prompt("you id", '');

// const result = numId === id ? alert("open") : alert('exit')
//task bk 3
// let randomNumber = Math.floor(Math.random() * 5);
// let pass = prompt(`Это шар судьбы и ваша цифра ${randomNumber}, напишите ее и получите предсказание`);

// switch (randomNumber) {
// 	case 1:
// 		alert("счастье");
// 		break;
// 	case 2:
// 		alert("красота");
// 		break;
// 	case 3:
// 		alert("успех");
// 		break;
// 	case 4:
// 		alert("пенис");
// 		break;
// 	case 5:
// 		alert("сое");
// 		break;
// 	default:
// 		alert("привет");
// }
//task bk 4
// let number = (String(Math.floor(Math.random() * 10)));
// console.log(number);
// let youNumber = prompt("my number", "");

// const result = youNumber === number ? alert("yes") : alert("no");
//task bk 5
// let youName = prompt("you name", "");
// switch (youName) {
// 	case "Artem":
// 		alert("hot");
// 		break;
// 	case "Artur":
// 		alert("welcome");
// 		break;
// 	case "Arut":
// 		alert("wery hot");
// 		break;
// 	case "Ashot":
// 		alert("cold");
// 		break;
// 	case "dog":
// 		alert("no");
// 		break;
// 	default:
// 		alert("it is name king bord kitchen");
// }
//task bk 6
// const set = ["камень", "ножницы", "бумага"];
// const you = prompt("камень, ножницы или бумага?", "");
// const computer = set[Math.floor(Math.random() * set.length)];
// console.log(`компьютер выбрал ${computer}`);
// console.log(`ты выбрал ${you}`);

// if (you === computer) {
// 	alert("ничья");
// } else if ((you === "камень" && computer === "ножницы") || (you === "ножницы" && computer === "бумага") || (you === "бумага" && computer === "камень")) {
// 	alert("ты выиграл");
// } else {
// 	alert("ты проиграл");
// }