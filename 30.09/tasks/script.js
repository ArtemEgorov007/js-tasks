//test
// let car = {
// 	model: "golf",
// 	make: "Vols",
// 	year: "1999",
// 	color: "black"
// };

// for (let key of Object.keys(car)) {
// 	console.log(car[key]);
// }

//test

// let arrKeys = Object.keys(car);
// for(let i = 0; i < arrKeys.length; i++) {
//     console.log(arrKeys[i] + ': ' + car[arrKeys[i]]);
// }

//test
// let cars = [
// 	{
// 		model: "Golf",
// 		make: "Volkswagen",
// 		year: 1999,
// 		color: "black"
// 	},
// 	{
// 		model: "Picanto",
// 		make: "Kia",
// 		year: 2020,
// 		color: "red"
// 	},
// 	{
// 		model: "Peugeot",
// 		make: "208",
// 		year: 2021,
// 		color: "black"
// 	},
// 	{
// 		model: "Fiat",
// 		make: "Punto",
// 		year: 2020,
// 		color: "black"
// 	}
// ];

//test
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// 	if (i == 4) {
// 		break;
// 	}
// }

//test
// for (let i = 0; i < cars.length; i++) {
// 	if (cars[i].year >= 2020) {
// 		if (cars[i].color == "black") {
// 			console.log("i have found my new car:", cars[i]);
// 			break;
// 		}
// 	}
// }

//test
// for (let car of cars) {
// 	if (car.color !== "black") {
// 		continue;
// 	}
// 	if (car.year >= 2020) {
// 		console.log("we could get this one: ", car);
// 	}
// }

//test
// let i = 1;
// while (i < 50) {
//     i++;
// 	if ((i-1) % 2 === 0) {
// 		continue;
// 	}
// 	console.log(i-1);
// }

// for(let i = 1; i < 50; i = i + 2) {
//     console.log(i);
// }

// Это упражнение продемонстрирует создание строки со всеми цифрами по
// мере их перебора. Мы также можем установить значение для пропуска, до-
// бавив условие, в котором будет использоваться continue, пропуская условие
// соответствия. Второй вариант
// —
// выполнить то же упражнение и использо-
// вать ключевое слово break.
// 1. Создайте строковую переменную для ее использования в качестве вы-
// вода.
// 2. Выберите число, которое нужно пропустить, и установите его в качестве
// переменной.
// 3. Создайте цикл for, который будет считать до 10.
// 4. Добавьте условие, чтобы проверить, равно ли значение переменной из
// текущей итерации числу, которое следует пропустить.
// 5. Если, согласно заданному условию, число нужно пропустить, переходите
// к следующей цифре с помощью continue.
// 6. По мере перебора значений добавляйте новое значение счетчика в конец
// основной выходной переменной.
// 7. Выведите основную переменную после окончания цикла.
// 8. Запустите код снова, но замените continue на break и обратите внимание
// на разницу в выполнении. При достижении пропускаемого значения цикл
// не должен останавливаться.
//test
// let result = "";
// for (let i = 0; i < 10; i++) {
//     if (i === 2) {
//         continue;
//     }
//     result += i;
// }
// console.log(result);
//Практическое занятие 5.8
// let str = "";
// for (let i = 0; i < 10; i++) {
// 	if (i === 9) {
// 		continue;
// 	}
// 	str += i;

// }
// console.log(str);
//test
// let groups = [
// 	["Martin", "Daniel", "Keith"],
// 	["Margot", "Marina", "Ali"],
// 	["Helen", "Jonah", "Sambikos"]
// ];

//test
// for (let i = 0; i < groups.length; i++) {
// 	let mathches = 0;

// 	for (let j = 0; j < groups[i].length; j++) {
// 		if (groups[i][j].startsWith("M")) {
// 			mathches++;
// 		} else {
// 			continue;
// 		}
// 		if (mathches === 2) {
// 			console.log("Found a group with two names starting with an M:");
// 			console.log(groups[i]);
// 			break;
// 		}
// 	}
// }

//test
// for (let group of groups) {
// 	for (let member of group) {
// 		if (member.startsWith("M")) {
// 			console.log("found one startimg with M:", member);
// 			break;
// 		}
// 	}
// }

//Проект текущей главы
//Математическая таблица умножения
// 1. Создайте пустой массив для хранения итоговой таблицы умножения.
// 2. Задайте переменную value, чтобы указать, сколько значений вы хотите умно-
// жить друг на друга и отобразить результаты этого.
// 3. Создайте внешний цикл for для перебора значений каждой строки и массив
// temp для хранения значений строк. Каждая строка будет представлять собой
// массив ячеек, вложенных в итоговую таблицу.
// 4. Добавьте внутренний цикл for для значений столбцов, который будет заносить
// умноженные значения строк и столбцов в массив temp.
// 5. Добавьте временные строки данных, содержащие рассчитанные решения,
// в основной массив таблицы. Окончательный результат добавит строку значе-
// ний вычислений.

// let table = [];

// for (let i = 1; i <= 10; i++) {
// 	let temp = [];
// 	for (let j = 1; j <= 10; j++) {
// 		temp.push(i * j);
// 	}
// 	table.push(temp);
// }

// console.table(table);

// let table = [];
// let value = 5;
// for (let i = 1; i <= value; i++) {
// 	let temp = [];
// 	for (let j = 1; j <= value; j++) {
// 		temp.push(i * j);
// 	}
// 	table.push(temp);
// }
// console.table(table);
