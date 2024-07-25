//tk 5.4
// let myTable = [];
// let counter = 0;
// const cum = 4;
// const sum = 8;
// for(let i = 0; i < cum; i++) {
//     let tempTable = [];
//     for(let j = 0; j < sum; j++) {
//        counter++;
//        tempTable.push(counter);
//     }
//     myTable.push(tempTable)
// }
// console.table(myTable)

//practice
// let names = [" Jodf", " fdg", " dgggggg", " ggsss", " dsfdfsf"];
// for (let i = 0; i < names.length; i++) {
// 	console.log(`my friends` + names[i]);
// }

//practice
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
// 	if (names[i].startsWith("J")) {
// 		delete names[i];
// 		continue;
// 	}
// 	names[i] = "hello" + " " + names[i];
// }
// console.log(names);

//5.5
// let grid = [];
// const acls = 64;
// let counter = 0;
// let row;

// for (let i = 0; i < acls + 1; i++) {
// 	if (counter % 8 == 0) {
// 		if (row != undefined) {
// 			grid.push(row);
// 		}
//         row = [];
// 	}
//     counter++
//     let temp = counter;
//     row.push(temp);

// }

// console.table(grid);
//5.6
// let sumX = [];
// for(let i = 0; i < 10; i++) {
// 	sumX.push(i + 1);
// }
// console.log(sumX);

// for(let j = 0; j < sumX.length; j++) {
// 	console.log(sumX[j]);
// }

// for(let val of sumX) {
//     console.log(val)
// }
//5.7
// let car = {
// 	model: "Golf",
// 	make: "Volkswagen",
// 	year: 1999,
// 	color: "black"
// };

// for(let prop in car ) {
//     console.log(car[prop])
// }