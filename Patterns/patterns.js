//1st
// let rowLength = 5;
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < rowLength; j++) {
// 		console.log("*");
// 	}
// 	console.log("\n");
// }

//2nd
// let rowLength = 5;
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < i + 1; j++) {
// 		console.log("*");
// 	}
// 	console.log("\n");
// }

//3rd
// let rowLength = 5;
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < i + 1; j++) {
// 		console.log(j + 1);
// 	}
// 	console.log("\n");
// }

//4th
// let rowLength = 5;
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = 0; j < i + 1; j++) {
// 		console.log(i + 1);
// 	}
// 	console.log("\n");
// }

//5th
// let rowLength = 5;
// for (let i = rowLength; i > 0; i--) {
// 	for (let j = 0; j < i; j++) {
// 		console.log("*");
// 	}
// 	console.log("\n");
// }

//6th
// let rowLength = 5;
// for (let i = 0; i < rowLength; i++) {
// 	for (let j = rowLength; j > i; j--) {
// 		console.log(rowLength - j + 1);
// 	}
// 	console.log("\n");
// }

//7th
function pyramid() {
	let rowLength = 5;
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < rowLength - i - 1; j++) {
			console.log(" ");
		}
		for (let j = 0; j < i * 2 + 1; j++) {
			console.log("*");
		}
		for (let j = 0; j < rowLength - i - 1; j++) {
			console.log(" ");
		}
		console.log("\n");
	}
}
//pyramid();

//8th
function reversePyramid() {
	let rowLength = 5;
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < i; j++) {
			console.log(" ");
		}
		for (let j = rowLength * 2; j > i * 2 + 1; j--) {
			console.log("*");
		}
		for (let j = 0; j < i; j++) {
			console.log(" ");
		}
		console.log("\n");
	}
}

//reversePyramid();

//10th
function halfPyramidTwoWays() {
	let rowLength = 5;
	for (let i = 0; i < rowLength * 2; i++) {
		let stars = i;

		if (i >= rowLength) {
			stars = 2 * rowLength - i;
		}
		for (let j = 0; j < stars; j++) {
			console.log("*");
		}
		console.log("\n");
	}
}

//halfPyramidTwoWays();

//11th
function problem11() {
	let rowLength = 5;
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j <= i; j++) {
			console.log((i + j + 1) % 2);
		}
		console.log("\n");
	}
}

//problem11();

//12th
function problem12() {
	let rowLength = 4;
	for (let i = 1; i <= rowLength; i++) {
		for (let j = 1; j <= i; j++) {
			console.log(j);
		}
		for (let j = 1; j <= (rowLength - i) * 2; j++) {
			console.log(" ");
		}
		for (let j = i; j >= 1; j--) {
			console.log(j);
		}
		console.log("\n");
	}
}

//problem12();

function problem13() {
	let rowLength = 5;
	let count = 1;
	for (let i = 1; i <= rowLength; i++) {
		for (let j = 0; j < i; j++) {
			console.log(count);
			count = count + 1;
		}
		console.log("\n");
	}
}

//problem13();

function problem14() {
	let rowLength = 5;
	const startCharCode = "A".charCodeAt(0);
	for (let i = 1; i <= rowLength; i++) {
		for (let j = 0; j < i; j++) {
			console.log(String.fromCharCode(startCharCode + j));
		}
		console.log("\n");
	}
}

//problem14();

function problem15() {
	let rowLength = 5;
	const startCharCode = "A".charCodeAt(0);
	for (let i = rowLength; i >= 1; i--) {
		for (let j = 0; j < i; j++) {
			console.log(String.fromCharCode(startCharCode + j));
		}
		console.log("\n");
	}
}

//problem15();

function problem16() {
	let rowLength = 5;
	const startCharCode = "A".charCodeAt(0);
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j <= i; j++) {
			console.log(String.fromCharCode(startCharCode + i));
		}
		console.log("\n");
	}
}

//problem16();

function problem17() {
	let rowLength = 4;
	const startCharCode = "A".charCodeAt(0);
	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < rowLength - (i + 1); j++) {
			console.log(" ");
		}
		for (let j = 0; j <= i; j++) {
			console.log(String.fromCharCode(startCharCode + j));
		}
		for (let j = i - 1; j >= 0; j--) {
			console.log(String.fromCharCode(startCharCode + j));
		}
		for (let j = 0; j < rowLength - (i + 1); j++) {
			console.log(" ");
		}
		console.log("\n");
	}
}
//problem17();

function problem18() {
	let rowLength = 5;
	const startCharCode = "E".charCodeAt(0);
	for (let i = 0; i < rowLength; i++) {
		for (let j = i; j >= 0; j--) {
			console.log(String.fromCharCode(startCharCode - j));
		}
		console.log("\n");
	}
}

//problem18();

// function problem19() {
// 	let rowLength = 10;
// 	for (let i = 1; i <= rowLength; i++) {
// 		for (let j = 1; j <= rowLength; j++) {
// 			if (j > rowLength / 2 - (i - 1) && j <= rowLength / 2) {
// 				console.log(" ");
// 			} else if (
// 				j - rowLength / 2 < rowLength / 2 - (i - 1) &&
// 				j > rowLength / 2
// 			) {
// 				console.log(" ");
// 			} else {
// 				console.log("*");
// 			}
// 		}
// 		console.log("\n");
// 	}
// }

// problem19();

function problem19() {
	let rowLength = 5;
	for (let i = 1; i <= rowLength; i++) {
		for (let j = rowLength - (i - 1); j >= 1; j--) {
			console.log("*");
		}
		for (let j = 1; j < i; j++) {
			console.log(" ");
			console.log(" ");
		}
		for (let j = rowLength - (i - 1); j >= 1; j--) {
			console.log("*");
		}
		console.log("\n");
	}

	for (let i = 1; i <= rowLength; i++) {
		for (let j = 1; j <= i; j++) {
			console.log("*");
		}
		for (let j = rowLength - i; j >= 1; j--) {
			console.log(" ");
			console.log(" ");
		}
		for (let j = 1; j <= i; j++) {
			console.log("*");
		}
		console.log("\n");
	}
}

//problem19();

function problem20() {
	let rowLength = 5;
	for (let i = 1; i <= rowLength * 2 - 1; i++) {
		let stars = i;
		let spaces = rowLength - i;
		if (i > rowLength) {
			stars = rowLength * 2 - i;
		}
		if (i > rowLength) {
			spaces = i - rowLength;
		}
		for (let j = 1; j <= stars; j++) {
			console.log("*");
		}
		for (let j = spaces; j >= 1; j--) {
			console.log(" ");
			console.log(" ");
		}
		for (let j = 1; j <= stars; j++) {
			console.log("*");
		}
		console.log("\n");
	}
}

//problem20();

function problem21() {
	let rowLength = 5;
	for (let i = 1; i <= rowLength; i++) {
		for (let j = 1; j <= rowLength; j++) {
			if (i === 1 || j === 1 || i === rowLength || j === rowLength) {
				console.log("*");
			} else {
				console.log(" ");
			}
		}
		console.log("\n");
	}
}

//problem21();

function problem22() {
	let rowLength = 4;
	for (let i = 0; i < rowLength * 2 - 1; i++) {
		for (let j = 0; j < rowLength * 2 - 1; j++) {
			console.log(
				rowLength -
					Math.min(i, j, 2 * rowLength - 2 - j, 2 * rowLength - 2 - i)
			);
		}
		console.log("\n");
	}
}

problem22();
