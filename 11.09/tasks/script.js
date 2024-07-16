//task bk 1
// const set = ["камень", "ножницы", "бумага"];
// const computer = set[Math.floor(Math.random() * set.length)];
// const you = prompt("камень, ножницы или бумага?", "");

// console.log(`компьютер выбрал ${computer}`);
// console.log(`ты выбрал ${you}`);

// if (you === computer) {
// 	alert("ничья");
// } else if ((you === "камень" && computer === "ножницы") || (you === "ножницы" && computer === "бумага") || (you === "бумага" && computer === "камень")) {
// 	alert("ты выиграл");
// } else {
// 	alert("ты проиграл");
// }

//task bk 2
//while
// let n = 10;
// let sum = 0;

// while (n > 0) {
// 	sum += n;
// 	n -= 1;
// }

// console.log("Result " + sum);

//task bk 3
//do while
// let m = 10;
// const n = 20;
// let result = 1;

// do {
// 	if (m % 2 === 1) {
// 		result *= m;
// 	}
//     m++
// } while (m <= n);

// console.log(result);

//task bk 4
//for

// let result = 1;

// for (let m = 10; m <= 20; m++) {
// 	if (m % 2 === 1) {
// 		result *= m;
// 	}
// }

// console.log(result);

//task bk 5
//for calculate

// for(let i = 1; i <= 10; i++) {
//     console.log('\n=>' + i + '<=')

//     for(let j = 1; j <= 10; j++) {
//         console.log(i + 'x' + j + '=' + i * j)
//     }
// }

//task bk 6
//while calculate prompt +

// let result = 0;

// while (true) {
// 	const userInput = prompt("You number ?", "");
// 	if (!userInput) {
// 		break;
// 	}
// 	result += Number(userInput);
// }
// console.log(result);

//task bk 7
//minification

// let result = 1;

// for (let m = 10; m <= 20; m++) {
// 	if (m % 2 === 0) continue;
// 	result += m;
// }

// console.log(result);
